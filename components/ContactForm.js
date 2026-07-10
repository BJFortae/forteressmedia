"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | err

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          <span>First name</span>
          <input name="firstName" placeholder="First name" maxLength={80} required />
        </label>
        <label>
          <span>Last name</span>
          <input name="lastName" placeholder="Last name" maxLength={80} required />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Email</span>
          <input name="email" type="email" placeholder="Email" maxLength={254} required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" placeholder="Phone" maxLength={30} />
        </label>
      </div>
      <label className="honeypot">
        <span>Website</span>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" placeholder="How can I help?" maxLength={2000} required />
      </label>
      <button
        className="btn-primary"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "ok" && (
        <div className="form-status ok">
          Got it — I&apos;ll get back to you within one business day.
        </div>
      )}
      {status === "err" && (
        <div className="form-status err">
          Something went wrong. Email me directly at contact@forteressmedia.com.
        </div>
      )}
    </form>
  );
}
