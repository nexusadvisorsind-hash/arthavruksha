import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, BadgeCheck } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="hero-navy text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 mb-6">
            <BadgeCheck className="h-4 w-4 text-accent" />
            <span className="font-body text-xs md:text-sm font-semibold tracking-wide">
              We Usually Reply Within 24 Hours
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Get in Touch</h1>
          <p className="font-body text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Tell us a bit about what you need — Mutual Funds, Real Estate, Insurance or Loans —
            and our team will get back to you. No pressure, no obligation, just a straightforward
            conversation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <ContactForm />
          </div>
          <div className="md:col-span-2 space-y-6">
            <div className="bg-surface border border-border rounded-2xl p-6">
              <Mail className="h-6 w-6 text-secondary mb-3" />
              <h3 className="font-heading font-semibold text-primary mb-1">Email Us</h3>
              <p className="font-body text-sm text-foreground-muted">leadership@arthavruksha.com</p>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-6">
              <MapPin className="h-6 w-6 text-secondary mb-3" />
              <h3 className="font-heading font-semibold text-primary mb-1">Our Offices</h3>
              <p className="font-body text-sm text-foreground-muted">Pune, Maharashtra</p>
              <p className="font-body text-sm text-foreground-muted">Ahmedabad, Gujarat</p>
            </div>
            <div className="bg-green-soft border border-green/20 rounded-2xl p-6">
              <p className="font-body text-xs text-foreground-muted leading-relaxed">
                We are licensed distributors and certified transaction brokers, not fee-charging
                investment advisers. Enquiries here do not constitute investment advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
