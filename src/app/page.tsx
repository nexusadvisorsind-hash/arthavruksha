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
  Users,
  Sparkles,
  Phone,
} from "lucide-react";

const dimensions = [
  {
    icon: TrendingUp,
    dimension: "Mutual Funds",
    role: "Grow your money steadily",
    alignment: "AMFI-Registered Distributor",
    mandate:
      "We help you start and manage SIPs and lump-sum investments in mutual fund schemes that match your goals — whether that's your child's education, a house down payment, or retirement. No hidden charges, no pushy sales — just funds that fit your plan.",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Building2,
    dimension: "Real Estate",
    role: "Buy, sell or lease with confidence",
    alignment: "MahaRERA & GujRERA Certified",
    mandate:
      "Looking for a flat, an office, a shop or farmland in Maharashtra or Gujarat? We check the title documents, RERA registration and builder history before we show you a property, so you don't end up with unpleasant surprises later.",
    iconBg: "bg-green-soft",
    iconColor: "text-green",
  },
  {
    icon: ShieldCheck,
    dimension: "Insurance",
    role: "Protect your family and business",
    alignment: "Authorized Corporate Agent",
    mandate:
      "Term life, health, motor or business insurance — we compare policies from multiple insurers and explain the fine print in plain language, so you know exactly what's covered and what isn't before you sign.",
    iconBg: "bg-accent/10",
    iconColor: "text-accent-foreground",
  },
  {
    icon: Banknote,
    dimension: "Loans",
    role: "Access credit at the best terms",
    alignment: "Direct Selling Partner",
    mandate:
      "Home loans, loan against property, business working capital, personal or education loans — we connect you with partner banks and NBFCs, compare interest rates for you, and help you get the paperwork right the first time.",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
];

const principles = [
  {
    icon: Scale,
    title: "We follow the rules, always",
    body: "Financial rules exist to protect you, not to slow us down. We work strictly within SEBI, AMFI, RERA and IRDAI guidelines. We never use misleading titles, and we never push a product that isn't right for you just to earn a commission.",
  },
  {
    icon: Clock,
    title: "We think long-term, not quarter-to-quarter",
    body: "We're not chasing quick wins. Our advice favours steady, disciplined choices that hold up over 10, 15, 20 years — the kind of decisions that actually build lasting wealth for a family or a growing business.",
  },
  {
    icon: Eye,
    title: "We show you everything, upfront",
    body: "Every commission we earn, every risk in a scheme, every clause in a policy — we lay it out clearly before you decide. You should never have to dig through fine print to understand what you're signing up for.",
  },
  {
    icon: Link2,
    title: "Your finances are connected, so we treat them that way",
    body: "A better loan rate frees up money to invest. An uninsured risk can wipe out years of savings. Because we handle funds, property, insurance and loans under one roof, we can see the full picture — not just one product at a time.",
  },
];

const governanceColumns = [
  {
    icon: ShieldAlert,
    title: "Fully Licensed & Registered",
    items: ["AMFI ARN publicly verifiable", "No unlicensed advisory ever given", "Clear disclaimers on every product"],
  },
  {
    icon: FileSearch,
    title: "We Check Before We Recommend",
    items: ["Title & RERA verification on every property", "Builder track record checked", "Bank-approved valuations used"],
  },
  {
    icon: Lock,
    title: "Your Data Stays Private",
    items: ["DPDP Act 2023 compliant", "Strong encryption on client records", "We never sell or share your data"],
  },
];

const stats = [
  { icon: Users, value: "4", label: "Services under one roof" },
  { icon: MapPin, value: "2", label: "States: Maharashtra & Gujarat" },
  { icon: BadgeCheck, value: "100%", label: "Licensed & regulator-compliant" },
  { icon: Sparkles, value: "1", label: "Point of contact for everything" },
];

export default function Home() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-gradient-to-b from-primary to-secondary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/15 px-4 py-1.5 mb-8">
            <BadgeCheck className="h-4 w-4 text-accent" />
            <span className="font-body text-xs md:text-sm font-semibold tracking-wide">
              AMFI-Registered Mutual Fund Distributor | MahaRERA &amp; GujRERA Certified
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight mb-8">
            One Trusted Partner for Your Money,
            <br />
            Your Property, and Your Family&rsquo;s Future
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Artha Vruksha Services brings mutual funds, real estate, insurance and loans together
            under one team, so you don&rsquo;t have to run between four different people to manage
            your finances. We&rsquo;re based in Maharashtra and Gujarat, fully licensed, and we
            explain everything in plain language — no confusing jargon, no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button asChild size="lg" variant="gold">
              <Link href="/contact">Talk to Our Team <Phone className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/about-us">Learn About Us</Link>
            </Button>
          </div>
          <p className="font-body text-xs text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Mutual Fund investments are subject to market risks. Please read all scheme-related
            documents carefully before investing.
          </p>
        </div>
      </section>

      {/* Stat strip */}
      <section className="bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-green-soft flex items-center justify-center shrink-0">
                <s.icon className="h-5 w-5 text-green" />
              </div>
              <div>
                <p className="font-heading font-bold text-xl text-primary leading-none">{s.value}</p>
                <p className="font-body text-xs text-foreground-muted mt-1">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 — The Problem We Solve */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-8 text-center">
            Why We Started Artha Vruksha
          </h2>
          <div className="font-body text-lg text-foreground-muted leading-relaxed space-y-5">
            <p>
              Most people end up managing their money in pieces. A property agent finds you a
              flat but has no idea about your loan eligibility. A mutual fund agent sells you a
              scheme without knowing you&apos;re already stretched on EMIs. An insurance agent sells a
              policy that doesn&apos;t actually match the risks in your life. Nobody is looking at the
              whole picture.
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="text-green mt-1.5 shrink-0 font-bold">✓</span>
                <span>Your property broker doesn&apos;t know what you can actually afford to borrow.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green mt-1.5 shrink-0 font-bold">✓</span>
                <span>Your investment advisor doesn&apos;t know about the loan EMIs eating into your monthly budget.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green mt-1.5 shrink-0 font-bold">✓</span>
                <span>Your insurance agent doesn&apos;t know what assets you actually need to protect.</span>
              </li>
            </ul>
            <p>
              That gap between specialists costs people money and peace of mind — missed
              opportunities, avoidable taxes, and risks nobody flagged in time.
            </p>
            <p>
              Artha Vruksha Services was built to close that gap. We&rsquo;re one team that
              understands mutual funds, property, insurance and lending together — so the advice
              you get on one actually accounts for the other three.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Four Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4 text-center">
            Four Services, One Team
          </h2>
          <p className="font-body text-foreground-muted text-center max-w-2xl mx-auto mb-14">
            Whatever stage of life or business you&apos;re at, here&apos;s how we can help.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dimensions.map((d) => (
              <div key={d.dimension} className="bg-surface border border-border rounded-2xl p-7 flex flex-col hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${d.iconBg} flex items-center justify-center mb-5`}>
                  <d.icon className={`h-6 w-6 ${d.iconColor}`} />
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

      {/* Section 4 — What We Stand For */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-center">
            What We Stand For
          </h2>
          <p className="font-body text-primary-foreground/80 text-center max-w-2xl mx-auto mb-14">
            Four simple commitments that guide every conversation we have with you.
          </p>
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

      {/* Section 5 — Where We Work */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4 text-center">
            Where We Work
          </h2>
          <div className="flex justify-center mb-10">
            <MapPin className="h-8 w-8 text-green" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-background border border-border rounded-2xl p-7 border-t-4 border-t-green">
              <h3 className="font-heading font-semibold text-lg text-primary mb-4">Gujarat</h3>
              <ul className="space-y-2 font-body text-sm text-foreground-muted">
                <li className="flex gap-2"><span className="text-green font-bold">•</span> GujRERA-certified property broking</li>
                <li className="flex gap-2"><span className="text-green font-bold">•</span> Industrial &amp; logistics property specialists</li>
                <li className="flex gap-2"><span className="text-green font-bold">•</span> Local knowledge of Ahmedabad, Surat &amp; beyond</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded-2xl p-7 border-t-4 border-t-secondary">
              <h3 className="font-heading font-semibold text-lg text-primary mb-4">Maharashtra</h3>
              <ul className="space-y-2 font-body text-sm text-foreground-muted">
                <li className="flex gap-2"><span className="text-secondary font-bold">•</span> MahaRERA-certified property broking</li>
                <li className="flex gap-2"><span className="text-secondary font-bold">•</span> Residential &amp; commercial specialists</li>
                <li className="flex gap-2"><span className="text-secondary font-bold">•</span> Local knowledge of Pune, Mumbai &amp; beyond</li>
              </ul>
            </div>
          </div>
          <p className="font-body text-foreground-muted leading-relaxed text-center max-w-3xl mx-auto">
            We keep dedicated desks in both states because good financial and property advice
            depends on knowing the local market — the right zoning laws, the trustworthy builders,
            and the lenders who actually approve loans quickly in your area.
          </p>
        </div>
      </section>

      {/* Section 6 — Trust & Accountability */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4 text-center">
            Why You Can Trust Us
          </h2>
          <p className="font-body text-foreground-muted text-center max-w-2xl mx-auto mb-14">
            Trust isn&apos;t a tagline for us — here&apos;s exactly how we earn it.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {governanceColumns.map((g) => (
              <div key={g.title} className="bg-surface border border-border rounded-2xl p-7">
                <g.icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-heading font-semibold text-lg text-primary mb-4">{g.title}</h3>
                <ul className="space-y-2 font-body text-sm text-foreground-muted">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-green font-bold">✓</span> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-green-soft border border-green/20 rounded-xl p-5">
              <p className="font-body text-sm text-foreground leading-relaxed">
                <strong className="text-primary">No conflict of interest:</strong> We tell you
                plainly what we are — licensed distributors and certified brokers, not
                fee-charging investment advisers. That clarity means you always know how we earn,
                and it keeps our advice honest.
              </p>
            </div>
            <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-5">
              <p className="font-body text-sm text-foreground leading-relaxed">
                <strong className="text-primary">Your data stays private:</strong> We follow the
                DPDP Act 2023, use strong data protection, and only collect what we actually need
                to serve you. Your financial details and property interests are never sold or
                shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — CTA */}
      <section className="py-20 bg-gradient-to-b from-primary to-secondary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Let&rsquo;s Talk About Your Goals</h2>
          <p className="font-body text-lg text-primary-foreground/90 leading-relaxed mb-10">
            Whether you&apos;re planning your first SIP, buying a home, protecting your family with
            insurance, or looking for the right loan — our team is happy to have a no-pressure
            conversation and point you in the right direction.
          </p>
          <ol className="text-left max-w-xl mx-auto space-y-4 mb-10">
            {[
              "Reach out to our team — call, WhatsApp, or fill the contact form.",
              "Tell us what you're trying to achieve, across any of our four services.",
              "Get clear, honest options — with all the fees and risks explained upfront.",
            ].map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center font-heading font-bold text-accent text-sm">
                  {i + 1}
                </span>
                <span className="font-body text-primary-foreground/90 pt-1">{s}</span>
              </li>
            ))}
          </ol>
          <Button asChild variant="gold" size="lg" className="mb-6">
            <Link href="/contact">Contact Us Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <p className="font-body text-sm text-primary-foreground/70">
            leadership@arthavruksha.com &nbsp;|&nbsp; Offices in Pune &amp; Ahmedabad
          </p>
        </div>
      </section>
    </>
  );
}
