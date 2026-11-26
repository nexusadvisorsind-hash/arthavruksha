import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, MapPin } from "lucide-react";
import { pageMeta, breadcrumbLd, webPageLd, formatDate, PAGE_DATES, SITE_URL } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { ShortAnswer } from "@/components/seo/short-answer";
import { FaqSection } from "@/components/seo/faq-section";
import { OfficialSources } from "@/components/seo/official-sources";
import { RequirementBar } from "@/components/requirement-bar";
import { Button } from "@/components/ui/button";
import { PUNE_AREAS, type PuneAreaSlug } from "@/lib/pune-areas";
import { PUNE_SOCIETIES } from "@/lib/pune-societies";
import { INTENT_AREAS, INTENT_ORDER, INTENT_LABEL, buildIntentPage, type IntentSlug } from "@/lib/pune-intents";
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/contact";

type Params = { place: string; area: string; intent: string };

export function generateStaticParams() {
  return INTENT_AREAS.flatMap((area) => INTENT_ORDER.map((intent) => ({ place: "pune", area, intent })));
}
export const dynamicParams = false;

function load(p: Params) {
  if (p.place !== "pune" || !INTENT_AREAS.includes(p.area as PuneAreaSlug)) return null;
  const page = buildIntentPage(p.area as PuneAreaSlug, p.intent as IntentSlug);
  return page ? { page, area: PUNE_AREAS[p.area as PuneAreaSlug] } : null;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = await params;
  const d = load(p);
  if (!d) return {};
  return pageMeta({ title: d.page.title, description: d.page.description, path: `/real-estate/pune/${p.area}/${p.intent}` });
}

export default async function IntentPage({ params }: { params: Promise<Params> }) {
  const p = await params;
  const d = load(p);
  if (!d) notFound();
  const { page, area } = d;
  const path = `/real-estate/pune/${p.area}/${p.intent}`;
  const areaPath = `/real-estate/pune/${p.area}`;
  const societies = PUNE_SOCIETIES[p.area as PuneAreaSlug] ?? [];
  const sibling = INTENT_ORDER.filter((s) => s !== p.intent);
  const otherAreas = INTENT_AREAS.filter((s) => s !== p.area);
  const typeWord = page.typeWord;
  const intentLabel = INTENT_LABEL[p.intent as IntentSlug].toLowerCase();
  const barAreas = [area.name, ...area.near.map((n) => PUNE_AREAS[n].name), "Other area in Pune"];

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    serviceType: `Real estate brokerage: ${intentLabel}`,
    name: page.h1,
    description: page.description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Place", name: `${page.areaFull}, Pune` },
  };

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Real estate", path: "/real-estate" },
          { name: "Pune", path: "/real-estate/pune" },
          { name: area.name, path: areaPath },
          { name: INTENT_LABEL[p.intent as IntentSlug], path },
        ])}
      />
      <JsonLd data={webPageLd({ path, name: page.title, description: page.short })} />

      <section className="hero-re text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14 md:pt-20 md:pb-20">
          <nav aria-label="Breadcrumb" className="font-body text-sm text-primary-foreground/70 mb-5">
            <Link href="/real-estate" className="inline-block py-3 hover:text-accent">Real estate</Link> /{" "}
            <Link href="/real-estate/pune" className="inline-block py-3 hover:text-accent">Pune</Link> /{" "}
            <Link href={areaPath} className="inline-block py-3 hover:text-accent">{area.name}</Link> /{" "}
            <span className="text-primary-foreground/90">{INTENT_LABEL[p.intent as IntentSlug]}</span>
          </nav>
          <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.08] mb-5 max-w-4xl">{page.h1}</h1>
          <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure mb-8">{page.lead}</p>
          <RequirementBar areas={barAreas} defaultArea={area.name} />
          <p className="font-body text-sm text-primary-foreground/80 mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-accent" /> MahaRERA registered, number shown in the footer</span>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex min-h-11 items-center hover:text-accent">Call {PHONE_DISPLAY}</a>
            <span>Meetings by appointment</span>
          </p>
        </div>
      </section>

      <ShortAnswer updated={formatDate(PAGE_DATES[path])}>{page.short}</ShortAnswer>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">{page.heading}</h2>
          <p className="font-body text-foreground-muted leading-relaxed mb-4">{page.local}</p>
          {page.kind !== "flat" && (
            <>
              <p className="font-body text-foreground-muted leading-relaxed mb-2">Places people usually compare:</p>
              <ul className="list-disc pl-6 space-y-1 font-body text-foreground-muted">
                {page.hubs.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface border-y border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">{page.checks.heading}</h2>
          <ul className="space-y-3">
            {page.checks.items.map((c) => (
              <li key={c} className="flex gap-3 font-body text-foreground-muted leading-relaxed">
                <BadgeCheck className="h-5 w-5 text-green shrink-0 mt-0.5" aria-hidden="true" /> {c}
              </li>
            ))}
          </ul>
          <p className="font-body text-sm text-foreground-muted mt-6">
            Rules and fees change. Confirm current registration, stamp duty and tax rules with the official bodies or a professional. See the{" "}
            <Link href="/blog/leave-and-license-agreement-pune-explained" className="underline hover:text-secondary">leave and license guide</Link>{" "}
            and the <Link href="/blog/how-to-check-rera-registration-maharashtra-gujarat" className="underline hover:text-secondary">RERA check guide</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">How it works</h2>
          <ol className="space-y-4 list-decimal pl-6">
            {page.steps.map((s) => (
              <li key={s.title} className="font-body text-foreground-muted leading-relaxed">
                <strong className="text-primary font-semibold">{s.title}.</strong> {s.body}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {page.kind === "flat" && societies.length > 0 && (
        <section className="py-12 bg-surface border-y border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">Societies and projects people ask about in {page.areaShort}</h2>
            <ul className="flex flex-wrap gap-2 mb-4">
              {societies.map((s) => (
                <li key={s} className="font-body text-sm rounded-full border border-border bg-background px-3 py-1.5 text-primary">{s}</li>
              ))}
            </ul>
            <p className="font-body text-sm text-foreground-muted">
              Names are listed to help you find the right area. Availability changes daily, so message your society, BHK and budget on WhatsApp for current options.
            </p>
          </div>
        </section>
      )}

      <FaqSection faqs={page.faqs} heading={`${INTENT_LABEL[p.intent as IntentSlug]} in ${page.areaShort}: common questions`} />
      <OfficialSources keys={["maharera"]} />

      <section className="py-12 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading font-semibold text-xl text-primary mb-4">More in {page.areaShort}</h2>
            <ul className="space-y-1">
              {sibling.map((s) => (
                <li key={s}>
                  <Link href={`${areaPath}/${s}`} className="inline-flex min-h-11 items-center font-body text-primary underline hover:text-secondary">
                    {INTENT_LABEL[s]} in {page.areaShort}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={areaPath} className="inline-flex min-h-11 items-center font-body text-primary underline hover:text-secondary">All property in {area.name}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading font-semibold text-xl text-primary mb-4">{INTENT_LABEL[p.intent as IntentSlug]} in nearby areas</h2>
            <ul className="space-y-1">
              {otherAreas.map((s) => (
                <li key={s}>
                  <Link href={`/real-estate/pune/${s}/${p.intent}`} className="inline-flex min-h-11 items-center gap-2 font-body text-primary underline hover:text-secondary">
                    <MapPin className="h-4 w-4 text-secondary shrink-0" aria-hidden="true" /> {INTENT_LABEL[p.intent as IntentSlug]} in {PUNE_AREAS[s].name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 hero-re text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">{INTENT_LABEL[p.intent as IntentSlug]} in {page.areaShort}?</h2>
            <p className="font-body text-primary-foreground/85 measure">Message or call {PHONE_DISPLAY}. Meetings are by appointment.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg"><a href={whatsappLink(`Hello, I am looking for ${intentLabel} in ${page.areaFull}, Pune. Please contact me.`)} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowRight className="ml-2 h-5 w-5" /></a></Button>
            <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10"><Link href="/contact">Enquiry form</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
