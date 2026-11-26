import { ChevronDown } from "lucide-react";
import { JsonLd } from "./json-ld";
import { faqLd } from "@/lib/seo";

export type Faq = { q: string; a: string };

/** Visible questions and the matching FAQPage markup, generated from the same list so they never drift apart. */
export function FaqSection({ faqs, heading = "Common questions", id = "faq", schema = true }: { faqs: Faq[]; heading?: string; id?: string; schema?: boolean }) {
  return (
    <section id={id} className="py-16 md:py-24 bg-background">
      {schema && <JsonLd data={faqLd(faqs)} />}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-14">
        <div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">{heading}</h2>
          <p className="font-body text-sm text-foreground-muted leading-relaxed measure">Short answers. For anything else, call or message and a reply follows.</p>
        </div>
        <div className="divide-y divide-border rounded-2xl border border-border bg-white px-5 md:px-7">
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
