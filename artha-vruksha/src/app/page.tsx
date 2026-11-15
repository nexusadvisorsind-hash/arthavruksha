import { pageMeta, breadcrumbLd, webPageLd, formatDate, PAGE_DATES } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { ShortAnswer } from "@/components/seo/short-answer";
import { FaqSection } from "@/components/seo/faq-section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, TrendingUp, Building2, ShieldCheck, Landmark } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import { Reveal } from "@/components/reveal";
import { BanyanHero } from "@/components/banyan-hero";
import { LifeMomentPicker } from "@/components/life-moment-picker";
import { CostOfWaiting } from "@/components/cost-of-waiting";
import { RequirementBar } from "@/components/requirement-bar";
import { PLACES, PLACE_ORDER } from "@/lib/re-locations";

export const metadata = pageMeta({
  title: 'Property, Mutual Funds, Insurance & Loans in Pune | Assetzpro',
  description: 'Flats, shops and offices for rent, lease, buy and sell in Pune and Ahmedabad, plus mutual funds, insurance and loans. Registered professionals. Meetings by appointment.',
  path: '/',
});

const credentials = [
  { k: "Mutual funds", v: "AMFI ARN 106715" },
  { k: "Real estate", v: "MahaRERA and GujRERA registered" },
  { k: "Insurance", v: "IRDAI licensed agent" },
  { k: "Loans", v: "Empanelled bank loan DSA" },
];

const categoryColors: Record<string, string> = {
  "Mutual Funds": "bg-secondary/10 text-secondary",
  "Real Estate": "bg-green-soft text-green",
  Insurance: "bg-accent/20 text-accent-foreground",
  Loans: "bg-primary/10 text-primary",
  "Personal Finance": "bg-secondary/10 text-secondary",
};

const homeFaqs = [
  {
    "q": "Which cities does Assetzpro Services cover?",
    "a": "Pune, Maharashtra and Ahmedabad, Gujarat, with enquiries for GIFT City and Dholera as well. Meetings are by appointment. See the Pune and Ahmedabad pages for areas and meeting locations."
  },
  {
    "q": "Is there a fee for a first conversation?",
    "a": "No fee is charged for a first conversation or for using the calculators. How each service is paid for is explained on its own page before anything is started."
  },
  {
    "q": "Are returns or loan approvals promised?",
    "a": "No. Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Insurance is the subject matter of solicitation. Loan approval and rates are decided by the lender."
  }
];

const services = [
  { title: "Mutual funds", text: "SIPs and goal planning with an AMFI-registered Mutual Fund Distributor. Risks and costs are explained first.", href: "/mutual-funds", cta: "Explore mutual funds", tool: "Try the SIP calculator", toolHref: "/mutual-funds#sip-calculator", icon: TrendingUp, color: "#1E5FD9" },
  { title: "Real estate", text: "Rent, lease, buy or sell flats, shops and offices in Pune, Ahmedabad, GIFT City and Dholera, checked for RERA status.", href: "/real-estate", cta: "Explore real estate", tool: "Find property in Pune", toolHref: "/real-estate/pune", icon: Building2, color: "#0F8A5F" },
  { title: "Insurance", text: "Term, health and motor cover explained in plain language by an IRDAI-registered individual agent.", href: "/insurance", cta: "Explore insurance", tool: "Estimate cover needed", toolHref: "/insurance#cover-calculator", icon: ShieldCheck, color: "#B8921F" },
  { title: "Loans", text: "Home loans, loan against property and business loans compared across banks and lenders.", href: "/loans", cta: "Explore loans", tool: "Open the EMI calculator", toolHref: "/loans#emi-calculator", icon: Landmark, color: "#0B1E42" },
];

const homePosts = (["Mutual Funds", "Real Estate", "Insurance", "Loans"] as const)
  .map((c) => blogPosts.find((p) => p.category === c))
  .filter((p): p is (typeof blogPosts)[number] => Boolean(p));

const homeShort = "Assetzpro Services brings mutual funds, real estate, insurance and loans under one team in Pune and Ahmedabad, with meetings by appointment. Each service is handled by an individually registered professional whose registration number is shown on the site. Calculators, guides and plain-language explanations come before any sales conversation.";

export default function Home() {
  return (
    <>
      <JsonLd data={webPageLd({ path: "/", name: "Property, Mutual Funds, Insurance & Loans in Pune and Ahmedabad", description: homeShort })} />
      <section className="hero-home text-primary-foreground overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 md:pt-20 md:pb-16 grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] mb-6">
              Mutual funds, property, insurance and loans, under one registered team in Pune and Ahmedabad.
            </h1>
            <p className="font-body text-lg text-primary-foreground/85 leading-relaxed mb-8 measure">
              Plan investments, rent, lease, buy or sell property, protect your family and compare loans. Everything is explained in plain language, with every registration shown openly and no returns promised.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button asChild size="lg" variant="gold">
                <a href="tel:+919022958266">Call +91 90229 58266 <Phone className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/70 text-white hover:bg-white hover:text-primary">
                <a href="#services">See all services</a>
              </Button>
            </div>
            <p className="font-body text-xs text-primary-foreground/65 measure">
              Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Insurance is the subject matter of solicitation.
            </p>
          </div>
          <BanyanHero />
        </div>
      </section>

      <ShortAnswer updated={formatDate(PAGE_DATES["/"])}>{homeShort}</ShortAnswer>

      <section className="bg-background border-b border-border" aria-label="Registrations">
        <dl className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
          {credentials.map((c) => (
            <div key={c.k} className="border-l-2 border-accent pl-3">
              <dt className="font-body text-xs text-foreground-muted">{c.k}</dt>
              <dd className="font-body text-sm font-semibold text-primary">{c.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="services" className="py-16 md:py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3 measure">Four services, one team</h2>
            <p className="font-body text-foreground-muted mb-10 measure">Start with the one you need. Each page explains how it works and how it is paid for before anything begins.</p>
          </Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {services.map((sv) => (
              <li key={sv.href} className="step-card flex flex-col p-6" style={{ borderTopColor: sv.color }}>
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: `${sv.color}1A`, color: sv.color }}>
                  <sv.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading font-semibold text-xl text-primary mb-2">{sv.title}</h3>
                <p className="font-body text-sm text-foreground-muted leading-relaxed mb-5">{sv.text}</p>
                <div className="mt-auto border-t border-border pt-2">
                  <Link href={sv.href} className="inline-flex min-h-11 items-center gap-1.5 font-body text-sm font-semibold text-primary hover:text-secondary">
                    {sv.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href={sv.toolHref} className="flex min-h-11 items-center font-body text-sm text-secondary hover:underline">{sv.tool}</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="property" className="hero-re text-primary-foreground py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Looking for a property?</h2>
            <p className="font-body text-primary-foreground/85 leading-relaxed measure mb-6">
              Choose what you need, the area and your budget. The message opens in WhatsApp, ready to send.
            </p>
            <ul className="flex flex-wrap gap-2">
              {PLACE_ORDER.map((s) => (
                <li key={s}>
                  <Link href={`/real-estate/${s}`} className="inline-flex items-center rounded-full border border-white/30 px-4 py-1.5 font-body text-sm text-white hover:bg-white/10">
                    {PLACES[s].name} property
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <RequirementBar
            heading="Share what you need"
            defaultArea="Kharadi"
            areas={["Amanora", "Magarpatta", "Kharadi", "Koregaon Park", "Kalyani Nagar", "Viman Nagar", "Mundhwa", "Other area in Pune", "SG Highway", "Bopal", "Prahlad Nagar", "Other area in Ahmedabad", "GIFT City", "Dholera"]}
          />
        </div>
      </section>

      <section id="life-moments" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3 measure">Where are you in life right now?</h2>
            <p className="font-body text-foreground-muted mb-8 measure">Pick the moment closest to yours. The three things that usually matter first appear below, in the order they usually matter.</p>
          </Reveal>
          <LifeMomentPicker />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-12">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-5">Why one team instead of four</h2>
            <p className="font-body text-lg text-foreground-muted leading-relaxed measure">
              Most families manage money in pieces. The property agent does not know what you can borrow. The fund distributor does not know about your EMIs. The insurance agent does not know what you need to protect.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-6">
              {[
                ["A loan decision changes your investing.", "A lower EMI frees monthly money for a SIP. Both are looked at together."],
                ["A property decision changes your cover.", "A home loan needs term cover behind it, so the family keeps the home."],
                ["An uninsured risk undoes years of saving.", "What is already protected is checked before any suggestion on where to invest more."],
              ].map(([h, b]) => (
                <li key={h} className="border-l-4 border-green pl-5">
                  <p className="font-heading font-semibold text-xl text-primary mb-1">{h}</p>
                  <p className="font-body text-foreground-muted leading-relaxed">{b}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3 measure">What does waiting cost?</h2>
            <p className="font-body text-foreground-muted mb-10 measure">Move the sliders and compare starting a SIP today with starting later.</p>
          </Reveal>
          <CostOfWaiting />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-forest text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-5">Two cities, local knowledge</h2>
            <p className="font-body text-primary-foreground/80 leading-relaxed measure">
              Good guidance depends on the local market: which builders deliver, which lenders approve quickly, how each state&rsquo;s property rules work, and which insurers and funds suit families there. That is why Assetzpro Services works from both Pune and Ahmedabad.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="space-y-6">
              <div>
                <dt className="font-heading text-xl font-semibold">Maharashtra</dt>
                <dd className="font-body text-primary-foreground/80 mt-1">Pune. Mutual funds, insurance and loans, with MahaRERA registered property for residential and commercial buyers.</dd>
              </div>
              <div>
                <dt className="font-heading text-xl font-semibold">Gujarat</dt>
                <dd className="font-body text-primary-foreground/80 mt-1">Ahmedabad. Mutual funds, insurance and loans, with GujRERA registered property including industrial and logistics space.</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">How the firm earns, and how your data is protected</h2>
          <p className="font-body text-foreground-muted mb-10 measure">Two things people should know before they trust anyone with their finances.</p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-heading font-semibold text-xl text-primary mb-2">Distributors and registered agents, not fee-charging advisers</h3>
              <p className="font-body text-foreground-muted leading-relaxed measure">Earnings come as commission from the fund house, insurer or lender, never as a hidden fee from you. Risks and costs are explained before you decide, and returns are never promised.</p>
            </div>
            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-heading font-semibold text-xl text-primary mb-2">Your details are handled with care</h3>
              <p className="font-body text-foreground-muted leading-relaxed measure">Only the details needed to reply are collected, with your consent, under the DPDP Act 2023. Your information is never sold. Read the Privacy Policy for the full details.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">Read before you decide</h2>
          <p className="font-body text-foreground-muted mb-10 measure">Plain-language guides, written to help you decide, not to sell you anything.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-10">
            {homePosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold font-body mb-3 ${categoryColors[post.category]}`}>{post.category}</span>
                <h3 className="font-heading font-semibold text-xl text-primary mb-2 leading-snug group-hover:text-secondary transition-colors">{post.title}</h3>
                <p className="font-body text-sm text-foreground-muted leading-relaxed mb-3">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm text-secondary font-semibold">Read article <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
          <Button asChild variant="outline" size="lg"><Link href="/blog">All articles</Link></Button>
        </div>
      </section>

      <section className="py-12 bg-surface border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-heading font-semibold text-xl text-primary mb-2"><Link href="/pune" className="hover:text-secondary">Pune</Link></h2>
            <p className="font-body text-sm text-foreground-muted leading-relaxed">Meetings by appointment at Amanora Park Town, Hadapsar. Property, loans, mutual funds and insurance enquiries from Pune and Pimpri-Chinchwad.</p>
          </div>
          <div>
            <h2 className="font-heading font-semibold text-xl text-primary mb-2"><Link href="/ahmedabad" className="hover:text-secondary">Ahmedabad</Link></h2>
            <p className="font-body text-sm text-foreground-muted leading-relaxed">Meetings by appointment on CG Road. Gujarat property, mutual funds, loans and insurance enquiries from Ahmedabad and Gandhinagar.</p>
          </div>
          <div>
            <h2 className="font-heading font-semibold text-xl text-primary mb-2"><Link href="/calculators" className="hover:text-secondary">Free calculators</Link></h2>
            <p className="font-body text-sm text-foreground-muted leading-relaxed">SIP, goal SIP, EMI, loan eligibility, home loan eligibility and insurance cover estimates.</p>
          </div>
        </div>
      </section>

      <FaqSection faqs={homeFaqs} />

      <section className="py-16 md:py-24 hero-navy text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-10 items-end">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Let&rsquo;s talk about your goals</h2>
            <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure">A no-pressure conversation. Share what you want to achieve, and the options follow, with the costs and risks first.</p>
          </div>
          <div>
            <Button asChild variant="gold" size="lg" className="mb-4"><Link href="/contact">Contact <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
            <p className="font-body text-sm text-primary-foreground/70">info@assetzpro.com · +91 90229 58266 · Meetings by appointment in Pune and Ahmedabad</p>
          </div>
        </div>
      </section>
    </>
  );
}
