import { pageMeta, breadcrumbLd, webPageLd, formatDate, PAGE_DATES } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { ShortAnswer } from "@/components/seo/short-answer";
import { FaqSection } from "@/components/seo/faq-section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import { Reveal } from "@/components/reveal";
import { BanyanHero } from "@/components/banyan-hero";
import { LifeMomentPicker } from "@/components/life-moment-picker";
import { CostOfWaiting } from "@/components/cost-of-waiting";

export const metadata = pageMeta({
  title: 'Mutual Funds, Real Estate, Insurance & Loans | Artha Vriksha',
  description: 'Registered mutual fund distributor, real estate consultant, insurance agent and loan DSA with offices in Pune and Ahmedabad. One team, plain language.',
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
    "q": "Who holds the registrations shown on this site?",
    "a": "The registrations are held by individuals, not by the firm name. Anup Vatyani holds AMFI ARN 106715 and a GujRERA registration. Pavan Vatyani holds a MahaRERA registration. Menka Motwani is an IRDAI-registered individual insurance agent. Artha Vriksha Services is the name they work under."
  },
  {
    "q": "Which cities does Artha Vriksha Services cover?",
    "a": "There are offices in Pune, Maharashtra and Ahmedabad, Gujarat, and enquiries are taken from across both states. See the Pune and Ahmedabad pages for areas and office details."
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

const homeShort = "Artha Vriksha Services brings mutual funds, real estate, insurance and loans under one team with offices in Pune and Ahmedabad. Each service is handled by an individually registered professional whose registration number is shown on the site. Calculators, guides and plain-language explanations come before any sales conversation.";

export default function Home() {
  return (
    <>
      <JsonLd data={webPageLd({ path: "/", name: "Mutual Funds, Real Estate, Insurance & Loans in Pune and Ahmedabad", description: homeShort })} />
      <section className="hero-home text-primary-foreground overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 md:pt-20 md:pb-16 grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] mb-6">
              Mutual funds, real estate, insurance and loans in Pune and Ahmedabad, under one registered team.
            </h1>
            <p className="font-body text-lg text-primary-foreground/85 leading-relaxed mb-8 measure">
              Artha Vriksha Services is a family-run firm in Pune and Ahmedabad. Every product is explained in plain language, the registrations are shown openly, and your money, property, cover and credit are looked at together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button asChild size="lg" variant="gold">
                <Link href="/contact">Contact <Phone className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/70 text-white hover:bg-white hover:text-primary">
                <a href="#life-moments">Find where to start</a>
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
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-5">Two offices, local knowledge</h2>
            <p className="font-body text-primary-foreground/80 leading-relaxed measure">
              Good property and loan advice depends on the local market: which builders deliver, which lenders approve quickly, and how each state&rsquo;s rules work. That is why Artha Vriksha Services works from both Pune and Ahmedabad.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="space-y-6">
              <div>
                <dt className="font-heading text-xl font-semibold">Maharashtra</dt>
                <dd className="font-body text-primary-foreground/80 mt-1">Pune office. MahaRERA registered property consulting for residential and commercial buyers.</dd>
              </div>
              <div>
                <dt className="font-heading text-xl font-semibold">Gujarat</dt>
                <dd className="font-body text-primary-foreground/80 mt-1">Ahmedabad office. GujRERA registered property consulting, including industrial and logistics space.</dd>
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
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-10 mb-10">
            {blogPosts.slice(0, 3).map((post) => (
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
            <h2 className="font-heading font-semibold text-xl text-primary mb-2"><Link href="/pune" className="hover:text-secondary">Pune office</Link></h2>
            <p className="font-body text-sm text-foreground-muted leading-relaxed">Amanora Park Town. Property, loans, mutual funds and insurance enquiries from Pune and Pimpri-Chinchwad.</p>
          </div>
          <div>
            <h2 className="font-heading font-semibold text-xl text-primary mb-2"><Link href="/ahmedabad" className="hover:text-secondary">Ahmedabad office</Link></h2>
            <p className="font-body text-sm text-foreground-muted leading-relaxed">Chandlodia. Gujarat property, mutual funds, loans and insurance enquiries from Ahmedabad and Gandhinagar.</p>
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
            <p className="font-body text-sm text-primary-foreground/70">info@arthavriksha.in · Offices in Pune and Ahmedabad</p>
          </div>
        </div>
      </section>
    </>
  );
}
