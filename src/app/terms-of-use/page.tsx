import Link from "next/link";
import { pageMeta, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = pageMeta({
  title: "Terms of Use | Artha Vriksha Services",
  description: "Terms for using arthavriksha.in: information only, no investment advice, illustrative calculators, and where registrations are held.",
  path: "/terms-of-use",
});

const H2 = "font-heading font-bold text-2xl text-primary mt-10 mb-3";
const P = "font-body text-foreground-muted leading-relaxed mb-3 measure";

export default function Terms() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Terms of Use", path: "/terms-of-use" }])} />
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-8">Terms of Use</h1>

        <p className={P}>By using arthavriksha.in you accept these terms. If you do not accept them, please do not use the website.</p>

        <h2 className={H2}>Information only</h2>
        <p className={P}>
          Everything on this website is general information. It is not investment advice, a recommendation, an offer or a solicitation to buy or sell
          any security, property, insurance policy or loan. Artha Vriksha Services does not provide fee-based investment advisory or portfolio
          management services under SEBI (Investment Advisers) Regulations.
        </p>

        <h2 className={H2}>Who holds the registrations</h2>
        <p className={P}>
          Artha Vriksha Services is a brand. The AMFI, MahaRERA, GujRERA and IRDAI registrations shown on the website are held by the named
          individuals, not by the brand. Please check the registration details in the footer before you deal with any of them.
        </p>

        <h2 className={H2}>Required disclosures</h2>
        <p className={P}>Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p>
        <p className={P}>Insurance is the subject matter of solicitation.</p>
        <p className={P}>
          Real estate projects are presented only if registered with the respective state RERA authority. Loan approval, amount and interest rate
          are decided by the lender.
        </p>

        <h2 className={H2}>Calculators and illustrations</h2>
        <p className={P}>
          Calculators and charts are illustrations built on assumptions you choose. Actual returns, premiums, eligibility and EMIs will differ.
          Past performance does not guarantee future results, and no returns are promised.
        </p>

        <h2 className={H2}>Your enquiries</h2>
        <p className={P}>
          Details you send through the contact form are handled as described in the <Link href="/privacy-policy" className="text-secondary underline">Privacy Policy</Link>.
          Sending an enquiry does not create a client relationship, and no product is sold or bought through this website.
        </p>

        <h2 className={H2}>Content and links</h2>
        <p className={P}>
          The text, design and logo on this website belong to Artha Vriksha Services and may not be copied for commercial use without written permission.
          External links are given for convenience, and their content is not controlled here.
        </p>

        <h2 className={H2}>Limits and law</h2>
        <p className={P}>
          The website is provided as is, and care is taken to keep it accurate, but it may contain errors or become out of date. To the extent the
          law allows, no liability is accepted for loss caused by relying on it. These terms are governed by the laws of India.
        </p>
      </div>
    </section>
    </>
  );
}
