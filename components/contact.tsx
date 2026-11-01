"use client";

import { useState } from "react";
import { contact } from "@/lib/site-data";
import { ContactDetail } from "./contact-detail";

type Fields = { name: string; email: string; phone: string; message: string };

const emptyForm: Fields = { name: "", email: "", phone: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[0-9+()\-\s]{7,20}$/;

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!emailPattern.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!phonePattern.test(values.phone.trim())) errors.phone = "Please enter a valid phone number.";
  if (values.message.trim().length < 10) errors.message = "Please share a few more details.";
  return errors;
}

export function Contact({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<Fields>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [validated, setValidated] = useState(false);

  const update = (field: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));
    if (validated) setValidated(false);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstField = Object.keys(nextErrors)[0];
      event.currentTarget.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
      return;
    }

    setErrors({});
    setValidated(true);
  };

  const describedBy = (field: keyof Fields) => (errors[field] ? `contact-${field}-error` : undefined);

  return (
    <section className={compact ? "contact-block compact" : "section contact-block"}>
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow"><span aria-hidden="true">▱</span> CONTACT US</p>
          <h2>Let’s discuss your <span>security needs</span></h2>
          <p id="form-disclosure">Call or email us directly. This preview form checks your message locally and does not transmit or store any information.</p>
          <ul className="contact-details">
            <li><strong>Phone</strong><ContactDetail kind="phone" value={contact.phone}>{contact.phone}</ContactDetail></li>
            <li><strong>Sales</strong><ContactDetail kind="phone" value={contact.sales}>{contact.sales}</ContactDetail></li>
            <li><strong>Email</strong><ContactDetail kind="email" value={contact.email}>{contact.email}</ContactDetail></li>
            <li><strong>Address</strong><span>{contact.address}</span></li>
          </ul>
        </div>
        <form onSubmit={submit} noValidate aria-describedby="form-disclosure">
          <label className="field">
            <span>Name</span>
            <input
              required
              name="name"
              autoComplete="name"
              maxLength={80}
              value={values.name}
              onChange={update("name")}
              aria-invalid={errors.name ? "true" : undefined}
              aria-describedby={describedBy("name")}
            />
            {errors.name && <small className="field-error" id="contact-name-error">{errors.name}</small>}
          </label>
          <label className="field">
            <span>Email</span>
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              maxLength={120}
              value={values.email}
              onChange={update("email")}
              aria-invalid={errors.email ? "true" : undefined}
              aria-describedby={describedBy("email")}
            />
            {errors.email && <small className="field-error" id="contact-email-error">{errors.email}</small>}
          </label>
          <label className="field">
            <span>Phone</span>
            <input
              required
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              maxLength={20}
              value={values.phone}
              onChange={update("phone")}
              aria-invalid={errors.phone ? "true" : undefined}
              aria-describedby={describedBy("phone")}
            />
            {errors.phone && <small className="field-error" id="contact-phone-error">{errors.phone}</small>}
          </label>
          <label className="field field-wide">
            <span>Message</span>
            <textarea
              required
              name="message"
              rows={5}
              minLength={10}
              maxLength={1000}
              value={values.message}
              onChange={update("message")}
              aria-invalid={errors.message ? "true" : undefined}
              aria-describedby={describedBy("message")}
            />
            {errors.message && <small className="field-error" id="contact-message-error">{errors.message}</small>}
          </label>
          <button className="button" type="submit">
            Validate Message →
          </button>
          {validated && (
            <p className="form-note" role="status" aria-live="polite">
              Your message is complete. No data was sent; please call or email Eknoor CCTV using the details on this page.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
