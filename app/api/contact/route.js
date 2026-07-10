import { Resend } from "resend";

const limits = {
  firstName: 80,
  lastName: 80,
  email: 254,
  phone: 30,
  message: 2000,
};
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimitWindowMs = 10 * 60 * 1000;
const maxRequestsPerWindow = 5;
const rateLimitStore = new Map();

function cleanString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(request) {
  const now = Date.now();
  const ip = getClientIp(request);
  const record = rateLimitStore.get(ip);

  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }

  if (!record || record.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  record.count += 1;
  return record.count > maxRequestsPerWindow;
}

function validateContactPayload(payload) {
  const data = {
    firstName: cleanString(payload.firstName),
    lastName: cleanString(payload.lastName),
    email: cleanString(payload.email),
    phone: cleanString(payload.phone),
    message: cleanString(payload.message),
    website: cleanString(payload.website),
  };

  if (data.website) {
    return { ok: true, spam: true };
  }

  const errors = {};

  for (const field of ["firstName", "lastName", "email", "message"]) {
    if (!data[field]) {
      errors[field] = "Required";
    }
  }

  for (const [field, maxLength] of Object.entries(limits)) {
    if (data[field] && data[field].length > maxLength) {
      errors[field] = `Must be ${maxLength} characters or fewer`;
    }
  }

  if (data.email && !emailPattern.test(data.email)) {
    errors.email = "Enter a valid email address";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data };
}

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (isRateLimited(request)) {
    return Response.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const result = validateContactPayload(payload);

  if (result.spam) {
    return Response.json({ ok: true });
  }

  if (!result.ok) {
    return Response.json(
      { error: "Invalid contact request", fields: result.errors },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "RESEND_API_KEY is not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { firstName, lastName, email, phone, message } = result.data;

  const { error } = await resend.emails.send({
    from: `Forteress Media <${process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"}>`,
    to: [process.env.CONTACT_TO_EMAIL || "contact@fortressmedia.com"],
    replyTo: email,
    subject: `New inquiry from ${firstName} ${lastName}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ ok: true });
}
