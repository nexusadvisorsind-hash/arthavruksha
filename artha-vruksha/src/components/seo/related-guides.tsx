import Link from "next/link";

export type RelatedItem = { href: string; title: string; note: string };

/** Three hand-picked links at the foot of a page. Keeps each topic cluster linked in both directions. */
export function RelatedGuides({ items }: { items: RelatedItem[] }) {
  return (
    <section className="py-12 bg-background border-t border-border" aria-labelledby="related-guides">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="related-guides" className="font-heading font-semibold text-xl text-primary mb-5">Related guides and tools</h2>
        <ul className="grid md:grid-cols-3 gap-6">
          {items.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="font-heading font-semibold text-lg text-primary hover:text-secondary transition-colors">{r.title}</Link>
              <p className="font-body text-sm text-foreground-muted mt-1 leading-relaxed">{r.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
