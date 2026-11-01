import type { ReactNode } from "react";
import { contact } from "@/lib/site-data";

type ContactKind = "email" | "phone" | "whatsapp";

export function ContactDetail({
  children,
  className,
  kind,
  value,
}: {
  children: ReactNode;
  className?: string;
  kind: ContactKind;
  value: string;
}) {
  if (contact.isPlaceholder) {
    return (
      <span
        aria-label={`${kind} contact placeholder`}
        className={className}
        data-placeholder-contact=""
        title="Contact details will be enabled once verified"
      >
        {children}
      </span>
    );
  }

  const href =
    kind === "email"
      ? `mailto:${value}`
      : kind === "whatsapp"
        ? `https://wa.me/${value.replace(/\D/g, "")}`
        : `tel:${value}`;

  return (
    <a
      className={className}
      href={href}
      rel={kind === "whatsapp" ? "noopener noreferrer" : undefined}
      target={kind === "whatsapp" ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}
