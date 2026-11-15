import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export const metadata = { title: "Page not found", robots: { index: false, follow: true } };

const links = [
  { href: "/mutual-funds", label: "Mutual funds" },
  { href: "/real-estate", label: "Real estate" },
  { href: "/insurance", label: "Insurance" },
  { href: "/loans", label: "Loans" },
  { href: "/calculators", label: "Calculators" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4 max-w-2xl">This page is not here</h1>
        <p className="font-body text-lg text-foreground-muted leading-relaxed measure mb-8">
          The link may be old or mistyped. Pick a section below, or call or message on WhatsApp and the right person will help.
        </p>
        <ul className="flex flex-wrap gap-3 mb-10">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="inline-flex items-center rounded-full border border-border bg-white px-5 py-2.5 font-body text-sm font-semibold text-primary hover:border-green hover:text-green">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild variant="gold" size="lg"><Link href="/">Go to the home page</Link></Button>
          <Button asChild variant="outline" size="lg"><a href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a></Button>
        </div>
      </div>
    </section>
  );
}
