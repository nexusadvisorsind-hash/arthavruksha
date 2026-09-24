import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  TreePine,
  Target,
  Compass,
  Users,
  ArrowRight,
  BadgeCheck,
  ShieldCheck,
  Scale,
  Heart,
  Handshake,
  Landmark,
} from "lucide-react";

const goals = [
  {
    icon: Target,
    title: "One Team for All Your Finances",
    body: "Instead of visiting four different people for your investments, property, insurance and loans, we bring all of it under one accountable, transparent relationship — so your advice actually fits together.",
  },
  {
    icon: ShieldCheck,
    title: "Always By the Book",
    body: "We operate strictly within SEBI, AMFI, RERA and IRDAI rules. We never use misleading titles or give advice we're not licensed to give — that line matters to us.",
  },
  {
    icon: Scale,
    title: "Nothing Hidden from You",
    body: "Every commission we earn, every disclosure, every risk — stated plainly, so you can decide with full information, not sales pressure.",
  },
];

const values = [
  {
    icon: Heart,
    title: "We treat your money like it's ours",
    body: "We only recommend what we'd be comfortable recommending to our own family.",
  },
  {
    icon: Handshake,
    title: "We're honest, even when it costs us",
    body: "If a product isn't right for you, we'll say so — even if it means a smaller commission for us.",
  },
];

export const metadata = {
  title: "About Us — Anup Vatyani & Pavan Vatyani, Founders",
  description:
    "Meet the founders of Artha Vruksha Services: Anup Vatyani, AMFI-registered Mutual Fund Distributor (ARN 106715) with 24+ years in banking, and Pavan Vatyani, MahaRERA-registered real estate professional (A52100037796) with 22+ years in real estate and digital transformation.",
  keywords: [
    "Anup Vatyani mutual fund distributor",
    "Pavan Vatyani real estate",
    "AMFI ARN 106715",
    "MahaRERA A52100037796",
    "financial services founders Pune Ahmedabad",
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Anup Vatyani",
      jobTitle: "Founder — Mutual Funds & Regulatory Affairs, Artha Vruksha Services",
      description:
        "AMFI-registered Mutual Fund Distributor (ARN 106715) with 24+ years in banking and financial services.",
      knowsAbout: ["Mutual Funds", "GIFT City IFSC", "Regulatory Compliance", "Investor Education"],
    },
    {
      "@type": "Person",
      name: "Pavan Vatyani",
      jobTitle: "Founder — Real Estate & Digital Strategy, Artha Vruksha Services",
      description:
        "MahaRERA-registered real estate professional (A52100037796) with 22+ years in real estate, finance and digital transformation.",
      knowsAbout: ["Real Estate", "RERA Compliance", "Digital Transformation"],
    },
  ],
};

const founders = [
  {
    initials: "AV",
    name: "Anup Vatyani",
    role: "Founder — Mutual Funds & Regulatory Affairs",
    bio: "Anup Vatyani has over 24 years of experience in the banking and financial services industry. An ex-banker with a decade of experience as a Mutual Fund Distributor, he brings deep domain expertise in financial products, regulatory frameworks, and investor education.",
    credentials: [
      "24+ years in banking & financial services",
      "Ex-banker",
      "AMFI-Registered Mutual Fund Distributor — ARN 106715",
      "A decade of dedicated Mutual Fund Distribution (MFD) experience",
      "Focus area: GIFT City / IFSC fund structures, regulatory frameworks, investor education",
      "Gujarat RERA Registered — AG/AHMEDABAD/AHMEDABAD CITY/A403336/200529",
    ],
  },
  {
    initials: "PV",
    name: "Pavan Vatyani",
    role: "Founder — Real Estate & Digital Strategy",
    bio: "Pavan Vatyani brings 22+ years of experience across Real Estate, Finance and Digital Transformation, having worked in leadership roles with organisations including 99acres, AllCheckDeals, Bajaj Finance and DigitalMutation.",
    credentials: [
      "22+ years in Real Estate, Finance & Digital Transformation",
      "Leadership roles at 99acres, AllCheckDeals, Bajaj Finance & DigitalMutation",
      "MahaRERA Registered Real Estate Agent — A52100037796",
      "Focus area: property transaction structuring, digital-first client experience",
    ],
  },
];

const otherDesks = [
  {
    icon: ShieldCheck,
    role: "Insurance Desk",
    note: "Our licensed insurance agents compare life, health, motor and business policies across insurers to find you the right cover.",
  },
  {
    icon: Landmark,
    role: "Loans & Credit Desk",
    note: "Our loan specialists work with partner banks and NBFCs to get you competitive rates on home loans, business finance, and personal loans.",
  },
];

export default function AboutUs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* Hero */}
      <section className="hero-navy text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20 text-center">
          <TreePine className="h-10 w-10 text-accent mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">About Artha Vruksha</h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Our name comes from two words — Artha (money, purpose) and Vruksha (tree). Like a
            banyan tree, we believe good financial guidance should have deep roots and grow
            steadily over many years, not chase quick wins.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Compass className="h-7 w-7 text-secondary" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Our Vision</h2>
          </div>
          <p className="font-body text-lg text-foreground-muted leading-relaxed text-center max-w-3xl mx-auto mb-6">
            To become the most trusted financial services partner for families and small
            businesses in Maharashtra and Gujarat — one place where you can build your
            investments, secure your property, protect against risk, and access credit, all
            handled by people who are properly licensed and genuinely accountable to you.
          </p>
          <p className="font-body text-base text-foreground-muted leading-relaxed text-center max-w-3xl mx-auto">
            We started Artha Vruksha because we saw too many people getting fragmented, sometimes
            conflicting advice from different agents who had no visibility into their full
            financial picture. We wanted to build something better — a single team you can call
            for any of these needs, that actually talks to each other.
          </p>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4 text-center">
            Our Guiding Goals
          </h2>
          <p className="font-body text-foreground-muted text-center max-w-2xl mx-auto mb-14">
            Three commitments that shape every conversation we have with a client.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {goals.map((g) => (
              <div key={g.title} className="card-lift bg-background border border-border rounded-2xl p-7 border-t-4 border-t-green">
                <g.icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">{g.title}</h3>
                <p className="font-body text-sm text-foreground-muted leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6 text-center">
            The Tree of Wealth
          </h2>
          <p className="font-body text-lg text-foreground-muted leading-relaxed text-center max-w-3xl mx-auto mb-12">
            A tree draws strength from many roots to grow one strong trunk. We apply the same
            idea to your finances — bridging physical assets like property with liquid assets
            like mutual funds, insurance and credit, so your wealth grows from a stable,
            diversified base rather than depending on just one thing going right.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="bg-surface border border-border rounded-2xl p-6 text-center">
                <v.icon className="h-7 w-7 text-accent mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-primary mb-2">{v.title}</h3>
                <p className="font-body text-sm text-foreground-muted leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <Users className="h-7 w-7 text-secondary" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Meet the Founders</h2>
          </div>
          <p className="font-body text-foreground-muted text-center max-w-2xl mx-auto mb-14">
            Artha Vruksha Services is led directly by its founders — so every client works with
            people who are personally licensed and personally accountable.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {founders.map((f) => (
              <div key={f.name} className="card-lift bg-background border border-border rounded-2xl p-7 md:p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg flex items-center justify-center shrink-0">
                    {f.initials}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-primary">{f.name}</h3>
                    <p className="font-body text-sm font-semibold text-secondary">{f.role}</p>
                  </div>
                </div>
                <p className="font-body text-sm text-foreground-muted leading-relaxed mb-5">{f.bio}</p>
                <ul className="space-y-2">
                  {f.credentials.map((c) => (
                    <li key={c} className="flex gap-2 items-start">
                      <BadgeCheck className="h-4 w-4 text-green shrink-0 mt-0.5" />
                      <span className="font-body text-xs text-foreground-muted leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {otherDesks.map((d) => (
              <div key={d.role} className="bg-background border border-border rounded-2xl p-6 flex gap-4 items-start">
                <d.icon className="h-7 w-7 text-secondary shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-primary mb-1 text-sm">{d.role}</h3>
                  <p className="font-body text-xs text-foreground-muted leading-relaxed">{d.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "AMFI-Registered Mutual Fund Distributor",
              "MahaRERA Certified Intermediary",
              "GujRERA Certified Intermediary",
              "Authorized Corporate Agent / POSP",
              "DPDP Act 2023 Compliant",
            ].map((b) => (
              <div key={b} className="inline-flex items-center gap-2 rounded-full border border-green/30 bg-green-soft px-4 py-2">
                <BadgeCheck className="h-4 w-4 text-green" />
                <span className="font-body text-xs font-semibold text-primary">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-navy text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Want to know more before you get in touch?
          </h2>
          <p className="font-body text-lg text-primary-foreground/90 mb-8">
            We&apos;re happy to walk you through our credentials, track record, and how we work —
            no pressure, no obligation.
          </p>
          <Button asChild variant="gold" size="lg">
            <Link href="/contact">Contact Our Team <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
