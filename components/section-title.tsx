export function SectionTitle({ eyebrow, title, accent }: { eyebrow: string; title: string; accent?: string }) {
  return (
    <div className="section-title">
      <p className="eyebrow"><span aria-hidden="true">▱</span> {eyebrow}</p>
      <h2>{title} {accent && <span>{accent}</span>}</h2>
    </div>
  );
}
