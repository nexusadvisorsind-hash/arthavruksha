import Link from "next/link";

const navLinks = [
  { href: "/mutual-funds", label: "Mutual Funds" },
  { href: "/real-estate", label: "Real Estate" },
  { href: "/insurance", label: "Insurance" },
  { href: "/loans", label: "Loans" },
  { href: "/about-us", label: "About Us" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-heading font-bold text-xl text-primary">Artha Vruksha</span>
            <span className="text-[11px] sm:text-xs font-body font-semibold text-foreground-muted tracking-wide">
              AMFI-Registered Mutual Fund Distributor
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors font-body"
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </header>
  );
}
