import type { Faq } from "@/components/seo/faq-section";
import type { SourceKey } from "@/components/seo/official-sources";

export type City = {
  slug: "pune" | "ahmedabad";
  name: string;
  state: string;
  authority: string;
  title: string;
  description: string;
  h1: string;
  short: string;
  office: { line: string; locality: string; region: string; postal: string };
  services: { href: string; title: string; who: string; body: string }[];
  areas: { group: string; list: string[] }[];
  local: { heading: string; paras: string[] };
  howItWorks: { heading: string; paras: string[] };
  faqs: Faq[];
  sources: SourceKey[];
  related: { href: string; title: string; note: string }[];
  keywords: string[];
};

export const CITIES: Record<City["slug"], City> = {
  pune: {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    authority: "MahaRERA",
    title: "Mutual Funds, Property & Loans in Pune",
    description: "Mutual fund distributor, MahaRERA-registered real estate agent, insurance agent and loan DSA for Pune and PCMC. Meetings by appointment at Amanora Park Town, Hadapsar, Pune 411028.",
    h1: "Mutual funds, property, insurance and loans in Pune",
    short:
      "Assetzpro Services meets clients by appointment at Amanora Park Town, Hadapsar, Pune 411028. Pavan Vatyani (MahaRERA A52100037796) handles Pune property and loan enquiries, Anup Vatyani (AMFI ARN 106715) handles mutual funds, and Menka Motwani handles insurance. Property in Pune falls under MahaRERA, so every project is checked on its register first.",
    office: { line: "Amanora Park Town, Hadapsar", locality: "Pune", region: "Maharashtra", postal: "411028" },
    services: [
      { href: "/mutual-funds", title: "Mutual funds", who: "Anup Vatyani, AMFI ARN 106715", body: "SIPs, ELSS tax savers and goal-based investing for Pune households. ARN registration covers mutual fund distribution across India." },
      { href: "/real-estate/pune", title: "Real estate: rent, lease, buy, sell", who: "Pavan Vatyani, MahaRERA A52100037796", body: "Flats, commercial space and plots in Pune and PCMC, checked against the MahaRERA register before a visit is arranged." },
      { href: "/loans", title: "Home loans and LAP", who: "Pavan Vatyani, empanelled bank loan DSA", body: "Home loan and loan against property offers compared across partner banks and NBFCs, with documents checked before submission." },
      { href: "/insurance", title: "Insurance", who: "Menka Motwani, IRDAI individual agent", body: "Term, health, motor and business cover explained in plain language, from the insurers she is appointed with." },
    ],
    areas: [
      { group: "East Pune", list: ["Amanora Park Town", "Magarpatta", "Kharadi", "Koregaon Park", "Kalyani Nagar", "Viman Nagar", "Mundhwa", "Hadapsar", "Wagholi"] },
      { group: "West Pune", list: ["Baner", "Aundh", "Kothrud", "Pashan", "Balewadi"] },
      { group: "Pimpri-Chinchwad (PCMC) and IT corridor", list: ["Wakad", "Hinjewadi", "Pimple Saudagar", "Pimpri", "Chinchwad"] },
    ],
    local: {
      heading: "What is different about buying in Pune",
      paras: [
        "Property projects in Maharashtra are registered with MahaRERA. A buyer can search the project name, promoter or registration number on the MahaRERA website, then compare the number in the brochure with the portal record, the stated completion date and the quarterly updates.",
        "Pune and Pimpri-Chinchwad are governed by different municipal bodies, so approvals and documents can differ between a project in Kharadi and one in Chinchwad. Documents are read against the actual project location, not assumed from the city name.",
        "Many buyers in Pune are moving for work. A home loan eligibility estimate and an EMI check before shortlisting keep the budget realistic.",
      ],
    },
    howItWorks: {
      heading: "How does a property enquiry work in Pune?",
      paras: [
        "Most enquiries in Pune start with an area and a budget. East Pune (Amanora, Magarpatta, Kharadi, Viman Nagar, Koregaon Park, Kalyani Nagar, Mundhwa and Hadapsar) is the main focus, with west Pune and Pimpri-Chinchwad covered as well. Flats for rent, shops and offices on lease, and homes to buy or sell are all handled.",
        "Share the area, budget, type of property and move-in date on WhatsApp or the enquiry form. Matching options are shortlisted, RERA status and paperwork are checked before a visit is fixed, and visits are arranged at a time that suits you. Meetings are by appointment, so a time and place are agreed first.",
        "The brokerage, if any, is agreed in writing before work starts, and payments go directly to the owner, builder or authority named in the agreement. See the property pages for Pune areas, or the contact page to start.",
      ],
    },
    faqs: [
      { q: "Is there a mutual fund distributor in Pune with an AMFI registration?", a: "Yes. Anup Vatyani is an AMFI-registered Mutual Fund Distributor (ARN 106715), with meetings by appointment at Amanora Park Town, Hadapsar. Mutual Fund investments are subject to market risks, read all scheme related documents carefully." },
      { q: "How can a Pune property be checked on MahaRERA?", a: "Open the MahaRERA website, search by project name, promoter or registration number, and compare the details with the brochure. Check the validity of the registration and the stated completion date." },
      { q: "Which Pune areas are covered for property and loans?", a: "Enquiries are taken from across Pune and Pimpri-Chinchwad, including Hadapsar, Magarpatta, Kharadi, Baner, Wakad and Hinjewadi, among other areas." },
      { q: "Who should be contacted for a Pune home loan?", a: "Pavan Vatyani, an individually empanelled bank loan DSA, compares home loan offers across partner banks and NBFCs. The contact form on this site reaches him." },
    ],
    sources: ["maharera", "amfi", "rbi", "irdai"],
    related: [
      { href: "/blog/how-to-check-rera-registration-maharashtra-gujarat", title: "How to check RERA registration", note: "A step-by-step check on the MahaRERA and GujRERA portals." },
      { href: "/calculators", title: "Calculators hub", note: "SIP, EMI, loan eligibility and insurance cover tools." },
      { href: "/ahmedabad", title: "Ahmedabad", note: "The Gujarat desk, GujRERA registration and areas served." },
    ],
    keywords: ["mutual fund distributor in Pune", "real estate consultant in Pune", "home loan consultant in Pune"],
  },
  ahmedabad: {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    authority: "GujRERA",
    title: "Mutual Funds, Property & Loans in Ahmedabad",
    description: "Mutual fund distributor and GujRERA-registered real estate agent for Ahmedabad and Gandhinagar, with insurance and loan help. Meetings by appointment on CG Road, Ahmedabad.",
    h1: "Mutual funds, property, insurance and loans in Ahmedabad",
    short:
      "Assetzpro Services meets clients by appointment on CG Road, Ahmedabad 380009. Anup Vatyani is both an AMFI-registered Mutual Fund Distributor (ARN 106715) and a GujRERA-registered real estate agent, so mutual fund and Gujarat property enquiries reach the same person. Insurance goes to Menka Motwani and loans to Pavan Vatyani.",
    office: { line: "CG Road", locality: "Ahmedabad", region: "Gujarat", postal: "380009" },
    services: [
      { href: "/mutual-funds", title: "Mutual funds", who: "Anup Vatyani, AMFI ARN 106715", body: "SIPs, ELSS tax savers and goal-based investing for Ahmedabad families and business owners." },
      { href: "/real-estate/ahmedabad", title: "Real estate: rent, lease, buy, sell", who: "Anup Vatyani, GujRERA AG/AHMEDABAD/AHMEDABAD CITY/A403336/200529", body: "Residential, commercial and industrial property in Ahmedabad and Gandhinagar, checked against the GujRERA register first." },
      { href: "/loans", title: "Home loans and LAP", who: "Pavan Vatyani, empanelled bank loan DSA", body: "Home loan, loan against property and business loan offers compared across partner banks and NBFCs." },
      { href: "/insurance", title: "Insurance", who: "Menka Motwani, IRDAI individual agent", body: "Term, health, motor and business cover explained in plain language, from the insurers she is appointed with." },
    ],
    areas: [
      { group: "North and west Ahmedabad", list: ["Chandlodia", "Chandkheda", "Gota", "Sola", "Thaltej", "Ranip"] },
      { group: "SG Highway and the west", list: ["SG Highway", "Bodakdev", "Vastrapur", "Satellite", "Prahlad Nagar", "Bopal", "South Bopal", "Shela", "Navrangpura", "CG Road"] },
      { group: "Gandhinagar belt and beyond", list: ["Gandhinagar", "GIFT City", "Sanand", "Dholera"] },
    ],
    local: {
      heading: "What is different about buying in Gujarat",
      paras: [
        "Property projects in Gujarat are registered with GujRERA. A buyer can search the GujRERA website by project or promoter, then compare the registration number in the brochure with the portal record and the stated completion date.",
        "Industrial and logistics land is a large part of Gujarat enquiries, especially around Sanand and the corridors outside Ahmedabad. Zoning and land-use classification are confirmed before any price is discussed, because the same plot can be restricted to farming or to industry.",
        "GIFT City sits in Gandhinagar next to Ahmedabad. Anup Vatyani also runs giftcityfunds.in, an educational site on GIFT City (IFSC) funds. Those funds fall under IFSCA, not the AMFI registration shown on this site.",
      ],
    },
    howItWorks: {
      heading: "How does a property enquiry work in Ahmedabad?",
      paras: [
        "Enquiries in Ahmedabad usually name a locality: SG Highway, Bodakdev, Thaltej, Vastrapur, Satellite, Prahlad Nagar, Bopal, Shela, CG Road, Gota and nearby areas. GIFT City in Gandhinagar and Dholera are covered too. Flats for rent, shops and offices on lease, and homes to buy or sell are all handled.",
        "Share the locality, budget, type of property and move-in date on WhatsApp or the enquiry form. Matching options are shortlisted, GujRERA status and paperwork are checked before a visit is fixed, and visits are arranged at a time that suits you. Meetings are by appointment, so a time and place are agreed first.",
        "The brokerage, if any, is agreed in writing before work starts, and payments go directly to the owner, builder or authority named in the agreement. See the property pages for Ahmedabad, GIFT City and Dholera, or the contact page to start.",
      ],
    },
    faqs: [
      { q: "Is there a GujRERA-registered real estate consultant in Ahmedabad?", a: "Yes. Anup Vatyani's GujRERA registration number is AG/AHMEDABAD/AHMEDABAD CITY/A403336/200529. Buyers can check a project and an agent on the GujRERA website." },
      { q: "Is there an AMFI-registered mutual fund distributor in Ahmedabad?", a: "Yes. Anup Vatyani is an AMFI-registered Mutual Fund Distributor (ARN 106715). Mutual Fund investments are subject to market risks, read all scheme related documents carefully." },
      { q: "Is industrial land in Gujarat handled?", a: "Industrial and logistics property is part of the real estate work, with zoning and land-use checked before a site is shortlisted." },
      { q: "Where do Ahmedabad meetings take place?", a: "By appointment on CG Road, Ahmedabad 380009, or at the property. Enquiries can also be sent through the contact form on this site." },
    ],
    sources: ["gujrera", "amfi", "rbi", "irdai"],
    related: [
      { href: "/blog/how-to-check-rera-registration-maharashtra-gujarat", title: "How to check RERA registration", note: "A step-by-step check on the MahaRERA and GujRERA portals." },
      { href: "/calculators", title: "Calculators hub", note: "SIP, EMI, loan eligibility and insurance cover tools." },
      { href: "/pune", title: "Pune", note: "The Maharashtra desk, MahaRERA registration and areas served." },
    ],
    keywords: ["mutual fund distributor in Ahmedabad", "real estate consultant in Ahmedabad", "loan consultant in Ahmedabad"],
  },
};
