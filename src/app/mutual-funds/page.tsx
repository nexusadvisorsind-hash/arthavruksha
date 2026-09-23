import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SipCalculator } from "@/components/sip-calculator";
import { ArrowRight, BadgeCheck, TrendingUp, ShieldCheck, Droplets, PiggyBank } from "lucide-react";

const fundCategories = [
  {
    icon: TrendingUp,
    title: "Equity SIPs",
    body: "Systematic Investment Plans into equity-oriented schemes, built for long-term wealth accumulation through disciplined, periodic deployment rather than market timing.",
  },
  {
    icon: PiggyBank,
    title: "ELSS Tax Savers",
    body: "Equity Linked Savings Schemes offering tax deduction under Section 80C, with a mandatory 3-year lock-in — the shortest among 80C options.",
  },
  {
    icon: Droplets,
    title: "Liquid & Overnight Funds",
    body: "Low-volatility debt schemes for short-term parking of surplus capital, offering better liquidity characteristics than idle savings balances.",
  },
];

export default function MutualFunds() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 mb-6">
            <BadgeCheck className="h-4 w-4 text-accent" />
            <span className="font-body text-xs md:text-sm font-semibold tracking-wide">
              AMFI-Registered Mutual Fund Distributor
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Mutual Funds</h1>
          <p className="font-body text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Systematic deployment into regulated mutual fund schemes, mapped to your long-term
            objectives — distributed, not advised.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-surface border border-border rounded-xl p-4">
          <p className="font-body text-xs text-foreground-muted text-center">
            Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-14 text-center">
            Fund Categories We Distribute
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {fundCategories.map((f) => (
              <div key={f.title} className="bg-surface border border-border rounded-2xl p-7">
                <f.icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">{f.title}</h3>
                <p className="font-body text-sm text-foreground-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            SIP Wealth Growth Sandbox
          </h2>
          <p className="font-body text-foreground-muted leading-relaxed">
            An illustrative projection only — not a promise of returns. Actual scheme performance
            varies and is subject to market risk.
          </p>
        </div>
        <SipCalculator />
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-3 bg-secondary/5 border border-secondary/20 rounded-xl p-6">
          <ShieldCheck className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
          <p className="font-body text-sm text-foreground leading-relaxed">
            <strong className="text-primary">No Conflict of Roles:</strong> We are licensed
            distributors, not fee-charging investment advisers. We do not provide portfolio
            management or fee-based advisory services under SEBI (IA) Regulations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Start a Disciplined Capital Plan
          </h2>
          <Button asChild variant="gold" size="lg" className="mt-4">
            <Link href="/contact">Connect with Our Leadership Desk <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
