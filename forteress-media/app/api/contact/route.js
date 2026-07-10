import { Resend } from "resend";

export async function POST(request) {
  const { firstName, lastName, email, phone, message } = await request.json();

  if (!firstName || !lastName || !email || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "RESEND_API_KEY is not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

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
