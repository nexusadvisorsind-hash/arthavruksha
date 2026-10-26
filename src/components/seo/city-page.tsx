import Link from "next/link";
import { MapPin, BadgeCheck } from "lucide-react";
import { JsonLd } from "./json-ld";
import { ShortAnswer } from "./short-answer";
import { FaqSection } from "./faq-section";
import { OfficialSources } from "./official-sources";
import { RelatedGuides } from "./related-guides";
import { Button } from "@/components/ui/button";
import { breadcrumbLd, webPageLd, formatDate, PAGE_DATES, SITE_URL } from "@/lib/seo";
import type { City } from "@/lib/cities";

export function CityPage({ city }: { city: City }) {
  const path = `/${city.slug}`;
  const officeLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${SITE_URL}${path}#office`,
    name: `Artha Vriksha Services, ${city.name}`,
    url: `${SITE_URL}${path}`,
    image: `${SITE_URL}/og-image.png`,
    email: "info@arthavriksha.in",
    telephone: city.slug === "pune" ? "+91-9022958266" : "+91-9537533533",
    address: {
      "@type": "PostalAddress",
      streetAddress: city.office.line,
      addressLocality: city.office.locality,
      addressRegion: city.office.region,
      addressCountry: "IN",
    },
    areaServed: city.areas.flatMap((a) => a.list).map((n) => ({ "@type": "Place", name: `${n}, ${city.name}` })),
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
  return (
    <>
      <JsonLd data={officeLd} />
      <JsonLd data={breadcrumbLd([{ name: city.name, path }])} />
      <JsonLd data={webPageLd({ path, name: city.title, description: city.short })} />

      <section className="hero-navy text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
          <p className="inline-flex items-center gap-2 font-body text-sm text-primary-foreground/85 mb-5">
            <MapPin className="h-4 w-4 text-accent" /> Office: {city.office.line}, {city.office.locality}, {city.office.region}
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.08] mb-6 max-w-3xl">{city.h1}</h1>
          <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure">
            Four services from individually registered professionals, each explained in plain language, with registration numbers shown openly.
          </p>
        </div>
      </section>

      <ShortAnswer updated={formatDate(PAGE_DATES[path])}>{city.short}</ShortAnswer>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-8">Who handles what in {city.name}</h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {city.services.map((s) => (
              <div key={s.title} className="border-t border-border pt-5">
                <h3 className="font-heading font-semibold text-xl text-primary mb-1">
                  <Link href={s.href} className="hover:text-secondary transition-colors">{s.title}</Link>
                </h3>
                <p className="font-body text-sm text-secondary mb-2 flex items-start gap-1.5"><BadgeCheck className="h-4 w-4 mt-0.5 shrink-0" /> {s.who}</p>
                <p className="font-body text-sm text-foreground-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">Areas in and around {city.name}</h2>
            <p className="font-body text-foreground-muted measure">Enquiries are taken for clients and properties in these areas, among others.</p>
          </div>
          <div className="space-y-6">
            {city.areas.map((a) => (
              <div key={a.group}>
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">{a.group}</h3>
                <p className="font-body text-foreground-muted leading-relaxed">{a.list.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">{city.local.heading}</h2>
          {city.local.paras.map((p, i) => (
            <p key={i} className="font-body text-foreground-muted leading-relaxed mb-4">{p}</p>
          ))}
          <p className="font-body text-xs text-foreground-muted mt-6">
            Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Insurance is the subject matter of solicitation.
          </p>
        </div>
      </section>

      <FaqSection faqs={city.faqs} />
      <OfficialSources keys={city.sources} />
      <RelatedGuides items={city.related} />

      <section className="py-16 md:py-20 hero-navy text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Start with a conversation</h2>
            <p className="font-body text-primary-foreground/85 measure">Tell the {city.name} office what you need, and the right person will reply.</p>
          </div>
          <div><Button asChild variant="gold" size="lg"><Link href="/contact">Contact</Link></Button></div>
        </div>
      </section>
    </>
  );
}
