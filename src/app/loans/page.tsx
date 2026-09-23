import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EmiCalculator } from "@/components/emi-calculator";
import { ArrowRight, BadgeCheck, Home, Landmark, Briefcase, GraduationCap, User } from "lucide-react";

const secured = [
  { icon: Home, title: "Home Loans", body: "Financing for purchase or construction of residential property." },
  { icon: Landmark, title: "Loan Against Property (LAP)", body: "Unlock liquidity against an owned property without selling it." },
  { icon: Briefcase, title: "Working Capital", body: "Secured credit lines to fund day-to-day business operations." },
];

const unsecured = [
  { icon: User, title: "Personal Loans", body: "Collateral-free financing for personal needs, on income-based eligibility." },
  { icon: GraduationCap, title: "Education Loans", body: "Funding for higher education, domestic or overseas." },
];

export default function Loans() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 mb-6">
            <BadgeCheck className="h-4 w-4 text-accent" />
            <span className="font-body text-xs md:text-sm font-semibold tracking-wide">
              Direct Selling Partner (DSA)
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Loans &amp; Capital</h1>
          <p className="font-body text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Structuring optimal debt through premier banking institutions for expansion, acquisition
            and personal goals.
          </p>
        </div>
      </section>

      <section className="pb-20 pt-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-heading font-bold text-2xl text-primary mb-6">Secured</h2>
              <div className="space-y-4">
                {secured.map((s) => (
                  <div key={s.title} className="flex gap-4 bg-surface border border-border rounded-xl p-5">
                    <s.icon className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-1">{s.title}</h3>
                      <p className="font-body text-sm text-foreground-muted">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading font-bold text-2xl text-primary mb-6">Unsecured</h2>
              <div className="space-y-4">
                {unsecured.map((s) => (
                  <div key={s.title} className="flex gap-4 bg-surface border border-border rounded-xl p-5">
                    <s.icon className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-1">{s.title}</h3>
                      <p className="font-body text-sm text-foreground-muted">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">EMI Calculator</h2>
          <p className="font-body text-foreground-muted leading-relaxed">
            Illustrative only — actual rates and eligibility are determined by the lending
            bank/NBFC.
          </p>
        </div>
        <EmiCalculator />
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Structure Your Next Credit Line
          </h2>
          <Button asChild variant="gold" size="lg" className="mt-4">
            <Link href="/contact">Connect with Our Leadership Desk <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
