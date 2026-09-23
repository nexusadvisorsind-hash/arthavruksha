import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RegionToggle } from "@/components/region-toggle";
import { ArrowRight, BadgeCheck, Home, Building2, Factory, Wheat, CheckCircle2 } from "lucide-react";

const categories = [
  { icon: Home, title: "Residential", body: "Apartments, villas and plotted developments for end-use or investment." },
  { icon: Building2, title: "Commercial", body: "Office spaces, retail units and mixed-use commercial developments." },
  { icon: Factory, title: "Industrial & Logistics", body: "Warehouses, sheds and industrial plots for manufacturing and logistics operations." },
  { icon: Wheat, title: "Agricultural", body: "Farmhouses and agricultural land parcels, with title and zoning due diligence." },
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
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 mb-6">
            <BadgeCheck className="h-4 w-4 text-accent" />
            <span className="font-body text-xs md:text-sm font-semibold tracking-wide">
              MahaRERA &amp; GujRERA Certified Intermediary
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Real Estate Broking</h1>
          <p className="font-body text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Due-diligence-backed broking for residential, commercial, industrial and agricultural
            property across Maharashtra &amp; Gujarat.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RegionToggle />
        </div>
      </section>

      <section className="pb-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-14 text-center">
            Property Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c) => (
              <div key={c.title} className="bg-surface border border-border rounded-2xl p-7">
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
            RERA Compliance Checklist
          </h2>
          <p className="font-body text-foreground-muted text-center mb-10">
            Every listed project is screened against this checklist before it reaches a client.
          </p>
          <ul className="space-y-3">
            {checklist.map((c) => (
              <li key={c} className="flex gap-3 bg-background border border-border rounded-xl p-4">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="font-body text-sm text-foreground">{c}</span>
              </li>
            ))}
          </ul>
          <p className="font-body text-xs text-foreground-muted text-center mt-6">
            Projects presented are restricted to registered entities under respective state authorities.
          </p>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Looking to Buy, Sell or Lease?
          </h2>
          <Button asChild variant="gold" size="lg" className="mt-4">
            <Link href="/contact">Connect with Our Leadership Desk <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
