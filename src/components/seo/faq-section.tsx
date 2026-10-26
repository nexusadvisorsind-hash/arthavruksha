import { ChevronDown } from "lucide-react";
import { JsonLd } from "./json-ld";
import { faqLd } from "@/lib/seo";

export type Faq = { q: string; a: string };

/** Visible questions and the matching FAQPage markup, generated from the same list so they never drift apart. */
export function FaqSection({ faqs, heading = "Common questions", id = "faq", schema = true }: { faqs: Faq[]; heading?: string; id?: string; schema?: boolean }) {
  return (
    <section id={id} className="py-16 md:py-24 bg-background">
      {schema && <JsonLd data={faqLd(faqs)} />}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-8">{heading}</h2>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-semibold text-lg text-primary">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-secondary transition-transform group-open:rotate-180" />
              </summary>
              <p className="font-body text-foreground-muted leading-relaxed mt-3 measure">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
