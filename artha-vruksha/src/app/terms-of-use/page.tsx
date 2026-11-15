import Link from "next/link";
import { pageMeta, breadcrumbLd, formatDate, PAGE_DATES } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = pageMeta({
  title: "Terms of Use | Assetzpro Services",
  description:
    "Terms for using assetzpro.com: information only, property details are indicative, no investment advice, illustrative calculators, and where registrations are held.",
  path: "/terms-of-use",
});

const H2 = "font-heading font-bold text-2xl text-primary mt-10 mb-3";
const P = "font-body text-foreground-muted leading-relaxed mb-3 measure";
const UL = "list-disc pl-6 space-y-1 mb-3";
const LI = "font-body text-foreground-muted leading-relaxed measure";
const A = "text-secondary underline";

export default function Terms() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Terms of Use", path: "/terms-of-use" }])} />
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-3">Terms of Use</h1>
          <p className="font-body text-sm text-foreground-muted mb-8">Last updated {formatDate(PAGE_DATES["/terms-of-use"])}.</p>

          <p className={P}>By using assetzpro.com you accept these terms. If you do not accept them, please do not use the website.</p>

          <h2 className={H2}>Information only</h2>
          <p className={P}>
            Everything on this website is general information. It is not investment advice, a recommendation, an offer or a solicitation to buy or
            sell any security, property, insurance policy or loan. Assetzpro Services does not provide fee-based investment advisory or portfolio
            management services under SEBI (Investment Advisers) Regulations.
          </p>

          <h2 className={H2}>Who holds the registrations</h2>
          <p className={P}>
            Assetzpro Services is a brand. The AMFI, MahaRERA, GujRERA and IRDAI registrations shown on the website are held by the named
            individuals, not by the brand. Please check the registration details in the footer, and on the regulator&rsquo;s own website, before you deal
            with any of them.
          </p>

          <h2 className={H2}>Required disclosures</h2>
          <p className={P}>Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p>
          <p className={P}>Insurance is the subject matter of solicitation.</p>
          <p className={P}>
            Real estate projects are presented only if registered with the respective state RERA authority. Loan approval, amount and interest rate
            are decided by the lender.
          </p>

          <h2 className={H2}>Property information</h2>
          <ul className={UL}>
            <li className={LI}>Descriptions of areas, locations and property types are general and for orientation only. They are not a valuation, a price quote or a promise of rent, resale price or returns.</li>
            <li className={LI}>Availability, price, rent and terms of any property can change or end without notice. Nothing on the website is an offer capable of acceptance.</li>
            <li className={LI}>Information about Dholera, GIFT City and other places reflects public sources at the time of writing. Plans, timelines and approvals can change. Check ownership, zoning, approvals and registrations with the relevant authority, and take legal advice, before you commit money.</li>
            <li className={LI}>Brokerage, if any, is agreed in writing before work starts. Enquiring through the website, WhatsApp or phone does not create an obligation to pay.</li>
            <li className={LI}>Assetzpro Services does not hold booking amounts, deposits or rent on your behalf. Payments should be made by bank transfer directly to the seller, landlord, developer or authority named in the agreement, against a receipt.</li>
          </ul>

          <h2 className={H2}>Calculators and illustrations</h2>
          <p className={P}>
            Calculators and charts are illustrations built on assumptions you choose. Actual returns, premiums, eligibility and EMIs will differ.
            Past performance does not guarantee future results, and no returns are promised.
          </p>

          <h2 className={H2}>Your enquiries and your data</h2>
          <p className={P}>
            Details you send through the contact form, WhatsApp or phone are handled as described in the{" "}
            <Link href="/privacy-policy" className={A}>Privacy Policy</Link>. Sending an enquiry does not create a client relationship, and no product is
            sold or bought through this website.
          </p>

          <h2 className={H2}>Using the website</h2>
          <p className={P}>
            Please give accurate details when you enquire. Do not misuse the website, send harmful or unlawful content, try to break into the leads area,
            or copy the website&rsquo;s content automatically in bulk.
          </p>

          <h2 className={H2}>Content and links</h2>
          <p className={P}>
            The text, design and logo on this website belong to Assetzpro Services and may not be copied for commercial use without written
            permission. External links are given for convenience, and their content is not controlled here.
          </p>

          <h2 className={H2}>Limits and law</h2>
          <p className={P}>
            The website is provided as is, and care is taken to keep it accurate, but it may contain errors or become out of date. To the extent the law
            allows, no liability is accepted for loss caused by relying on it. Nothing in these terms limits any right you have under law that cannot be
            limited. These terms are governed by the laws of India, and disputes arising from the use of this website are subject to the courts at Pune,
            Maharashtra.
          </p>

          <h2 className={H2}>Where to complain</h2>
          <p className={P}>
            Write first to <a className={A} href="mailto:info@assetzpro.com">info@assetzpro.com</a> or call +91 90229 58266. You may also approach
            the regulator concerned: MahaRERA or GujRERA for property, SEBI (SCORES) for mutual funds, IRDAI (Bima Bharosa) for insurance, and the RBI
            for banking and lending matters.
          </p>

          <h2 className={H2}>Changes to these terms</h2>
          <p className={P}>These terms may be updated. The date at the top shows when they last changed.</p>
        </div>
      </section>
    </>
  );
}
