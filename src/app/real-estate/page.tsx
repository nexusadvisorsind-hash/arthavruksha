import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RegionToggle } from "@/components/region-toggle";
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

const categories = [
  {
    icon: Home,
    title: "Residential",
    body: "Flats, villas, and plotted developments across Maharashtra and Gujarat — whether you're buying your first home, upgrading, or investing in a second property. We check builder credentials and RERA status before we ever show you a listing.",
  },
  {
    icon: Building2,
    title: "Commercial",
    body: "Office spaces, retail shops, and mixed-use commercial units for businesses looking to set up, expand, or relocate. We help you evaluate footfall, connectivity, and lease terms so the space actually works for your business.",
  },
  {
    icon: Factory,
    title: "Industrial & Logistics",
    body: "Warehouses, industrial sheds, and manufacturing plots — especially useful if you're setting up operations in Gujarat's industrial corridors. We understand zoning rules and utility access requirements for these properties.",
  },
  {
    icon: Wheat,
    title: "Agricultural",
    body: "Farmhouses and agricultural land, with full title and land-use verification. Agricultural land has its own set of legal complications — we make sure yours is clear before you commit.",
  },
];

const howItWorks = [
  { icon: Search, title: "Tell us what you need", body: "Budget, location, type of property, and timeline — we shortlist options that actually match, instead of flooding you with irrelevant listings." },
  { icon: FileCheck, title: "We verify before you visit", body: "RERA registration, title deed, encumbrance certificate, and builder track record are checked upfront, so your time isn't wasted on properties with hidden problems." },
  { icon: Handshake, title: "We support the deal to closing", body: "From price negotiation to loan coordination (if needed) to final registration, we stay involved until the keys are actually in your hand." },
];

const checklist = [
  "RERA project registration number verified against state authority records",
  "Developer track record and past project delivery history checked",
  "Title deed and encumbrance certificate reviewed",
  "Bank-approved valuation obtained where financing is involved",
  "Zoning and land-use classification confirmed for the intended purpose",
];

export default function RealEstate() {
  return (
    <>
      <section className="hero-navy text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 mb-6">
            <BadgeCheck className="h-4 w-4 text-accent" />
            <span className="font-body text-xs md:text-sm font-semibold tracking-wide">
              MahaRERA &amp; GujRERA Certified Intermediary
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Find Property You Can Trust</h1>
          <p className="font-body text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Buying, selling, or leasing residential, commercial, industrial or agricultural
            property in Maharashtra and Gujarat — with every listing checked before it reaches you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RegionToggle />
        </div>
      </section>

      {/* How it works */}
      <section className="pb-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-14 text-center">
            How We Help You Buy, Sell or Lease
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((h, i) => (
              <div key={h.title} className="relative card-lift bg-surface border border-border rounded-2xl p-7">
                <span className="absolute -top-4 -left-2 w-9 h-9 rounded-full bg-green text-green-foreground font-heading font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <h.icon className="h-8 w-8 text-secondary mb-4 mt-2" />
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">{h.title}</h3>
                <p className="font-body text-sm text-foreground-muted leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4 text-center">
            Property Categories
          </h2>
          <p className="font-body text-foreground-muted text-center max-w-2xl mx-auto mb-14">
            Whatever kind of property you&apos;re after, we can help.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c) => (
              <div key={c.title} className="card-lift bg-surface border border-border rounded-2xl p-7 border-t-4 border-t-secondary">
                <c.icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">{c.title}</h3>
                <p className="font-body text-sm text-foreground-muted leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4 text-center">
            Our 5-Point Verification Checklist
          </h2>
          <p className="font-body text-foreground-muted text-center mb-10">
            Before any property reaches a client, it has to clear every one of these checks.
            This is what protects you from title disputes, unregistered projects, and builder
            delays down the line.
          </p>
          <ul className="space-y-3">
            {checklist.map((c) => (
              <li key={c} className="flex gap-3 bg-background border border-border rounded-xl p-4">
                <CheckCircle2 className="h-5 w-5 text-green shrink-0 mt-0.5" />
                <span className="font-body text-sm text-foreground">{c}</span>
              </li>
            ))}
          </ul>
          <p className="font-body text-xs text-foreground-muted text-center mt-6">
            Projects presented are restricted to registered entities under respective state authorities.
          </p>
        </div>
      </section>

      <section className="py-20 hero-navy text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Looking to Buy, Sell or Lease?
          </h2>
          <p className="font-body text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Tell us what you&apos;re looking for and we&apos;ll get back to you with verified options.
          </p>
          <Button asChild variant="gold" size="lg" className="mt-4">
            <Link href="/contact">Contact Our Team <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
