import { ShieldCheck } from "lucide-react";
import { BackgroundGrid } from "./aceternity-foundation";

export function SectionTitle({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
}) {
  return (
    <div className="section-title">
      <BackgroundGrid />
      <p className="eyebrow">
        <span className="eyebrow-icon" aria-hidden="true">
          <ShieldCheck size={16} strokeWidth={2.2} />
        </span>
        {eyebrow}
      </p>
      <h2>
        {title} {accent && <span>{accent}</span>}
      </h2>
    </div>
  );
}
