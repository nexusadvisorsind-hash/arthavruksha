import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SipCalculator } from "@/components/sip-calculator";
import {
  ArrowRight,
  BadgeCheck,
  TrendingUp,
  ShieldCheck,
  Droplets,
  PiggyBank,
  Target,
  Calendar,
  Repeat,
  CheckCircle2,
} from "lucide-react";

const fundCategories = [
  {
    icon: TrendingUp,
    title: "Equity SIPs",
    body: "Small, regular monthly investments into equity-oriented mutual fund schemes. Instead of trying to time the market, you invest a fixed amount every month — some months the market is up, some months it's down, and over the years this averages out and builds wealth steadily. Great for long-term goals like retirement or your child's education, typically 7+ years away.",
  },
  {
    icon: PiggyBank,
    title: "ELSS Tax Savers",
    body: "Equity Linked Savings Schemes let you save tax under Section 80C (up to ₹1.5 lakh per year) while your money stays invested in equity markets. The lock-in is just 3 years — the shortest of any 80C option like PPF or fixed deposits — so your money isn't tied up for as long.",
  },
  {
    icon: Droplets,
    title: "Liquid & Overnight Funds",
    body: "If you have surplus cash sitting idle in a savings account, these low-risk debt funds are a better home for it short-term. They're highly liquid (you can usually withdraw within a day) and historically offer better returns than a regular savings account for money you might need soon.",
  },
];

const howItWorks = [
  { icon: Target, title: "Tell us your goal", body: "A house down payment, your child's college fund, retirement — we start by understanding what you're actually saving for and when you'll need the money." },
  { icon: Calendar, title: "We match you to funds", body: "Based on your goal, timeline and comfort with risk, we shortlist funds that fit — never a one-size-fits-all recommendation." },
  { icon: Repeat, title: "You invest, we monitor", body: "Start a SIP or lump-sum investment. We check in periodically to make sure your funds are still on track for your goal." },
];

const faqs = [
  { q: "How much money do I need to start?", a: "Most SIPs can be started with as little as ₹500 per month. There's no need for a large lump sum to get going." },
  { q: "Can I stop or change my SIP anytime?", a: "Yes. SIPs have no lock-in (except ELSS, which has a 3-year lock-in). You can pause, stop, or increase your monthly amount whenever you like." },
  { q: "Do you charge me a fee for this?", a: "No advisory fee is charged to you. We earn a distribution commission from the fund house, which is disclosed transparently — you never pay us directly." },
];

export default function MutualFunds() {
  return (
    <>
      <section className="hero-navy text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 mb-6">
            <BadgeCheck className="h-4 w-4 text-accent" />
            <span className="font-body text-xs md:text-sm font-semibold tracking-wide">
              AMFI-Registered Mutual Fund Distributor
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Start Growing Your Money</h1>
          <p className="font-body text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            We help you choose and start mutual fund investments that actually match your goals —
            no jargon, no pressure, just funds that make sense for your life stage and timeline.
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

      {/* How it works */}
      <section className="pb-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-14 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((h, i) => (
              <div key={h.title} className="relative card-lift bg-surface border border-border rounded-2xl p-7">
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
            Fund Categories We Distribute
          </h2>
          <p className="font-body text-foreground-muted text-center max-w-2xl mx-auto mb-14">
            A quick look at the main types of funds we help clients invest in.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {fundCategories.map((f) => (
              <div key={f.title} className="card-lift bg-surface border border-border rounded-2xl p-7 border-t-4 border-t-green">
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
            Try Our SIP Calculator
          </h2>
          <p className="font-body text-foreground-muted leading-relaxed">
            See how a monthly SIP could grow over time. This is an illustrative projection only —
            not a promise of returns. Actual scheme performance varies and is subject to market risk.
          </p>
        </div>
        <SipCalculator />
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-10 text-center">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-surface border border-border rounded-xl p-6">
                <div className="flex gap-2 items-start mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green shrink-0 mt-0.5" />
                  <h3 className="font-heading font-semibold text-primary">{f.q}</h3>
                </div>
                <p className="font-body text-sm text-foreground-muted leading-relaxed pl-7">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-3 bg-green-soft border border-green/20 rounded-xl p-6">
          <ShieldCheck className="h-6 w-6 text-green shrink-0 mt-0.5" />
          <p className="font-body text-sm text-foreground leading-relaxed">
            <strong className="text-primary">No conflict of interest:</strong> We are licensed
            distributors, not fee-charging investment advisers. We do not provide portfolio
            management or fee-based advisory services under SEBI (IA) Regulations.
          </p>
        </div>
      </section>

      <section className="py-20 hero-navy text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Ready to Start Your First SIP?
          </h2>
          <p className="font-body text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Talk to our team for a free, no-obligation conversation about your goals.
          </p>
          <Button asChild variant="gold" size="lg" className="mt-4">
            <Link href="/contact">Contact Our Team <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
