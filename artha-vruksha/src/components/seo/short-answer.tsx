/** The one-paragraph answer at the top of a page. Search and AI tools quote this block. */
export function ShortAnswer({ children, updated }: { children: React.ReactNode; updated?: string }) {
  return (
    <section className="bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div data-short-answer className="max-w-3xl border-l-4 border-l-accent pl-5">
          <p className="font-body text-base md:text-lg text-foreground leading-relaxed">
            <strong className="font-semibold text-primary">The short answer. </strong>
            {children}
          </p>
          {updated && <p className="font-body text-sm text-foreground-muted mt-2">Last updated {updated}</p>}
        </div>
      </div>
    </section>
  );
}
