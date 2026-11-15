import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Building2, Home, Handshake, Key, MapPin, MessageCircle, TriangleAlert } from "lucide-react";
import { pageMeta, breadcrumbLd, webPageLd, formatDate, PAGE_DATES, SITE_URL } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { ShortAnswer } from "@/components/seo/short-answer";
import { FaqSection } from "@/components/seo/faq-section";
import { OfficialSources } from "@/components/seo/official-sources";
import { RequirementBar } from "@/components/requirement-bar";
import { Button } from "@/components/ui/button";
import { PLACES, PLACE_ORDER, type PlaceSlug } from "@/lib/re-locations";
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/contact";

type Params = { place: string };

export function generateStaticParams() {
  return PLACE_ORDER.map((place) => ({ place }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { place } = await params;
  const p = PLACES[place as PlaceSlug];
  if (!p) return {};
  return pageMeta({ title: p.seoTitle, description: p.description, path: `/real-estate/${p.slug}` });
}

const NEED_ICONS = [Key, Building2, Home, Handshake];

export default async function PlacePage({ params }: { params: Promise<Params> }) {
  const { place } = await params;
  const p = PLACES[place as PlaceSlug];
  if (!p) notFound();
  const path = `/real-estate/${p.slug}`;
  const others = PLACE_ORDER.filter((s) => s !== p.slug).map((s) => PLACES[s]);
  const allAreas = p.groups.flatMap((g) => g.areas.map((a) => a.name));

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    serviceType: "Real estate brokerage: rent, lease, buy and sell",
    name: p.h1,
    description: p.description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: allAreas.map((n) => ({ "@type": "Place", name: `${n}, ${p.name}` })),
  };

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd([{ name: "Real estate", path: "/real-estate" }, { name: p.name, path }])} />
      <JsonLd data={webPageLd({ path, name: p.seoTitle, description: p.short })} />

      <section className="hero-re text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14 md:pt-20 md:pb-20">
          <nav aria-label="Breadcrumb" className="font-body text-sm text-primary-foreground/70 mb-5">
            <Link href="/real-estate" className="hover:text-accent">Real estate</Link> / <span className="text-primary-foreground/90">{p.name}</span>
          </nav>
          <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.08] mb-5 max-w-4xl">{p.h1}</h1>
          <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure mb-8">{p.lead}</p>
          <RequirementBar areas={p.barAreas} />
          <p className="font-body text-sm text-primary-foreground/80 mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-accent" /> Registered agents, numbers shown in the footer</span>
            <a href={`tel:${PHONE_TEL}`} className="hover:text-accent">Call {PHONE_DISPLAY}</a>
            <span>Meetings by appointment</span>
          </p>
        </div>
      </section>

      <ShortAnswer updated={formatDate(PAGE_DATES[path])}>{p.short}</ShortAnswer>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-10 max-w-3xl">Rent, lease, buy or sell in {p.name}</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {p.needs.map((n, i) => {
              const Icon = NEED_ICONS[i % NEED_ICONS.length];
              return (
                <div key={n.title} className="flex gap-4">
                  <Icon className="h-8 w-8 text-green shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-primary mb-2">{n.title}</h3>
                    <p className="font-body text-foreground-muted leading-relaxed">{n.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">Areas covered in {p.name}</h2>
          <p className="font-body text-foreground-muted measure mb-10">Tap an area to send a message about it. Descriptions are general and do not state prices or returns.</p>
          <div className="space-y-12">
            {p.groups.map((g) => (
              <div key={g.group}>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-1">{g.group}</h3>
                {g.blurb && <p className="font-body text-foreground-muted measure mb-5">{g.blurb}</p>}
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                  {g.areas.map((a) => (
                    <li key={a.name} className="card-lift rounded-xl border border-border bg-background p-5 flex flex-col">
                      <h4 className="font-heading font-semibold text-lg text-primary mb-1 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-secondary shrink-0" aria-hidden="true" /> {a.name}
                      </h4>
                      <p className="font-body text-sm text-foreground-muted leading-relaxed grow">{a.note}</p>
                      <a
                        href={whatsappLink(`Hello, I am looking for property in ${a.name}, ${p.name}. Please share options.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-secondary hover:text-primary"
                      >
                        <MessageCircle className="h-4 w-4" aria-hidden="true" /> Ask about {a.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">{p.checks.heading}</h2>
          <ul className="space-y-3">
            {p.checks.items.map((c) => (
              <li key={c} className="flex gap-3 font-body text-foreground-muted leading-relaxed">
                <BadgeCheck className="h-5 w-5 text-green shrink-0 mt-0.5" aria-hidden="true" /> {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {p.caution && (
        <section className="pb-16 md:pb-20 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-accent/50 bg-accent/10 p-6 md:p-8">
              <h2 className="font-heading font-bold text-2xl text-primary mb-3 flex items-center gap-2">
                <TriangleAlert className="h-6 w-6 text-accent-foreground" aria-hidden="true" /> {p.caution.heading}
              </h2>
              {p.caution.paras.map((t) => (
                <p key={t} className="font-body text-foreground leading-relaxed mb-3 last:mb-0">{t}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqSection faqs={p.faqs} heading={`Property in ${p.name}: common questions`} />
      <OfficialSources keys={p.sources} />

      <section className="py-12 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl text-primary mb-5">Property in other places covered</h2>
          <ul className="grid sm:grid-cols-3 gap-6">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/real-estate/${o.slug}`} className="font-heading font-semibold text-lg text-primary hover:text-secondary transition-colors">
                  {o.name}: rent, lease, buy and sell
                </Link>
                <p className="font-body text-sm text-foreground-muted mt-1 leading-relaxed">{o.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 hero-re text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Looking for property in {p.name}?</h2>
            <p className="font-body text-primary-foreground/85 measure">Message or call {PHONE_DISPLAY}. Meetings are by appointment.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg"><a href={whatsappLink(`Hello, I am looking for property in ${p.name}. Please contact me.`)} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowRight className="ml-2 h-5 w-5" /></a></Button>
            <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10"><Link href="/contact">Enquiry form</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
