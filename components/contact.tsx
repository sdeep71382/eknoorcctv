"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/lib/site-data";

export function Contact({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (!event.currentTarget.reportValidity()) return; setSubmitted(true); };
  return <section className={compact ? "contact-block compact" : "section contact-block"}><div className="shell contact-grid"><div><p className="eyebrow"><span aria-hidden="true">▱</span> CONTACT US</p><h2>Let’s discuss your <span>security needs</span></h2><p id="form-disclosure">Call, email, or send a message. This demonstration validates locally and does not transmit form data.</p><ul><li><strong>Phone</strong><a href={`tel:${contact.phone}`}>{contact.phone}</a></li><li><strong>Email</strong><a href={`mailto:${contact.email}`}>{contact.email}</a></li><li><strong>Address</strong><span>{contact.address}</span></li></ul></div><form onSubmit={submit} onChange={() => setSubmitted(false)} aria-describedby="form-disclosure"><label>Name<input required name="name" autoComplete="name" minLength={2} maxLength={80} /></label><label>Email<input required type="email" name="email" autoComplete="email" maxLength={120} /></label><label>Phone<input required type="tel" name="phone" autoComplete="tel" inputMode="tel" pattern="[0-9+() -]{7,20}" maxLength={20} /></label><label>Message<textarea required name="message" rows={5} minLength={10} maxLength={1000} /></label><button className="button" type="submit">Validate Message →</button>{submitted && <p className="form-note" role="status" aria-live="polite">Thanks — the demo form validated successfully. No data was sent.</p>}</form></div></section>;
}
