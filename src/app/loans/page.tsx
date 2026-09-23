import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EmiCalculator } from "@/components/emi-calculator";
import {
  ArrowRight,
  BadgeCheck,
  Home,
  Landmark,
  Briefcase,
  GraduationCap,
  User,
  ClipboardList,
  Search as SearchIcon,
  ThumbsUp,
  ShieldCheck,
} from "lucide-react";

const secured = [
  { icon: Home, title: "Home Loans", body: "Financing to buy or build a residential property, with tenures up to 30 years and competitive interest rates from our partner banks." },
  { icon: Landmark, title: "Loan Against Property (LAP)", body: "Already own a property? Unlock cash against it without selling — useful for business expansion, a child's education, or any large expense." },
  { icon: Briefcase, title: "Working Capital", body: "Secured credit lines that help businesses manage day-to-day expenses like inventory, payroll and supplier payments without cash-flow stress." },
];

const unsecured = [
  { icon: User, title: "Personal Loans", body: "No collateral needed — approved based on your income and credit profile. Useful for medical emergencies, weddings, or any personal need." },
  { icon: GraduationCap, title: "Education Loans", body: "Funding for higher education in India or abroad, including tuition, living expenses and other approved costs." },
];

const howItWorks = [
  { icon: ClipboardList, title: "Tell us what you need", body: "Loan amount, purpose, and timeline — we figure out which loan type actually fits your situation." },
  { icon: SearchIcon, title: "We compare lenders for you", body: "Instead of applying at one bank and hoping, we check rates and eligibility across our partner banks and NBFCs to find you the best deal." },
  { icon: ThumbsUp, title: "We help with the paperwork", body: "Loan applications get rejected or delayed over small documentation errors. We help you get it right the first time." },
];

export default function Loans() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary to-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 mb-6">
            <BadgeCheck className="h-4 w-4 text-accent" />
            <span className="font-body text-xs md:text-sm font-semibold tracking-wide">
              Direct Selling Partner (DSA)
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Get the Right Loan, Faster</h1>
          <p className="font-body text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            We work with a panel of banks and NBFCs to find you competitive interest rates for
            home loans, business capital, personal needs and more — and help you avoid the
            paperwork mistakes that slow approvals down.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="pb-20 pt-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-14 text-center">
            How We Help You Borrow Smart
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
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-heading font-bold text-2xl text-primary mb-2">Secured Loans</h2>
              <p className="font-body text-sm text-foreground-muted mb-6">Backed by collateral — usually lower interest rates and higher loan amounts.</p>
              <div className="space-y-4">
                {secured.map((s) => (
                  <div key={s.title} className="flex gap-4 bg-surface border border-border rounded-xl p-5 border-l-4 border-l-secondary">
                    <s.icon className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-1">{s.title}</h3>
                      <p className="font-body text-sm text-foreground-muted leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading font-bold text-2xl text-primary mb-2">Unsecured Loans</h2>
              <p className="font-body text-sm text-foreground-muted mb-6">No collateral needed — approval based on income and credit history.</p>
              <div className="space-y-4">
                {unsecured.map((s) => (
                  <div key={s.title} className="flex gap-4 bg-surface border border-border rounded-xl p-5 border-l-4 border-l-green">
                    <s.icon className="h-6 w-6 text-green shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-1">{s.title}</h3>
                      <p className="font-body text-sm text-foreground-muted leading-relaxed">{s.body}</p>
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
            Get a quick sense of your monthly payment. This is illustrative only — actual rates
            and eligibility are determined by the lending bank or NBFC.
          </p>
        </div>
        <EmiCalculator />
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-3 bg-green-soft border border-green/20 rounded-xl p-6">
          <ShieldCheck className="h-6 w-6 text-green shrink-0 mt-0.5" />
          <p className="font-body text-sm text-foreground leading-relaxed">
            <strong className="text-primary">No hidden charges:</strong> We disclose our
            partnership commission upfront. You never pay us a fee directly — our earnings come
            from the lending bank or NBFC once your loan is disbursed.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-primary to-secondary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Ready to Apply?
          </h2>
          <p className="font-body text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Tell us what you need financed and we&apos;ll match you with the right lender.
          </p>
          <Button asChild variant="gold" size="lg" className="mt-4">
            <Link href="/contact">Contact Our Team <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
