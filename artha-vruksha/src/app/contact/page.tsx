import Link from "next/link";
import { pageMeta, breadcrumbLd, formatDate, PAGE_DATES } from "@/lib/seo";
import { SocialLinks } from "@/components/social-links";
import { ShortAnswer } from "@/components/seo/short-answer";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, Phone, BadgeCheck } from "lucide-react";

export const metadata = pageMeta({
  title: 'Contact Assetzpro | Pune & Ahmedabad',
  description: 'Contact Assetzpro Services about property to rent, lease, buy or sell, mutual funds, insurance or loans in Pune and Ahmedabad. A reply is usually sent within one working day.',
  path: '/contact',
});

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Contact", path: "/contact" }])} />
      <section className="hero-navy text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
          <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.08] mb-6 max-w-3xl">Share what you need</h1>
          <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure mb-4">
            Mutual funds, real estate, insurance or loans: write a few lines and a reply follows by email or phone. No pressure, no obligation.
          </p>
          <p className="inline-flex items-center gap-2 font-body text-sm text-primary-foreground/85"><BadgeCheck className="h-4 w-4 text-accent" /> Replies are usually sent within one working day</p>
        </div>
      </section>
      <ShortAnswer updated={formatDate(PAGE_DATES["/contact"])}>To contact Assetzpro Services, call or WhatsApp +91 90229 58266 or email info@assetzpro.com. Meetings are held by appointment in Pune and Ahmedabad, and a reply follows on the same number.</ShortAnswer>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <ContactForm />
          </div>
          <div className="md:col-span-2 space-y-8">
            <div>
              <Phone className="h-6 w-6 text-secondary mb-2" />
              <h2 className="font-heading font-semibold text-lg text-primary mb-1">Call or WhatsApp</h2>
              <p className="font-body text-foreground-muted">
                <a href="tel:+919022958266" className="hover:text-secondary">+91 90229 58266</a>
              </p>
            </div>
            <div>
              <Mail className="h-6 w-6 text-secondary mb-2" />
              <h2 className="font-heading font-semibold text-lg text-primary mb-1">Email</h2>
              <p className="font-body text-foreground-muted">info@assetzpro.com</p>
            </div>
            <div>
              <MapPin className="h-6 w-6 text-secondary mb-2" />
              <h2 className="font-heading font-semibold text-lg text-primary mb-1">Meeting locations (by appointment)</h2>
              <p className="font-body text-foreground-muted">Amanora Park Town, Hadapsar, Pune, Maharashtra 411028</p>
              <p className="font-body text-foreground-muted mt-2">CG Road, Ahmedabad, Gujarat 380009</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-lg text-primary mb-3">Find Assetzpro online</h2>
              <SocialLinks />
              <p className="font-body text-sm text-foreground-muted mt-3">Instagram, LinkedIn, and Google reviews from clients.</p>
            </div>
            <p className="font-body text-xs text-foreground-muted leading-relaxed border-l-4 border-green pl-4">
              Assetzpro Services works through individually licensed distributors and registered real estate agents, not fee-charging investment advisers. Enquiries here do not constitute investment advice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-surface border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">How does an enquiry work?</h2>
          <p className="font-body text-foreground-muted leading-relaxed mb-4 measure">
            Property enquiries are taken for Pune (Amanora, Magarpatta, Kharadi, Koregaon Park, Kalyani Nagar, Viman Nagar, Mundhwa, Hadapsar, Baner, Hinjewadi and nearby),
            Ahmedabad (SG Highway, Bodakdev, Bopal, Shela, Prahlad Nagar, CG Road and nearby), GIFT City and Dholera. Mutual fund, insurance and loan enquiries are taken from both cities.
          </p>
          <p className="font-body text-foreground-muted leading-relaxed mb-4 measure">
            Send the area, budget and what you need on WhatsApp or the form, and a reply follows on the same number. For property, matching options are shortlisted
            and RERA status and paperwork are checked before a visit is fixed. Meetings are by appointment at a place and time agreed with you.
          </p>
          <p className="font-body text-foreground-muted leading-relaxed measure">
            Your details are used only to reply, as set out in the <Link href="/privacy-policy" className="text-secondary underline underline-offset-2">Privacy Policy</Link>.
            See also <Link href="/real-estate/pune" className="text-secondary underline underline-offset-2">property in Pune</Link> and{" "}
            <Link href="/real-estate/ahmedabad" className="text-secondary underline underline-offset-2">property in Ahmedabad</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
