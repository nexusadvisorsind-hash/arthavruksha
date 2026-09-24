import type { Metadata } from "next";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const siteUrl = "https://arthavruksha.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Artha Vruksha Services — Mutual Funds, Real Estate, Insurance & Loans in Maharashtra & Gujarat",
    template: "%s | Artha Vruksha Services",
  },
  description:
    "AMFI-registered Mutual Fund Distributor (ARN 106715), MahaRERA & GujRERA certified Real Estate broker, Insurance facilitation and Loan/DSA services across Pune, Ahmedabad, Maharashtra & Gujarat. SIP, home loan, insurance and loan eligibility calculators.",
  keywords: [
    "mutual fund distributor Pune",
    "mutual fund distributor Ahmedabad",
    "AMFI registered mutual fund distributor",
    "best SIP plans India",
    "SIP calculator online",
    "real estate broker Maharashtra",
    "real estate broker Gujarat",
    "MahaRERA certified property broker",
    "GujRERA certified property broker",
    "RERA registered real estate agent",
    "term insurance plans India",
    "life insurance calculator",
    "health insurance advisor",
    "home loan eligibility calculator",
    "loan against property",
    "personal loan DSA",
    "financial services Pune Ahmedabad",
    "investment advisor Gujarat",
    "GIFT City IFSC mutual funds",
    "Anup Vatyani AMFI",
    "Pavan Vatyani real estate",
    "Artha Vruksha Services",
  ],
  authors: [{ name: "Artha Vruksha Services" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Artha Vruksha Services",
    title: "Artha Vruksha Services — Mutual Funds, Real Estate, Insurance & Loans",
    description:
      "One licensed team for Mutual Funds, Real Estate, Insurance and Loans across Maharashtra & Gujarat — AMFI, MahaRERA & GujRERA registered.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artha Vruksha Services — Mutual Funds, Real Estate, Insurance & Loans",
    description:
      "One licensed team for Mutual Funds, Real Estate, Insurance and Loans across Maharashtra & Gujarat.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Artha Vruksha Services",
  description:
    "AMFI-registered Mutual Fund Distribution, MahaRERA & GujRERA certified Real Estate Broking, Insurance facilitation and Loan/DSA services across Maharashtra & Gujarat, India.",
  url: siteUrl,
  areaServed: [
    { "@type": "State", name: "Maharashtra" },
    { "@type": "State", name: "Gujarat" },
  ],
  address: [
    { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
    { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressRegion: "Gujarat", addressCountry: "IN" },
  ],
  email: "leadership@arthavruksha.com",
  founder: [
    { "@type": "Person", name: "Anup Vatyani", jobTitle: "Founder — Mutual Funds & Regulatory Affairs" },
    { "@type": "Person", name: "Pavan Vatyani", jobTitle: "Founder — Real Estate & Digital Strategy" },
  ],
  knowsAbout: [
    "Mutual Funds",
    "SIP Investment",
    "Real Estate Broking",
    "RERA Compliance",
    "Life Insurance",
    "Health Insurance",
    "Home Loans",
    "Loan Against Property",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
