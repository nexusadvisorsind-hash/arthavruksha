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
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { ConsentBanner } from "@/components/consent-banner";
import { JsonLd } from "@/components/seo/json-ld";

// Brand: Assetzpro Services. The GitHub repo and Vercel project keep their old names; only the domain and on-page brand changed.
// Production domain (custom domain connected in Vercel).
const siteUrl = "https://assetzpro.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Assetzpro Services — Mutual Funds, Real Estate, Insurance & Loans in Maharashtra & Gujarat",
    template: "%s | Assetzpro Services",
  },
  description:
    "Mutual Funds, Real Estate, Insurance and Loan/DSA services across Pune, Ahmedabad, Maharashtra & Gujarat — through individually AMFI, MahaRERA & GujRERA registered professionals. SIP, home loan, insurance and loan eligibility calculators.",
  keywords: [
    "mutual fund distributor Pune",
    "mutual fund distributor Ahmedabad",
    "AMFI registered mutual fund distributor",
    "SIP plans India",
    "SIP calculator online",
    "real estate broker Maharashtra",
    "real estate broker Gujarat",
    "MahaRERA certified property broker",
    "GujRERA certified property broker",
    "RERA registered real estate agent",
    "term insurance plans India",
    "life insurance calculator",
    "health insurance agent",
    "home loan eligibility calculator",
    "loan against property",
    "personal loan DSA",
    "financial services Pune Ahmedabad",
    "GIFT City IFSC mutual funds",
    "Anup Vatyani AMFI",
    "Pavan Vatyani real estate",
    "Assetzpro Services",
  ],
  authors: [{ name: "Assetzpro Services" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Assetzpro Services",
    title: "Assetzpro Services — Mutual Funds, Real Estate, Insurance & Loans",
    description:
      "One team for Mutual Funds, Real Estate, Insurance and Loans across Maharashtra & Gujarat — professionals individually AMFI, MahaRERA & GujRERA registered.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Assetzpro Services — Mutual Funds, Real Estate, Insurance & Loans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assetzpro Services — Mutual Funds, Real Estate, Insurance & Loans",
    description:
      "One licensed team for Mutual Funds, Real Estate, Insurance and Loans across Maharashtra & Gujarat.",
    images: ["/og-image.png"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Assetzpro Services",
  inLanguage: "en-IN",
  publisher: { "@id": `${siteUrl}/#organization` },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": `${siteUrl}/#organization`,
  name: "Assetzpro Services",
  description:
    "Mutual Fund Distribution, Real Estate Broking, Insurance facilitation and Loan/DSA services across Maharashtra & Gujarat, India, delivered by individually AMFI, MahaRERA & GujRERA registered professionals.",
  url: siteUrl,
  logo: `${siteUrl}/brand/logo-icon-192.png`,
  image: `${siteUrl}/og-image.png`,
  areaServed: [
    { "@type": "State", name: "Maharashtra" },
    { "@type": "State", name: "Gujarat" },
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Amanora Park Town",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411928",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "4 Tarang Hills Society, Chandlodia",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  ],
  email: "info@assetzpro.com",
  founder: [
    { "@type": "Person", name: "Anup Vatyani", jobTitle: "Founder — Mutual Funds & Regulatory Affairs", telephone: "+91-9537533533" },
    { "@type": "Person", name: "Pavan Vatyani", jobTitle: "Founder — Real Estate & Digital Strategy", telephone: "+91-9022958266" },
  ],
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+91-9022958266", contactType: "customer service", areaServed: "IN", name: "Pavan Vatyani" },
    { "@type": "ContactPoint", telephone: "+91-9537533533", contactType: "customer service", areaServed: "IN", name: "Anup Vatyani" },
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
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <ScrollProgress />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
        <ConsentBanner />
      </body>
    </html>
  );
}
