import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { ShortAnswer } from "@/components/seo/short-answer";
import { FaqSection } from "@/components/seo/faq-section";
import { OfficialSources } from "@/components/seo/official-sources";
import { RelatedGuides } from "@/components/seo/related-guides";
import { breadcrumbLd, webPageLd, formatDate, PAGE_DATES } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RegionToggle } from "@/components/region-toggle";
import { getPostBySlug } from "@/lib/blog-posts";
import {
  ArrowRight,
  BadgeCheck,
  Home,
  Building2,
  Factory,
  Wheat,
  CheckCircle2,
  Search,
  FileCheck,
  Handshake,
} from "lucide-react";
import { PropertyLifecycleChart } from "@/components/property-lifecycle-chart";
import { HomeLoanEligibilityCalculator } from "@/components/home-loan-eligibility-calculator";
import { Reveal } from "@/components/reveal";
import { InPageNav } from "@/components/in-page-nav";
import { ReraStepper } from "@/components/rera-stepper";
import { RequirementBar } from "@/components/requirement-bar";
import { PLACES, PLACE_ORDER } from "@/lib/re-locations";
import { MapPin } from "lucide-react";
import { ScrollTimeline } from "@/components/scroll-timeline";

export const metadata = pageMeta({
  title: 'Rent, Lease, Buy & Sell Property in Pune, Ahmedabad',
  description: 'Flats, shops and offices for rent, lease, buy and sell in Pune, Ahmedabad, GIFT City and Dholera. MahaRERA and GujRERA registered agents.',
  path: '/real-estate',
});

const categories = [
  {
    icon: Home,
    title: "Residential",
    body: "Flats, villas, and plotted developments across Maharashtra and Gujarat — whether you're buying your first home, upgrading, or investing in a second property. Pavan Vatyani (Maharashtra) or Anup Vatyani (Gujarat) checks builder credentials and RERA status before any listing is shown.",
  },
  {
    icon: Building2,
    title: "Commercial",
    body: "Office spaces, retail shops, and mixed-use commercial units for businesses looking to set up, expand, or relocate. Pavan Vatyani (Maharashtra) or Anup Vatyani (Gujarat) evaluates footfall, connectivity and lease terms so the space actually works for your business.",
  },
  {
    icon: Factory,
    title: "Industrial & Logistics",
    body: "Warehouses, industrial sheds, and manufacturing plots — especially useful if you're setting up operations in Gujarat's industrial corridors. Anup Vatyani checks zoning rules and utility access requirements for these properties.",
  },
  {
    icon: Wheat,
    title: "Agricultural",
    body: "Farmhouses and agricultural land, with full title and land-use verification. Agricultural land has its own set of legal complications — Pavan Vatyani (Maharashtra) or Anup Vatyani (Gujarat) checks that yours is clear before you commit.",
  },
];

const howItWorks = [
  { icon: Search, title: "Share what you need", body: "Budget, location, type of property, and timeline — a shortlist of options that actually match is prepared by Pavan Vatyani (Maharashtra) or Anup Vatyani (Gujarat), instead of flooding you with irrelevant listings." },
  { icon: FileCheck, title: "Verified before you visit", body: "RERA registration, title deed, encumbrance certificate, and builder track record are checked upfront, so your time isn't wasted on properties with hidden problems." },
  { icon: Handshake, title: "Support through to closing", body: "From price negotiation to loan coordination (if needed) to final registration, support continues until the keys are actually in your hand." },
];

const checklist = [
  "RERA project registration number verified against state authority records",
  "Developer track record and past project delivery history checked",
  "Title deed and encumbrance certificate reviewed",
  "Bank-approved valuation obtained where financing is involved",
  "Zoning and land-use classification confirmed for the intended purpose",
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Real Estate Broking",
  name: "Real Estate Broking Services",
  description:
    "Rent, lease, buy and sell of residential, commercial, industrial and agricultural property in Pune, Ahmedabad, GIFT City and Dholera, from individually MahaRERA and GujRERA registered professionals.",
  provider: { "@type": "RealEstateAgent", name: "Assetzpro Services" },
  areaServed: [
    { "@type": "State", name: "Maharashtra" },
    { "@type": "State", name: "Gujarat" },
  ],
};

const navItems = [
  { id: "locations", label: "Locations" },
  { id: "rera-check", label: "RERA check" },
  { id: "property-types", label: "Property types" },
  { id: "lifecycle", label: "Lifecycle" },
  { id: "home-loan-check", label: "Home loan check" },
  { id: "how-it-works", label: "How it works" },
  { id: "desks", label: "Desks" },
];

const faqs = [
  {
    "q": "How do I check whether a project is RERA registered?",
    "a": "Search the project name, promoter or registration number on the state RERA website: MahaRERA for Maharashtra and GujRERA for Gujarat. Confirm the registration is valid, note the stated completion date, and match the registration number in the brochure with the one on the portal."
  },
  {
    "q": "Do real estate agents need RERA registration too?",
    "a": "Yes. Under the RERA Act, agents who help buyers and sellers in registered projects must register with the state authority and quote their registration number. Pavan Vatyani's MahaRERA number is A52100037796. Anup Vatyani's GujRERA number is AG/AHMEDABAD/AHMEDABAD CITY/A403336/200529."
  },
  {
    "q": "Which documents should be checked before buying a flat?",
    "a": "The RERA registration, the title deed, the encumbrance certificate, the approved plan and, for a ready flat, the occupancy certificate. The builder's record on past projects is worth checking too."
  },
  {
    "q": "Can a home loan be arranged along with the property?",
    "a": "Home loan options are compared by Pavan Vatyani on the Loans page. The eligibility calculator on this page gives an estimate only; the lender decides the final amount."
  },
  {
    "q": "Which areas of Pune and Ahmedabad are covered?",
    "a": "In Pune: Amanora, Magarpatta, Kharadi, Koregaon Park, Kalyani Nagar, Viman Nagar, Mundhwa, Hadapsar, Baner, Wakad and Hinjewadi, among others. In Ahmedabad: SG Highway, Bopal, Shela, Prahlad Nagar, Thaltej, Gota, Navrangpura and CG Road. GIFT City and Dholera enquiries are taken too. See the location pages for each area."
  },
  {
    "q": "Can I find a flat for rent in Pune or Ahmedabad through you?",
    "a": "Yes. Share the area, your monthly budget, the number of bedrooms and your move-in date. Matching flats are shortlisted and visits are arranged. Rent, deposit, maintenance and the notice period are agreed in writing before any payment."
  },
  {
    "q": "Do you handle shops and offices on lease?",
    "a": "Yes. Offices, shops and showrooms on lease in Pune (such as Kharadi, Viman Nagar and Koregaon Park) and in Ahmedabad (such as SG Highway, Prahlad Nagar and CG Road). The lease terms, including lock-in, rent increase and maintenance, are read with you before you sign."
  },
  {
    "q": "Is brokerage charged for rent, lease, buy and sell?",
    "a": "Enquiring is free. Any brokerage is agreed in writing before work starts."
  },
  {
    "q": "Do you take Dholera or GIFT City enquiries?",
    "a": "Yes, for enquiries. Ownership, approvals and the stage of each project are checked first, and no returns or price rises are promised. See the GIFT City and Dholera pages."
  }
];

const related = [
  {
    "href": "/blog/how-to-check-rera-registration-maharashtra-gujarat",
    "title": "How to check RERA registration",
    "note": "A step-by-step check on the MahaRERA and GujRERA portals."
  },
  {
    "href": "/blog/home-loan-documents-checklist",
    "title": "Home loan documents checklist",
    "note": "What lenders usually ask for, grouped by type."
  },
  {
    "href": "/real-estate/ahmedabad",
    "title": "Property in Ahmedabad",
    "note": "Rent, lease, buy and sell across SG Highway, Bopal, Prahlad Nagar and more."
  }
];

export default function RealEstate() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <JsonLd data={breadcrumbLd([{ name: "Real Estate Consultant in Pune & Ahmedabad", path: "/real-estate" }])} />
      <JsonLd data={webPageLd({ path: "/real-estate", name: "Real Estate Consultant in Pune & Ahmedabad", description: "Pavan Vatyani is a MahaRERA-registered real estate agent for Maharashtra and Anup Vatyani is a GujRERA-registered agent for Gujarat. Both quote their registration numbers, and every project is checked against the state RERA register before you visit. Home loan eligibility can be estimated on this page." })} />

      <section className="hero-re text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 font-body text-sm text-primary-foreground/85 mb-5">
              <BadgeCheck className="h-4 w-4 text-accent" /> Pavan Vatyani (MahaRERA) and Anup Vatyani (GujRERA), registered real estate agents
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.08] mb-6 max-w-4xl">Property for rent, lease, buy and sell in Pune and Ahmedabad</h1>
            <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 mb-5 max-w-3xl">Flats, shops and offices, checked before you visit</p>
            <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure mb-8">
              Residential, commercial, industrial and agricultural property in Pune, Ahmedabad, GIFT City and Dholera. Every listing is checked for RERA status and paperwork before it reaches you.
            </p>
            <RequirementBar areas={["Amanora", "Magarpatta", "Kharadi", "Koregaon Park", "Kalyani Nagar", "Viman Nagar", "Mundhwa", "Other area in Pune", "SG Highway", "Bopal", "Prahlad Nagar", "Other area in Ahmedabad", "GIFT City", "Dholera"]} defaultArea="Kharadi" />
          </Reveal>
        </div>
      </section>

      <ShortAnswer updated={formatDate(PAGE_DATES["/real-estate"])}>Assetzpro Services helps with flats, shops and offices to rent, lease, buy or sell in Pune, Ahmedabad, GIFT City and Dholera. Pavan Vatyani is a MahaRERA-registered real estate agent for Maharashtra and Anup Vatyani is a GujRERA-registered agent for Gujarat. Both quote their registration numbers, and every project is checked against the state RERA register before you visit. Meetings are by appointment.</ShortAnswer>

      <InPageNav items={navItems} />

      <section id="locations" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3 max-w-3xl">Where to rent, lease, buy or sell</h2>
          <p className="font-body text-foreground-muted measure mb-10">Pune is the main focus. Open a location to see its areas, what to check there, and to send a message about a specific area.</p>
          <ul className="grid md:grid-cols-2 gap-6">
            {PLACE_ORDER.map((slug) => {
              const pl = PLACES[slug];
              const names = pl.groups.flatMap((g) => g.areas.map((a) => a.name));
              return (
                <li key={slug} className="card-lift rounded-2xl border border-border bg-surface p-6 flex flex-col">
                  <h3 className="font-heading font-semibold text-2xl text-primary mb-2">
                    <Link href={`/real-estate/${slug}`} className="hover:text-secondary">{pl.name}: rent, lease, buy, sell</Link>
                  </h3>
                  <p className="font-body text-sm text-foreground-muted leading-relaxed mb-4">{pl.description}</p>
                  <ul className="flex flex-wrap gap-2 mb-5">
                    {names.slice(0, 8).map((n) => (
                      <li key={n} className="inline-flex items-center gap-1 rounded-full bg-background border border-border px-3 py-1 font-body text-xs text-foreground-muted">
                        <MapPin className="h-3 w-3 text-secondary" aria-hidden="true" /> {n}
                      </li>
                    ))}
                    {names.length > 8 && <li className="font-body text-xs text-foreground-muted self-center">and {names.length - 8} more</li>}
                  </ul>
                  <Link href={`/real-estate/${slug}`} className="mt-auto inline-flex min-h-11 items-center gap-1.5 font-body text-sm font-semibold text-secondary hover:text-primary">
                    See {pl.name} areas <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="rera-check" className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">Five checks before you pay a booking amount</h2>
            <p className="font-body text-foreground-muted measure mb-4">Tick them off as you go. These are the checks that protect you from unregistered projects, title disputes and delays.</p>
            <p className="font-body text-xs text-foreground-muted measure">Projects presented are restricted to registered entities under the respective state authorities.</p>
          </div>
          <ReraStepper />
        </div>
      </section>

      <section id="property-types" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-10">What kind of property are you after?</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {categories.map((c) => (
              <div key={c.title} className="flex gap-4">
                <c.icon className="h-8 w-8 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-semibold text-xl text-primary mb-2">{c.title}</h3>
                  <p className="font-body text-foreground-muted leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lifecycle" className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">Where a project sits in its lifecycle</h2>
          <p className="font-body text-foreground-muted measure">Every project moves through stages from launch to maturity. Knowing the stage helps you time a purchase, a rental plan or an exit.</p>
        </div>
        <PropertyLifecycleChart />
      </section>

      <section id="home-loan-check" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">Know your home budget first</h2>
          <p className="font-body text-foreground-muted measure">A quick estimate of the home loan you could qualify for, based on income and existing obligations. Lenders decide the final amount.</p>
        </div>
        <HomeLoanEligibilityCalculator />
      </section>

      <section id="how-it-works" className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-3">How buying, selling or leasing works</h2>
            <p className="font-body text-foreground-muted measure">From first brief to the day you get the keys.</p>
          </div>
          <ScrollTimeline items={howItWorks.map(({ title, body }) => ({ title, body }))} accent="#0F8A5F" />
        </div>
      </section>

      <section id="desks" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-8">Two desks, one standard</h2>
          <RegionToggle />
        </div>
      </section>

      {getPostBySlug("rera-explained-property-buyers-guide") && (
        <section className="py-10 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-body text-sm text-foreground-muted mb-1">Related reading</p>
            <Link href="/blog/rera-explained-property-buyers-guide" className="font-heading font-semibold text-xl text-primary hover:text-secondary transition-colors">
              {getPostBySlug("rera-explained-property-buyers-guide")!.title} →
            </Link>
          </div>
        </section>
      )}

      <FaqSection faqs={faqs} />

      <OfficialSources keys={["maharera", "gujrera", "rbi"]} />

      <RelatedGuides items={related} />

      <section className="py-16 md:py-20 hero-re text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Looking to buy, sell or lease?</h2>
            <p className="font-body text-primary-foreground/85 measure">Share what you need, and Pavan Vatyani (Maharashtra) or Anup Vatyani (Gujarat) will come back with checked options. Call or WhatsApp +91 90229 58266.</p>
          </div>
          <div><Button asChild variant="gold" size="lg"><Link href="/contact">Contact <ArrowRight className="ml-2 h-5 w-5" /></Link></Button></div>
        </div>
      </section>
    </>
  );
}
