import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Building2, Home, MapPin } from "lucide-react";
import { pageMeta, breadcrumbLd, webPageLd, formatDate, PAGE_DATES, SITE_URL } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { ShortAnswer } from "@/components/seo/short-answer";
import { FaqSection } from "@/components/seo/faq-section";
import { OfficialSources } from "@/components/seo/official-sources";
import { RequirementBar } from "@/components/requirement-bar";
import { Button } from "@/components/ui/button";
import { PUNE_AREAS, PUNE_AREA_ORDER, type PuneAreaSlug } from "@/lib/pune-areas";
import { PUNE_SOCIETIES } from "@/lib/pune-societies";
import { BHK_COPY } from "@/lib/pune-bhk";
import { INTENT_AREAS, INTENT_ORDER, INTENT_LABEL } from "@/lib/pune-intents";
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/contact";

type Params = { place: string; area: string };

/** Area pages exist for Pune only. */
export function generateStaticParams() {
  return PUNE_AREA_ORDER.map((area) => ({ place: "pune", area }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { place, area } = await params;
  const a = place === "pune" ? PUNE_AREAS[area as PuneAreaSlug] : undefined;
  if (!a) return {};
  return pageMeta({ title: a.seoTitle, description: a.description, path: `/real-estate/pune/${a.slug}` });
}

export default async function PuneAreaPage({ params }: { params: Promise<Params> }) {
  const { place, area } = await params;
  const a = place === "pune" ? PUNE_AREAS[area as PuneAreaSlug] : undefined;
  if (!a) notFound();
  const path = `/real-estate/pune/${a.slug}`;
  const near = a.near.map((s) => PUNE_AREAS[s]);
  const societies = PUNE_SOCIETIES[a.slug as PuneAreaSlug] ?? [];
  const barAreas = [a.name, ...near.map((n) => n.name), "Other area in Pune"];

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    serviceType: "Real estate brokerage: rent, lease, buy and sell",
    name: a.h1,
    description: a.description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Place", name: `${a.name}, Pune` },
  };

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Real estate", path: "/real-estate" },
          { name: "Pune", path: "/real-estate/pune" },
          { name: a.name, path },
        ])}
      />
      <JsonLd data={webPageLd({ path, name: a.seoTitle, description: a.short })} />

      <section className="hero-re text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14 md:pt-20 md:pb-20">
          <nav aria-label="Breadcrumb" className="font-body text-sm text-primary-foreground/70 mb-5">
            <Link href="/real-estate" className="inline-block py-3 hover:text-accent">Real estate</Link> /{" "}
            <Link href="/real-estate/pune" className="inline-block py-3 hover:text-accent">Pune</Link> /{" "}
            <span className="text-primary-foreground/90">{a.name}</span>
          </nav>
          <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.08] mb-5 max-w-4xl">{a.h1}</h1>
          <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure mb-8">{a.lead}</p>
          <RequirementBar areas={barAreas} />
          <p className="font-body text-sm text-primary-foreground/80 mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-accent" /> MahaRERA registered, number shown in the footer</span>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex min-h-11 items-center hover:text-accent">Call {PHONE_DISPLAY}</a>
            <span>Meetings by appointment</span>
          </p>
        </div>
      </section>

      <ShortAnswer updated={formatDate(PAGE_DATES[path])}>{a.short}</ShortAnswer>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">What is {a.name} like for property?</h2>
          {a.about.map((t) => (
            <p key={t} className="font-body text-foreground-muted leading-relaxed mb-4 last:mb-0">{t}</p>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-x-12 gap-y-10">
          <div className="flex gap-4">
            <Home className="h-8 w-8 text-green shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h2 className="font-heading font-semibold text-2xl text-primary mb-2">{a.residential.heading}</h2>
              <p className="font-body text-foreground-muted leading-relaxed">{a.residential.body}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Building2 className="h-8 w-8 text-green shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h2 className="font-heading font-semibold text-2xl text-primary mb-2">{a.commercial.heading}</h2>
              <p className="font-body text-foreground-muted leading-relaxed">{a.commercial.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">1 BHK, 2 BHK and 3 BHK flats in {a.name}</h2>
          <p className="font-body text-foreground-muted leading-relaxed mb-5">
            Whether you want a 1 BHK, 2 BHK or 3 BHK flat in {a.name} for rent or for sale, the size label is only the start. Compare the actual carpet area, the floor, parking and maintenance. No rent or price is listed here, because availability changes daily.
          </p>
          <dl className="space-y-4">
            {([["1 BHK flat in " + a.name, BHK_COPY[a.slug].one], ["2 BHK flat in " + a.name, BHK_COPY[a.slug].two], ["3 BHK flat in " + a.name, BHK_COPY[a.slug].three]] as const).map(([t, d]) => (
              <div key={t}>
                <dt className="font-heading font-semibold text-xl text-primary">{t}</dt>
                <dd className="font-body text-foreground-muted leading-relaxed">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">{a.checks.heading}</h2>
          <ul className="space-y-3">
            {a.checks.items.map((c) => (
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

      {societies.length > 0 && (
        <section className="py-12 bg-surface border-y border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">Societies and projects people ask about in {a.name}</h2>
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

      {INTENT_AREAS.includes(a.slug as PuneAreaSlug) && (
        <section className="py-12 bg-background border-t border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">Search by type in {a.name}</h2>
            <ul className="grid sm:grid-cols-2 gap-x-6">
              {INTENT_ORDER.map((i) => (
                <li key={i}>
                  <Link href={`${path}/${i}`} className="inline-flex min-h-11 items-center font-body text-primary underline hover:text-secondary">
                    {INTENT_LABEL[i]} in {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <FaqSection faqs={a.faqs} heading={`Property in ${a.name}: common questions`} />
      <OfficialSources keys={["maharera"]} />

      <section className="py-12 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl text-primary mb-5">Nearby areas in Pune</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {near.map((n) => (
              <li key={n.slug}>
                <Link href={`/real-estate/pune/${n.slug}`} className="inline-flex min-h-11 items-center gap-2 font-heading font-semibold text-lg text-primary hover:text-secondary transition-colors">
                  <MapPin className="h-4 w-4 text-secondary shrink-0" aria-hidden="true" /> {n.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="font-body text-sm text-foreground-muted mt-4">
            <Link href="/real-estate/pune" className="underline hover:text-secondary">All Pune areas</Link>
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 hero-re text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Looking for property in {a.name}?</h2>
            <p className="font-body text-primary-foreground/85 measure">Message or call {PHONE_DISPLAY}. Meetings are by appointment.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg"><a href={whatsappLink(`Hello, I am looking for property in ${a.name}, Pune. Please contact me.`)} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowRight className="ml-2 h-5 w-5" /></a></Button>
            <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10"><Link href="/contact">Enquiry form</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
