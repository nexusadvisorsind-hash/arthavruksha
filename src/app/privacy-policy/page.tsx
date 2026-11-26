import { pageMeta, breadcrumbLd, formatDate, PAGE_DATES } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { PRIVACY_CONTACT, PRIVACY_NOTICE_VERSION, RETENTION_MONTHS } from "@/lib/privacy";

export const metadata = pageMeta({
  title: "Privacy Policy | Assetzpro Services",
  description:
    "What personal data Assetzpro Services collects through the website and WhatsApp, why, how long it is kept, your rights, and how to complain, under the DPDP Act, 2023.",
  path: "/privacy-policy",
});

const H2 = "font-heading font-bold text-2xl text-primary mt-10 mb-3";
const P = "font-body text-foreground-muted leading-relaxed mb-3 measure";
const LI = "font-body text-foreground-muted leading-relaxed measure";
const UL = "list-disc pl-6 space-y-1 mb-3";
const A = "text-secondary underline";

export default function PrivacyPolicy() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Privacy Policy", path: "/privacy-policy" }])} />
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-3">Privacy Policy</h1>
          <p className="font-body text-sm text-foreground-muted mb-8">
            Version {PRIVACY_NOTICE_VERSION}. Last updated {formatDate(PAGE_DATES["/privacy-policy"])}. Applies to assetzpro.com and to enquiries made to
            Assetzpro Services by WhatsApp, phone or email.
          </p>

          <h2 className={H2}>Who is responsible for your data</h2>
          <p className={P}>
            Assetzpro Services is the name under which Pavan Vatyani and Anup Vatyani work. For the Digital Personal Data Protection Act, 2023 (the
            &ldquo;DPDP Act&rdquo;) and the rules made under it, they are the &ldquo;data fiduciary&rdquo;: the people who decide why and how your
            personal data is used. Work is done from Pune, Maharashtra and Ahmedabad, Gujarat, and clients are met by appointment.
          </p>
          <p className={P}>
            For any question about this policy or your data, contact {PRIVACY_CONTACT.name}: email{" "}
            <a className={A} href={`mailto:${PRIVACY_CONTACT.email}`}>{PRIVACY_CONTACT.email}</a>, phone{" "}
            <a className={A} href={`tel:${PRIVACY_CONTACT.phoneTel}`}>{PRIVACY_CONTACT.phone}</a>, or by post to {PRIVACY_CONTACT.address}.
          </p>

          <h2 className={H2}>What is collected, and why</h2>
          <p className={P}>Personal data is collected only when you give it. Each item below is linked to the reason it is needed.</p>
          <ul className={UL}>
            <li className={LI}><strong>Name, email address and 10-digit mobile number</strong>, from the contact form or from a WhatsApp message or call. Used to reply to you and to contact you about the enquiry you made.</li>
            <li className={LI}><strong>The service you ask about</strong> (property, mutual funds, insurance or loans). Used to send your enquiry to the right person.</li>
            <li className={LI}><strong>Your message</strong>, which may include a property requirement such as area, budget, type of property and move-in date, or a calculator summary. Used to prepare suitable options and a reply.</li>
            <li className={LI}><strong>WhatsApp and call records</strong>: your number, name on WhatsApp and the messages you send. Used to continue the conversation you started.</li>
            <li className={LI}><strong>Documents</strong>, only if a transaction you asked for needs them (for example ID, address or income proof for a rental or a loan). They are asked for separately when needed. Please do not send PAN, Aadhaar, bank or card numbers through the website form.</li>
          </ul>
          <p className={P}>
            Your data is used only for the purposes above. It is not used for unrelated marketing, and it is never sold. No
            automated decisions are made about you.
          </p>

          <h2 className={H2}>How consent is used</h2>
          <p className={P}>
            On the website form, your details are processed only after you tick the consent box. The date and time of your consent and the version
            of this notice are saved with your enquiry. When you message or call yourself, you are giving your details for the purpose of
            replying, and they are used only for that.
          </p>
          <p className={P}>
            Consent is voluntary. You can withdraw it at any time, as easily as you gave it, by emailing{" "}
            <a className={A} href={`mailto:${PRIVACY_CONTACT.email}`}>{PRIVACY_CONTACT.email}</a>, calling or messaging {PRIVACY_CONTACT.phone}, or
            replying &ldquo;stop&rdquo; on WhatsApp. After you withdraw, your data is no longer used and is deleted within a reasonable time, unless a law
            requires it to be kept. Withdrawing does not affect what was done before you withdrew.
          </p>

          <h2 className={H2}>Who receives your data</h2>
          <p className={P}>
            Enquiries are read by Pavan Vatyani and Anup Vatyani. Insurance enquiries may be passed to Menka Motwani, who handles insurance. If your
            enquiry needs your details to be shared with another party, such as a property owner, a builder, a lender or an insurer, to arrange a
            visit, a loan application or a policy, you are told first and only what is needed is shared.
          </p>
          <p className={P}>To run the website, your data is stored with these service providers, who act as data processors:</p>
          <ul className={UL}>
            <li className={LI}>Vercel Inc., for website hosting.</li>
            <li className={LI}>Neon, for the database where enquiries are stored.</li>
            <li className={LI}>Resend, for emailing the team a notice of each new enquiry, and Meta (WhatsApp Business), for WhatsApp messages and for sending the team a short alert.</li>
            <li className={LI}>Google LLC (Google Analytics) and Microsoft Corporation (Microsoft Clarity), only where optional analytics is switched on and only after you accept it. See &ldquo;Cookies and tracking&rdquo; below.</li>
          </ul>
          <p className={P}>
            Servers of these providers may be outside India. Data is transferred outside India only as the DPDP Act and the Central Government allow. Data is
            disclosed to authorities only where the law requires it. If you tap the WhatsApp button, you are using WhatsApp&rsquo;s service, which has
            its own privacy policy.
          </p>

          <h2 className={H2}>How long your data is kept</h2>
          <p className={P}>
            Enquiries that do not lead to a client relationship are deleted from the website database after {RETENTION_MONTHS} months. WhatsApp
            chats about enquiries that do not proceed are deleted on the same schedule. If you become a client, records are kept for as long as the
            law and the rules of SEBI/AMFI, RERA, IRDAI and the lender require, and then deleted. Data is deleted earlier when you ask, unless a law
            requires it to be kept.
          </p>

          <h2 className={H2}>Your rights under the DPDP Act</h2>
          <ul className={UL}>
            <li className={LI}>To get a summary of the personal data held about you, who it has been shared with, and how it is used.</li>
            <li className={LI}>To ask for correction, completion or updating of your data.</li>
            <li className={LI}>To ask for erasure of your data.</li>
            <li className={LI}>To withdraw your consent at any time.</li>
            <li className={LI}>To have your grievance heard and answered.</li>
            <li className={LI}>To nominate another person to exercise these rights if you die or become unable to do so.</li>
          </ul>
          <p className={P}>
            To use any of these rights, write to <a className={A} href={`mailto:${PRIVACY_CONTACT.email}`}>{PRIVACY_CONTACT.email}</a> or call{" "}
            {PRIVACY_CONTACT.phone}. Give the name, email and phone number you used so your record can be found, and say what you want done. You may be asked
            to confirm your identity. A request is acknowledged promptly and answered within the time the DPDP Rules allow.
          </p>

          <h2 className={H2}>Complaints</h2>
          <p className={P}>
            If you are unhappy with how your data is handled, write first to the contact above, and your grievance will be answered. If you are not
            satisfied with the reply, you may complain to the Data Protection Board of India.
          </p>

          <h2 className={H2}>Children</h2>
          <p className={P}>
            This website is meant for adults. It is not directed at anyone under 18, and children&rsquo;s data is not knowingly collected. Children are not tracked
            and are not shown targeted advertising. A parent or guardian who believes a child has sent details can ask for them to be deleted. If a
            child&rsquo;s data is ever needed, verifiable consent will first be obtained from the parent or lawful guardian.
          </p>

          <h2 className={H2}>Security and breaches</h2>
          <p className={P}>
            The website uses encrypted (HTTPS) connections. Stored enquiries can be read only after a password sign-in, and only by the team. Service
            providers are bound to keep data secure. If a personal data breach occurs, the Data Protection Board of India and the people
            affected are informed, as the DPDP Act and the Rules require.
          </p>

          <h2 className={H2}>Cookies and tracking</h2>
          <p className={P}>The website does not use advertising cookies. A sign-in cookie is set only for authorised staff in the leads area.</p>
          <p className={P}>
            Where optional analytics is switched on, a banner asks for a choice. Nothing is loaded until you press &ldquo;Accept analytics&rdquo;. If you accept,
            Google Analytics records anonymised visit statistics (pages viewed, enquiry, call-button and WhatsApp-button clicks) and Microsoft Clarity
            records anonymised page interactions such as clicks and scrolling. Form fields are masked. Declining has no effect on how the site works, and
            the &ldquo;Cookie settings&rdquo; link in the footer lets you change the choice at any time.
          </p>
          <p className={P}>
            The &ldquo;Share what you need&rdquo; box on the property pages only builds a message and opens WhatsApp. What you choose in it is not saved on this website.
          </p>

          <h2 className={H2}>Changes to this policy</h2>
          <p className={P}>
            When this policy changes, the version number above changes too. The version you agreed to is saved with your enquiry.
          </p>
        </div>
      </section>
    </>
  );
}
