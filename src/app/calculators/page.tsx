import Link from "next/link";
import { pageMeta, SITE_URL, formatDate, PAGE_DATES } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { ShortAnswer } from "@/components/seo/short-answer";
import { FaqSection } from "@/components/seo/faq-section";
import { RelatedGuides } from "@/components/seo/related-guides";
import { breadcrumbLd, webPageLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Free SIP, EMI, Loan & Insurance Calculators | Artha Vriksha",
  description: "Six free calculators: SIP, goal SIP, EMI, loan eligibility, home loan eligibility and term insurance cover. Estimates only, no sign-up needed.",
  path: "/calculators",
});

const tools = [
  { href: "/mutual-funds#sip-calculator", name: "SIP calculator", note: "See how a monthly SIP could grow over a chosen period at an assumed rate. An assumption, not a projection." },
  { href: "/mutual-funds#goal-calculator", name: "SIP goal calculator", note: "Work backwards from a target amount and date to the monthly SIP it would need at an assumed rate." },
  { href: "/loans#emi-calculator", name: "EMI calculator", note: "Monthly instalment for a given loan amount, interest rate and tenure." },
  { href: "/loans#eligibility", name: "Loan eligibility calculator", note: "A rough idea of the loan a given income and existing obligations could support." },
  { href: "/real-estate#home-loan-check", name: "Home loan eligibility calculator", note: "Estimate the home loan you could qualify for before shortlisting property." },
  { href: "/insurance#cover-calculator", name: "Insurance needs calculator", note: "A starting figure for term cover from income, years of support, loans and existing cover." },
];

const faqs = [
  { q: "Are the calculator results guaranteed?", a: "No. Every result is an estimate from the numbers entered and the rate assumed. Market-linked returns are not guaranteed, and a lender or insurer decides its own figures." },
  { q: "Is any personal data stored when a calculator is used?", a: "The calculators run in the browser. Nothing is saved unless a contact form is submitted, and the form asks for consent first." },
  { q: "Which calculator helps when buying a home?", a: "The home loan eligibility calculator shows a likely loan amount, and the EMI calculator shows the monthly instalment for it. Use both before shortlisting property." },
  { q: "How much SIP is needed for a goal?", a: "The SIP goal calculator works backwards from a target amount, a time period and an assumed rate to the monthly amount. A different assumed rate changes the answer, so try more than one." },
];

const related = [
  { href: "/mutual-funds", title: "Mutual funds", note: "AMFI-registered distributor, SIP and goal planning." },
  { href: "/loans", title: "Loans", note: "Home loan, LAP and business loan comparison." },
  { href: "/blog/how-much-term-insurance-cover-do-you-need", title: "How much term cover do you need", note: "Three ways to reach a starting figure." },
];

export default function Calculators() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: tools.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, url: `${SITE_URL}${t.href}` })),
  };
  const short = "Six free calculators are available: SIP, SIP goal, EMI, loan eligibility, home loan eligibility and term insurance cover. Each gives an estimate from the numbers entered, not a promise of returns or of loan approval.";
  return (
    <>
      <JsonLd data={itemList} />
      <JsonLd data={breadcrumbLd([{ name: "Calculators", path: "/calculators" }])} />
      <JsonLd data={webPageLd({ path: "/calculators", name: "Free SIP, EMI, Loan & Insurance Calculators", description: short })} />
      <section className="hero-navy text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
          <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.08] mb-6 max-w-3xl">Free SIP, EMI, loan and insurance calculators</h1>
          <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure">Try a number before talking to anyone. Nothing here needs a sign-up.</p>
        </div>
      </section>
      <ShortAnswer updated={formatDate(PAGE_DATES["/calculators"])}>{short}</ShortAnswer>
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {tools.map((t) => (
              <li key={t.href} className="border-t border-border pt-5">
                <h2 className="font-heading font-semibold text-xl text-primary mb-1">
                  <Link href={t.href} className="hover:text-secondary transition-colors">{t.name}</Link>
                </h2>
                <p className="font-body text-sm text-foreground-muted leading-relaxed">{t.note}</p>
              </li>
            ))}
          </ul>
          <p className="font-body text-xs text-foreground-muted mt-10 measure">
            Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Insurance is the subject matter of solicitation. Results are estimates and not an offer or approval.
          </p>
        </div>
      </section>
      <FaqSection faqs={faqs} />
      <RelatedGuides items={related} />
    </>
  );
}
