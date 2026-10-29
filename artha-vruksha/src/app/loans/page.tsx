import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { ShortAnswer } from "@/components/seo/short-answer";
import { FaqSection } from "@/components/seo/faq-section";
import { OfficialSources } from "@/components/seo/official-sources";
import { RelatedGuides } from "@/components/seo/related-guides";
import { breadcrumbLd, webPageLd, formatDate, PAGE_DATES } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EmiCalculator } from "@/components/emi-calculator";
import { LoanEligibilityCalculator } from "@/components/loan-eligibility-calculator";
import { Reveal } from "@/components/reveal";
import { InPageNav } from "@/components/in-page-nav";
import { ScrollTimeline } from "@/components/scroll-timeline";
import { getPostBySlug } from "@/lib/blog-posts";
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

export const metadata = pageMeta({
  title: 'Home Loan & LAP Consultant, Pune & Ahmedabad | Assetzpro',
  description: 'Empanelled loan DSA comparing home loan, loan against property and business loan offers across banks and NBFCs. Free EMI and eligibility calculators.',
  path: '/loans',
});

const secured = [
  { icon: Home, title: "Home Loans", body: "Financing to buy or build a residential property, with tenures up to 30 years and interest rates from partner banks." },
  { icon: Landmark, title: "Loan Against Property (LAP)", body: "Already own a property? Unlock cash against it without selling — useful for business expansion, a child's education, or any large expense." },
  { icon: Briefcase, title: "Working Capital", body: "Secured credit lines that help businesses manage day-to-day expenses like inventory, payroll and supplier payments without cash-flow stress." },
];

const unsecured = [
  { icon: User, title: "Personal Loans", body: "No collateral needed — approved based on your income and credit profile. Useful for medical emergencies, weddings, or any personal need." },
  { icon: GraduationCap, title: "Education Loans", body: "Funding for higher education in India or abroad, including tuition, living expenses and other approved costs." },
];

const howItWorks = [
  { icon: ClipboardList, title: "Share what you need", body: "Loan amount, purpose, and timeline — the loan type that fits your situation is worked out from there." },
  { icon: SearchIcon, title: "Lenders are compared for you", body: "Instead of applying at one bank and hoping, Pavan Vatyani checks rates and eligibility across partner banks and NBFCs so the options are clear before you apply." },
  { icon: ThumbsUp, title: "Paperwork is checked", body: "Loan applications get rejected or delayed over small documentation errors. Pavan Vatyani checks each document so it is right the first time." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Loan DSA Services",
  name: "Home, Business & Personal Loan DSA Services",
  description:
    "Direct Selling Partner comparing home loans, loan against property, business working capital, personal and education loans across partner banks & NBFCs.",
  provider: { "@type": "FinancialService", name: "Assetzpro Services" },
  areaServed: [
    { "@type": "State", name: "Maharashtra" },
    { "@type": "State", name: "Gujarat" },
  ],
};

const navItems = [
  { id: "emi-calculator", label: "EMI calculator" },
  { id: "eligibility", label: "Eligibility" },
  { id: "loan-types", label: "Loan types" },
  { id: "how-it-works", label: "How it works" },
];

const faqs = [
  {
    "q": "What documents are needed for a home loan?",
    "a": "Usually identity and address proof, PAN, income proof such as salary slips and Form 16 or income tax returns for the self-employed, recent bank statements, and the property papers. Lenders differ, so the exact list is confirmed with the lender."
  },
  {
    "q": "How does a CIBIL score affect a loan?",
    "a": "Lenders look at a credit report to see repayment history. A stronger history generally helps approval and terms. A free full credit report is available once a year from each credit bureau."
  },
  {
    "q": "What is the difference between a loan against property and a personal loan?",
    "a": "A loan against property is secured by a property you own, so the property is at risk if repayments stop. A personal loan is unsecured. Rates, amounts and tenures differ by lender, so both are compared before choosing."
  },
  {
    "q": "Is a fee charged for loan guidance?",
    "a": "No fee is charged to the applicant for comparing options. A lender may pay a DSA a commission when a loan is disbursed, and the loan terms come from the lender. Any processing fee is the lender's and is shown in its sanction letter."
  },
  {
    "q": "How is an EMI worked out?",
    "a": "The EMI depends on the loan amount, the interest rate and the tenure. The EMI calculator on this page shows how changing any one of them changes the monthly amount."
  }
];

const related = [
  {
    "href": "/blog/home-loan-documents-checklist",
    "title": "Home loan documents checklist",
    "note": "What lenders usually ask for."
  },
  {
    "href": "/blog/loan-against-property-vs-personal-loan",
    "title": "Loan against property vs personal loan",
    "note": "Secured and unsecured loans compared."
  },
  {
    "href": "/blog/improve-loan-approval-chances",
    "title": "Improve your loan approval chances",
    "note": "Habits that help before you apply."
  }
];

export default function Loans() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <JsonLd data={breadcrumbLd([{ name: "Home Loan & LAP Consultant, Pune & Ahmedabad", path: "/loans" }])} />
      <JsonLd data={webPageLd({ path: "/loans", name: "Home Loan & LAP Consultant, Pune & Ahmedabad", description: "Pavan Vatyani is an individually empanelled bank loan DSA who compares home loan, loan against property, business and personal loan offers from partner banks and NBFCs. The EMI and eligibility calculators on this page give an estimate; the lender decides the final amount and rate." })} />

      <section className="hero-loan text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 font-body text-sm text-primary-foreground/85 mb-5">
              <BadgeCheck className="h-4 w-4 text-accent" /> Individually empanelled bank loan DSA
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.08] mb-6 max-w-3xl">Home loan and loan against property consultant in Pune and Ahmedabad</h1>
            <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 mb-5 max-w-3xl">Get the right loan, faster</p>
            <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure">
              Pavan Vatyani works with a panel of banks and NBFCs to compare rates for home loans, loan against property, business capital and more, and helps avoid the paperwork mistakes that slow approvals.
            </p>
          </Reveal>
        </div>
      </section>

      <ShortAnswer updated={formatDate(PAGE_DATES["/loans"])}>Pavan Vatyani is an individually empanelled bank loan DSA who compares home loan, loan against property, business and personal loan offers from partner banks and NBFCs. The EMI and eligibility calculators on this page give an estimate; the lender decides the final amount and rate.</ShortAnswer>

      <InPageNav items={navItems} />

      <section id="emi-calculator" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">What will your EMI be?</h2>
          <p className="font-body text-foreground-muted measure">Illustrative only. Actual rates and eligibility are decided by the lending bank or NBFC.</p>
        </div>
        <EmiCalculator />
      </section>

      <section id="eligibility" className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">How much could you borrow?</h2>
          <p className="font-body text-foreground-muted measure">Enter your income and existing EMIs for a quick estimate of loan eligibility.</p>
        </div>
        <LoanEligibilityCalculator />
      </section>

      <section id="loan-types" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-2">Secured loans</h2>
            <p className="font-body text-sm text-foreground-muted mb-6">Backed by collateral, usually with lower rates and higher amounts.</p>
            <div className="space-y-6">
              {secured.map((s) => (
                <div key={s.title} className="flex gap-4 border-l-4 border-secondary pl-4">
                  <s.icon className="h-6 w-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary mb-1">{s.title}</h3>
                    <p className="font-body text-sm text-foreground-muted leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-2">Unsecured loans</h2>
            <p className="font-body text-sm text-foreground-muted mb-6">No collateral. Approval depends on income and credit history.</p>
            <div className="space-y-6">
              {unsecured.map((s) => (
                <div key={s.title} className="flex gap-4 border-l-4 border-green pl-4">
                  <s.icon className="h-6 w-6 text-green shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary mb-1">{s.title}</h3>
                    <p className="font-body text-sm text-foreground-muted leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">How to borrow smart</h2>
            <p className="font-body text-foreground-muted measure mb-6">You never pay Pavan Vatyani directly. The commission is disclosed upfront, and it is paid by the lender once your loan is disbursed. Loan approval and interest rates are decided by the lender.</p>
            <p className="font-body text-sm text-foreground-muted flex gap-2 measure"><ShieldCheck className="h-5 w-5 text-green shrink-0" /> No hidden charges.</p>
          </div>
          <ScrollTimeline items={howItWorks.map(({ title, body }) => ({ title, body }))} accent="#1E5FD9" />
        </div>
      </section>

      {getPostBySlug("improve-loan-approval-chances") && (
        <section className="py-10 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-body text-sm text-foreground-muted mb-1">Related reading</p>
            <Link href="/blog/improve-loan-approval-chances" className="font-heading font-semibold text-xl text-primary hover:text-secondary transition-colors">
              {getPostBySlug("improve-loan-approval-chances")!.title} →
            </Link>
          </div>
        </section>
      )}

      <FaqSection faqs={faqs} />

      <OfficialSources keys={["rbi", "cibil"]} />

      <RelatedGuides items={related} />

      <section className="py-16 md:py-20 hero-loan text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Ready to apply?</h2>
            <p className="font-body text-primary-foreground/85 measure">Share what you need financed, and Pavan Vatyani will match suitable lenders to it.</p>
          </div>
          <div><Button asChild variant="gold" size="lg"><Link href="/contact">Contact Pavan <ArrowRight className="ml-2 h-5 w-5" /></Link></Button></div>
        </div>
      </section>
    </>
  );
}
