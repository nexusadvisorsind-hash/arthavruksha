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
} from "lucide-react";

const goals = [
  {
    icon: Target,
    title: "Unify Fragmented Capital",
    body: "Bring market investments, physical assets, risk protection and credit under one accountable, transparent relationship — instead of four disconnected intermediaries.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Without Compromise",
    body: "Operate strictly within SEBI, AMFI, RERA and IRDAI frameworks, with zero tolerance for misleading designations or unlicensed advisory.",
  },
  {
    icon: Scale,
    title: "Radical Transparency",
    body: "Every commission, disclosure and risk metric stated plainly, so clients decide with full information — not persuasion.",
  },
];

const team = [
  {
    initials: "AV",
    role: "Leadership Desk — Mutual Funds",
    note: "AMFI-Registered Mutual Fund Distributor, overseeing systematic capital deployment across the platform's fund distribution vertical.",
  },
  {
    initials: "RE",
    role: "Real Estate Desk — Maharashtra & Gujarat",
    note: "MahaRERA & GujRERA certified brokerage, covering residential, commercial, industrial and agricultural transactions.",
  },
  {
    initials: "IN",
    role: "Insurance & Risk Desk",
    note: "Authorized Corporate Agent/POSP for life and general insurance solicitation.",
  },
  {
    initials: "CR",
    role: "Credit & Liquidity Desk",
    note: "Direct Selling Partner coordination for secured and unsecured lending across partner banks and NBFCs.",
  },
];

export default function AboutUs() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20 text-center">
          <TreePine className="h-10 w-10 text-accent mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">About Artha Vruksha</h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Artha (purposeful capital) and Vruksha (the enduring banyan tree) — a name chosen
            deliberately. Individual financial products are transient; institutional stewardship is
            generational.
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
          <p className="font-body text-lg text-foreground-muted leading-relaxed text-center max-w-3xl mx-auto">
            To be Western India&apos;s most trusted multi-disciplinary capital and asset stewardship
            enterprise — one where a family or business can build market capital, secure physical
            assets, protect against risk, and access credit, all under a single, deeply rooted,
            regulator-accountable roof.
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
            Three commitments shape every decision this enterprise makes.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {goals.map((g) => (
              <div key={g.title} className="bg-background border border-border rounded-2xl p-7">
                <g.icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">{g.title}</h3>
                <p className="font-body text-sm text-foreground-muted leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tree of Wealth ideology */}
      <section className="py-20 bg-background border-y border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
            The Tree of Wealth
          </h2>
          <p className="font-body text-lg text-foreground-muted leading-relaxed">
            A tree draws from many roots to grow one trunk. We apply the same idea to personal and
            enterprise finance — bridging physical assets like property with liquid assets like
            mutual funds, insurance and credit, so wealth grows from a stable, diversified base
            rather than a single, exposed source.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <Users className="h-7 w-7 text-secondary" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Our Desks</h2>
          </div>
          <p className="font-body text-foreground-muted text-center max-w-2xl mx-auto mb-14">
            Each vertical is led under its own regulatory credential — so you always know who you&apos;re
            dealing with, and under what authority.
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
              <div key={b} className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-4 py-2">
                <BadgeCheck className="h-4 w-4 text-secondary" />
                <span className="font-body text-xs font-semibold text-primary">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Want to know more before you engage?
          </h2>
          <p className="font-body text-lg text-primary-foreground/85 mb-8">
            Our leadership desk is happy to walk you through our governance, credentials and track record.
          </p>
          <Button asChild variant="gold" size="lg">
            <Link href="/contact">Connect with Our Leadership Desk <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
