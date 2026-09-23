import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Building2,
  ShieldCheck,
  Banknote,
  ShieldAlert,
  Scale,
  Clock,
  Eye,
  Link2,
  MapPin,
  Lock,
  FileSearch,
  BadgeCheck,
} from "lucide-react";

const dimensions = [
  {
    icon: TrendingUp,
    dimension: "Market Capital",
    role: "Liquid Asset Growth",
    alignment: "AMFI-Registered Distribution",
    mandate: "Systematic deployment into regulated mutual fund schemes mapped to long-term objectives.",
  },
  {
    icon: Building2,
    dimension: "Physical Assets",
    role: "Tangible Foundation",
    alignment: "MahaRERA & GujRERA Intermediary",
    mandate: "Due-diligence-backed broking for residential, commercial, and industrial property transactions.",
  },
  {
    icon: ShieldCheck,
    dimension: "Risk Mitigation",
    role: "Balance Sheet Defense",
    alignment: "Authorized Corporate Agent / POSP",
    mandate: "Underwriting life and general perils to insulate family and enterprise balance sheets.",
  },
  {
    icon: Banknote,
    dimension: "Liquidity & Credit",
    role: "Capital Acceleration",
    alignment: "Direct Selling Partner (DSA)",
    mandate: "Structuring optimal debt through premier banking institutions for expansion and acquisitions.",
  },
];

const principles = [
  {
    icon: Scale,
    title: "Compliance as a Moral Baseline",
    body: "Regulatory frameworks are not administrative hurdles; they are consumer safeguards. We operate with strict adherence to SEBI, AMFI, RERA, and IRDAI directives. We maintain zero tolerance for regulatory ambiguity, misleading designations, or unvetted transactions.",
  },
  {
    icon: Clock,
    title: "Generational Time Horizons",
    body: "A banyan tree does not measure its lifespan in quarters. We discourage speculative, short-term maneuvers in favor of disciplined, enduring capital structures designed to withstand market cycles.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    body: "Every commission structure, project disclosure, and scheme risk metric is laid bare. Our clients make decisions backed by verifiable data, title certifications, and statutory filings.",
  },
  {
    icon: Link2,
    title: "Cross-Disciplinary Harmony",
    body: "A rupee saved in credit costs strengthens investment capability; an unhedged business risk jeopardizes physical real estate. Our ecosystem ensures every corporate decision reinforces the whole.",
  },
];

const governanceColumns = [
  {
    icon: ShieldAlert,
    title: "Statutory Compliance",
    items: ["Transparent AMFI ARN Identity", "Zero Unlicensed Advisory", "Clear Statutory Disclaimers"],
  },
  {
    icon: FileSearch,
    title: "Independent Due Diligence",
    items: ["Strict Title & RERA Audits", "Developer Track Record Checks", "Bank-Approved Valuations"],
  },
  {
    icon: Lock,
    title: "Data Privacy & Security",
    items: ["DPDP Act (2023) Compliant", "AES-256 Client Confidentiality", "Audited Lead Workflows"],
  },
];

export default function Home() {
  return (
    <>
      {/* Section 1 — Hero Fold: The Sovereign Institution */}
      <section className="bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 mb-8">
            <BadgeCheck className="h-4 w-4 text-accent" />
            <span className="font-body text-xs md:text-sm font-semibold tracking-wide text-primary">
              AMFI-Registered Mutual Fund Distributor | MahaRERA &amp; GujRERA Certified Intermediary
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight text-primary mb-8">
            Deep Roots. Unwavering Integrity.
            <br />
            Generational Shelter.
          </h1>
          <p className="font-body text-lg md:text-xl text-foreground-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            Artha Vruksha Services is a multi-disciplinary capital and asset stewardship enterprise
            operating across Maharashtra and Gujarat. We integrate capital distribution, property
            acquisitions, and institutional risk facilitation into a singular, transparent framework
            governed by statutory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button asChild size="lg">
              <Link href="/contact">Connect with Our Leadership Desk</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Link href="/about-us">Explore Our Corporate Governance</Link>
            </Button>
          </div>
          <p className="font-body text-xs text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
          </p>
        </div>
      </section>

      {/* Section 2 — The Founding Thesis */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-8 text-center">
            Eliminating the Friction of Fragmented Capital
          </h2>
          <div className="font-body text-lg text-foreground-muted leading-relaxed space-y-5">
            <p>For decades, businesses and families have navigated their balance sheets in silos.</p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="text-accent mt-1.5 shrink-0">◆</span>
                <span>The property consultant handles land and brick without understanding market liquidity.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5 shrink-0">◆</span>
                <span>The mutual fund distributor processes investments blind to debt obligations.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5 shrink-0">◆</span>
                <span>The insurance intermediary issues coverage disconnected from overall asset exposure.</span>
              </li>
            </ul>
            <p>
              This fragmentation creates structural vulnerabilities. When capital disciplines operate
              in isolation, opportunities are missed, tax frictions compound, and risks go unhedged.
            </p>
            <p>
              Artha Vruksha Services was established to dismantle these silos. We serve as a central
              corporate anchor — a unified entity where transaction execution, property brokerage,
              risk underwriting, and credit facilitation operate under cohesive governance and strict
              regulatory accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Four Dimensions of Enterprise Capital */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-14 text-center">
            An Integrated Ecosystem Across the Capital Lifecycle
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dimensions.map((d) => (
              <div key={d.dimension} className="bg-surface border border-border rounded-2xl p-7 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <d.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary mb-1">{d.dimension}</h3>
                <p className="font-body text-sm font-semibold text-secondary mb-3">{d.role}</p>
                <p className="font-body text-xs uppercase tracking-wide text-accent font-semibold mb-3">{d.alignment}</p>
                <p className="font-body text-sm text-foreground-muted leading-relaxed flex-1">{d.mandate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Corporate Ideology & Guiding Principles */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-14 text-center">
            The Pillars of Institutional Stewardship
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((p, i) => (
              <div key={p.title} className="flex gap-5 bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-7">
                <div className="shrink-0 w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center font-heading font-bold text-accent">
                  {i + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <p.icon className="h-5 w-5 text-accent" />
                    <h3 className="font-heading font-semibold text-lg">{p.title}</h3>
                  </div>
                  <p className="font-body text-sm text-primary-foreground/80 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Geographical Footprint */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4 text-center">
            Deep Roots Across Western India&rsquo;s Growth Corridors
          </h2>
          <div className="flex justify-center mb-10">
            <MapPin className="h-8 w-8 text-secondary" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-background border border-border rounded-2xl p-7">
              <h3 className="font-heading font-semibold text-lg text-primary mb-4">Gujarat Desk</h3>
              <ul className="space-y-2 font-body text-sm text-foreground-muted">
                <li className="flex gap-2"><span className="text-accent">•</span> GujRERA Certified Broker</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Industrial &amp; Logistics</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Commercial Hub Integration</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded-2xl p-7">
              <h3 className="font-heading font-semibold text-lg text-primary mb-4">Maharashtra Desk</h3>
              <ul className="space-y-2 font-body text-sm text-foreground-muted">
                <li className="flex gap-2"><span className="text-accent">•</span> MahaRERA Certified Broker</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Commercial &amp; Residential</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Corporate Capital Hub</li>
              </ul>
            </div>
          </div>
          <p className="font-body text-foreground-muted leading-relaxed text-center max-w-3xl mx-auto">
            Artha Vruksha Services operates dedicated infrastructure in Maharashtra and Gujarat — the
            industrial and financial engines of India. Our regional desks bring boots-on-the-ground
            intelligence to property title verifications, local industrial zoning laws, and
            state-specific business credit frameworks. Whether facilitating a logistics hub in Gujarat
            or structuring liquid capital reserves in Maharashtra, our geographic presence ensures
            local insight matched with institutional rigor.
          </p>
        </div>
      </section>

      {/* Section 6 — Leadership Governance & Trust Matrix */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-14 text-center">
            Trust Engineered Through Accountability
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {governanceColumns.map((g) => (
              <div key={g.title} className="bg-surface border border-border rounded-2xl p-7">
                <g.icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-heading font-semibold text-lg text-primary mb-4">{g.title}</h3>
                <ul className="space-y-2 font-body text-sm text-foreground-muted">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-accent">•</span> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-5">
              <p className="font-body text-sm text-foreground leading-relaxed">
                <strong className="text-primary">No Conflict of Roles:</strong> We declare our status
                openly. We are licensed distributors and certified transaction brokers, not
                fee-charging investment advisers. This clarity protects our clients and ensures pure
                transactional integrity.
              </p>
            </div>
            <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-5">
              <p className="font-body text-sm text-foreground leading-relaxed">
                <strong className="text-primary">Data Integrity (DPDP Act 2023):</strong> Client
                confidentiality is maintained with enterprise-grade AES-256 data protection and
                consent-driven workflows. Your holdings and property interests remain strictly
                private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Executive CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Build on Solid Ground</h2>
          <p className="font-body text-lg text-primary-foreground/85 leading-relaxed mb-10">
            Whether you are an enterprise consolidating operating facilities, a family securing real
            estate holdings, or an investor building disciplined market capital, Artha Vruksha
            provides the rooted stability your assets demand.
          </p>
          <ol className="text-left max-w-xl mx-auto space-y-4 mb-10">
            {[
              "Request an introductory briefing with our executive desk.",
              "Define your multi-asset operational goals across our service verticals.",
              "Deploy capital with complete regulatory assurance and institutional oversight.",
            ].map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center font-heading font-bold text-accent text-sm">
                  {i + 1}
                </span>
                <span className="font-body text-primary-foreground/85 pt-1">{s}</span>
              </li>
            ))}
          </ol>
          <Button asChild variant="gold" size="lg" className="mb-6">
            <Link href="/contact">Initiate Corporate Dialogue <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <p className="font-body text-sm text-primary-foreground/70">
            leadership@arthavruksha.com &nbsp;|&nbsp; Dedicated Operational Desks: Pune / Ahmedabad
          </p>
        </div>
      </section>
    </>
  );
}
