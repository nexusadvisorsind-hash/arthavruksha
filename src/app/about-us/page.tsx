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

const team = [
  {
    initials: "AV",
    role: "Mutual Funds Desk",
    note: "Our AMFI-registered team helps you start, manage and review your mutual fund investments, from your first SIP to a full portfolio.",
  },
  {
    initials: "RE",
    role: "Real Estate Desk (Maharashtra & Gujarat)",
    note: "Our MahaRERA and GujRERA certified brokers handle residential, commercial, industrial and agricultural property deals across both states.",
  },
  {
    initials: "IN",
    role: "Insurance Desk",
    note: "Our licensed insurance agents compare life, health, motor and business policies across insurers to find you the right cover.",
  },
  {
    initials: "CR",
    role: "Loans & Credit Desk",
    note: "Our loan specialists work with partner banks and NBFCs to get you competitive rates on home loans, business finance, and personal loans.",
  },
];

export default function AboutUs() {
  return (
    <>
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

      {/* Team */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <Users className="h-7 w-7 text-secondary" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Meet Our Desks</h2>
          </div>
          <p className="font-body text-foreground-muted text-center max-w-2xl mx-auto mb-14">
            Each service is run by its own licensed team — so you always know exactly who you&apos;re
            working with, and under what authority they&apos;re advising you.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.role} className="bg-background border border-border rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {t.initials}
                </div>
                <h3 className="font-heading font-semibold text-primary mb-2 text-sm">{t.role}</h3>
                <p className="font-body text-xs text-foreground-muted leading-relaxed">{t.note}</p>
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
