import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-10">
          <div className="font-heading font-bold text-xl mb-1">
            ARTHA VRUKSHA SERVICES <span className="text-primary-foreground/60 font-normal">|</span> AMFI-Registered Mutual Fund Distributor
          </div>
          <p className="text-xs font-body text-primary-foreground/70">
            Operating Territories: Maharashtra &amp; Gujarat, India
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="font-heading font-semibold mb-3">Verticals</div>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/75">
              <li><Link href="/mutual-funds" className="hover:text-accent">Mutual Funds</Link></li>
              <li><Link href="/real-estate" className="hover:text-accent">Real Estate Broking</Link></li>
              <li><Link href="/insurance" className="hover:text-accent">Insurance Solutions</Link></li>
              <li><Link href="/loans" className="hover:text-accent">Loans &amp; Capital</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-heading font-semibold mb-3">Company</div>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/75">
              <li><Link href="/about-us" className="hover:text-accent">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-accent">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-accent">Terms of Use</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="font-heading font-semibold mb-3">Direct Channels</div>
            <p className="font-body text-sm text-primary-foreground/75">info@arthavruksha.in</p>
            <p className="font-body text-sm text-primary-foreground/75">
              Pavan Vatyani (Real Estate &amp; Digital):{" "}
              <a href="tel:+919022958266" className="hover:text-accent">+91 90229 58266</a>
              {" "}·{" "}
              <a href="mailto:pavan@arthavruksha.in" className="hover:text-accent">pavan@arthavruksha.in</a>
            </p>
            <p className="font-body text-sm text-primary-foreground/75">
              Anup Vatyani (Mutual Funds &amp; Regulatory):{" "}
              <a href="tel:+919537433533" className="hover:text-accent">+91 95374 33533</a>
              {" "}·{" "}
              <a href="mailto:anup@arthavruksha.in" className="hover:text-accent">anup@arthavruksha.in</a>
            </p>
            <p className="font-body text-sm text-primary-foreground/75 mt-2">
              Pune: Amanora Park Town, Pune, Maharashtra 411928
            </p>
            <p className="font-body text-sm text-primary-foreground/75">
              Ahmedabad: 4 Tarang Hills Society, Chandlodia, Ahmedabad, Gujarat
            </p>
            <p className="font-body text-sm text-primary-foreground/75 mt-2">Dedicated Operational Desks: Pune / Ahmedabad</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 pt-8 space-y-5">
          <div className="font-heading font-semibold text-sm tracking-wide text-primary-foreground/90">
            REGULATORY DISCLOSURES &amp; REGISTRATIONS
          </div>

          <div className="space-y-1">
            <p className="font-body text-xs text-primary-foreground/80">
              <strong className="text-primary-foreground">Mutual Funds:</strong> AMFI Registration Number (ARN): 106715 | AMFI-Registered Mutual Fund Distributor (Anup Vatyani).
            </p>
            <p className="font-body text-xs text-primary-foreground/70">
              Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-body text-xs text-primary-foreground/80">
              <strong className="text-primary-foreground">Real Estate:</strong> MahaRERA Registration No: A52100037796 (Pavan Vatyani) | Gujarat RERA Registration No: AG/AHMEDABAD/AHMEDABAD CITY/A403336/200529 (Anup Vatyani).
            </p>
            <p className="font-body text-xs text-primary-foreground/70">
              Projects presented are restricted to registered entities under respective state authorities.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-body text-xs text-primary-foreground/80">
              <strong className="text-primary-foreground">Insurance &amp; Credit:</strong> Authorized Corporate Agent/POSP &amp; Banking Direct Selling Agent (DSA).
            </p>
            <p className="font-body text-xs text-primary-foreground/70">
              Insurance is the subject matter of solicitation.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-body text-xs text-primary-foreground/80">
              <strong className="text-primary-foreground">Legal Status:</strong> Artha Vruksha Services acts as an intermediary/distributor and does not render
              fee-based investment advisory or portfolio management services under SEBI (IA) Regulations.
            </p>
          </div>

          <p className="font-body text-xs text-primary-foreground/50 pt-4 border-t border-primary-foreground/10">
            © {new Date().getFullYear()} Artha Vruksha Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
