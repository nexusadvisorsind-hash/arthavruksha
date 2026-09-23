import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, HeartPulse, Car, Building2, ShieldPlus, Umbrella } from "lucide-react";

const products = [
  { icon: Umbrella, title: "Term Life", body: "Pure protection cover for income replacement, at the lowest cost per rupee of sum assured." },
  { icon: ShieldPlus, title: "Whole Life", body: "Lifelong coverage combining protection with a savings/investment component." },
  { icon: HeartPulse, title: "Health Insurance", body: "Individual and family floater plans covering hospitalization and critical illness." },
  { icon: Car, title: "Motor Insurance", body: "Comprehensive and third-party cover for private and commercial vehicles." },
  { icon: Building2, title: "Commercial Risk", body: "Property, liability and business-interruption cover for enterprise clients." },
];

export default function Insurance() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 mb-6">
            <BadgeCheck className="h-4 w-4 text-accent" />
            <span className="font-body text-xs md:text-sm font-semibold tracking-wide">
              Authorized Corporate Agent / POSP
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Insurance Solutions</h1>
          <p className="font-body text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Underwriting life and general perils to insulate your family and enterprise balance sheet.
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

      <section className="pb-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-14 text-center">
            Products We Facilitate
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.title} className="bg-surface border border-border rounded-2xl p-7">
                <p.icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">{p.title}</h3>
                <p className="font-body text-sm text-foreground-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Get a Coverage Recommendation
          </h2>
          <Button asChild variant="gold" size="lg" className="mt-4">
            <Link href="/contact">Connect with Our Leadership Desk <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
