import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  HeartPulse,
  Car,
  Building2,
  ShieldPlus,
  Umbrella,
  MessageSquare,
  Scale as ScaleIcon,
  FileSignature,
} from "lucide-react";

const products = [
  {
    icon: Umbrella,
    title: "Term Life Insurance",
    body: "The simplest, most affordable way to protect your family's income if something happens to you. A large cover amount for a small premium — no savings component, just pure protection so your family isn't left in a financial crisis.",
  },
  {
    icon: ShieldPlus,
    title: "Whole Life Insurance",
    body: "Lifelong coverage that combines protection with a savings or investment element, so the policy also builds some value over time in addition to the death benefit.",
  },
  {
    icon: HeartPulse,
    title: "Health Insurance",
    body: "Individual and family floater plans that cover hospital bills, surgeries, and critical illness treatment. With medical costs rising every year, this is often the single most important policy a family can have.",
  },
  {
    icon: Car,
    title: "Motor Insurance",
    body: "Comprehensive and third-party cover for your car or two-wheeler — both personal and commercial vehicles. We help you compare add-ons like zero-depreciation cover so you're not underinsured after an accident.",
  },
  {
    icon: Building2,
    title: "Commercial Risk Cover",
    body: "Property, liability, and business-interruption insurance for business owners — protecting your shop, office, or warehouse against fire, theft, and the income loss that follows.",
  },
];

const howItWorks = [
  { icon: MessageSquare, title: "We understand your risks", body: "Every family and business has a different risk profile. We ask the right questions to figure out what actually needs protecting." },
  { icon: ScaleIcon, title: "We compare policies for you", body: "Instead of pushing one insurer, we compare coverage, exclusions, and premiums across multiple companies so you get the best fit." },
  { icon: FileSignature, title: "We explain the fine print", body: "Exclusions, waiting periods, claim process — we walk you through it in plain language before you sign anything." },
];

export default function Insurance() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary to-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 mb-6">
            <BadgeCheck className="h-4 w-4 text-accent" />
            <span className="font-body text-xs md:text-sm font-semibold tracking-wide">
              Authorized Corporate Agent / POSP
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Protect What Matters Most</h1>
          <p className="font-body text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Life, health, motor and business insurance — compared across insurers and explained in
            plain language, so you know exactly what you&apos;re covered for.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-surface border border-border rounded-xl p-4">
          <p className="font-body text-xs text-foreground-muted text-center">
            Insurance is the subject matter of solicitation.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="pb-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-14 text-center">
            How We Help You Choose
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((h, i) => (
              <div key={h.title} className="relative bg-surface border border-border rounded-2xl p-7">
                <span className="absolute -top-4 -left-2 w-9 h-9 rounded-full bg-green text-green-foreground font-heading font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <h.icon className="h-8 w-8 text-secondary mb-4 mt-2" />
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">{h.title}</h3>
                <p className="font-body text-sm text-foreground-muted leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4 text-center">
            Products We Facilitate
          </h2>
          <p className="font-body text-foreground-muted text-center max-w-2xl mx-auto mb-14">
            A look at the types of cover we help clients get, and why each one matters.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.title} className="bg-surface border border-border rounded-2xl p-7 border-t-4 border-t-accent">
                <p.icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">{p.title}</h3>
                <p className="font-body text-sm text-foreground-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-3 bg-green-soft border border-green/20 rounded-xl p-6">
          <ShieldPlus className="h-6 w-6 text-green shrink-0 mt-0.5" />
          <p className="font-body text-sm text-foreground leading-relaxed">
            <strong className="text-primary">Why compare with us?</strong> As a Corporate
            Agent/POSP, we work with multiple insurers rather than being tied to just one. That
            means we recommend the policy that fits you best — not whichever company pays us the
            most.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-primary to-secondary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Get a Coverage Recommendation
          </h2>
          <p className="font-body text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Tell us about your family or business and we&apos;ll suggest the right cover — no pressure, no obligation.
          </p>
          <Button asChild variant="gold" size="lg" className="mt-4">
            <Link href="/contact">Contact Our Team <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
