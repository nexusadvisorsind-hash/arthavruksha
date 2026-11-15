import type { Faq } from "@/components/seo/faq-section";
import type { SourceKey } from "@/components/seo/official-sources";

export type Area = { name: string; note: string };
export type AreaGroup = { group: string; blurb?: string; areas: Area[] };

export type PlaceSlug = "pune" | "ahmedabad" | "gift-city" | "dholera";

export type Place = {
  slug: PlaceSlug;
  name: string;
  state: string;
  authority: string;
  seoTitle: string;
  description: string;
  h1: string;
  lead: string;
  short: string;
  /** The four things people search for, written for this place. */
  needs: { title: string; body: string }[];
  groups: AreaGroup[];
  checks: { heading: string; items: string[] };
  caution?: { heading: string; paras: string[] };
  faqs: Faq[];
  sources: SourceKey[];
  /** Locations offered in the WhatsApp requirement bar. */
  barAreas: string[];
  keywords: string[];
};

export const PLACES: Record<PlaceSlug, Place> = {
  pune: {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    authority: "MahaRERA",
    seoTitle: "Flats for Rent, Lease, Buy & Sell in Pune",
    description:
      "Flats, shops and offices for rent, lease, buy and sell in Pune: Kharadi, Magarpatta, Amanora, Koregaon Park, Kalyani Nagar, Viman Nagar, Mundhwa and more.",
    h1: "Flats, shops and offices for rent, lease, buy and sell in Pune",
    lead:
      "Share the area, budget and type of property. You get options that match, checked for RERA status and paperwork before a visit is fixed. The main focus is east Pune: Amanora, Magarpatta, Kharadi, Koregaon Park, Kalyani Nagar, Viman Nagar and Mundhwa.",
    short:
      "Assetzpro Services helps with flats, houses, shops and offices to rent, lease, buy or sell in Pune, with a main focus on Amanora, Magarpatta, Kharadi, Koregaon Park, Kalyani Nagar, Viman Nagar and Mundhwa. Pavan Vatyani is MahaRERA registered (A52100037796). Meetings are by appointment.",
    needs: [
      { title: "Flat for rent in Pune, plus shops and offices", body: "Share your budget, the area and when you want to move in. Ready-to-move flats, independent houses, shops and offices are shortlisted, and visits are arranged. Tenants usually need ID, address proof and income or employment proof, and owners usually ask for a rent agreement before handing over the keys." },
      { title: "Commercial space for lease in Pune", body: "Offices, showrooms and retail shops on lease in areas such as Kharadi, Viman Nagar, Koregaon Park and Magarpatta. Lease terms (lock-in period, rent increase, maintenance and deposit) are read with you before anything is signed." },
      { title: "Buy a flat or house in Pune", body: "Ready flats and projects in the areas below. A project is looked up on the MahaRERA register first. Title, approved plan and, for a ready flat, the occupancy certificate are reviewed before you pay any booking amount." },
      { title: "Sell or rent out your property in Pune", body: "Share the society, size, floor and your expected price or rent. You are told how similar properties are being asked for, a paperwork checklist is prepared, and serious buyers and tenants are brought in. A written agreement on the brokerage is signed before work starts." },
    ],
    groups: [
      {
        group: "East Pune: main focus",
        blurb: "The Hadapsar, Kharadi and Nagar Road belt, close to IT parks, the airport and large townships.",
        areas: [
          { name: "Amanora Park Town", note: "A large integrated township off Solapur Road in Hadapsar, with towers, a mall and open grounds. Flats for rent and sale are asked for by families and working couples." },
          { name: "Magarpatta City", note: "An integrated township in Hadapsar with homes, offices and shops inside one campus. Flats for rent and for sale, and commercial space on lease." },
          { name: "Kharadi", note: "An IT and office hub on the east side. Many tenants work in the nearby IT parks, so 1, 2 and 3 BHK flats for rent are a common search. Offices and shops for lease also come up." },
          { name: "Koregaon Park", note: "A central, well-known locality of apartments, bungalows, cafes and offices. Flats and commercial space for rent, lease and sale." },
          { name: "Kalyani Nagar", note: "A residential and commercial locality on the airport side of Nagar Road. Flats for rent and sale, plus offices and shops on lease." },
          { name: "Viman Nagar", note: "Next to Pune airport, with a mix of apartments, offices and retail. Flats for rent and sale, and commercial space on lease." },
          { name: "Mundhwa", note: "Between Koregaon Park Annexe, Magarpatta and Kharadi. Flats for rent and sale in newer projects, and commercial space along the main roads." },
          { name: "Hadapsar", note: "The wider east Pune hub along Solapur Road. Flats for rent and sale across budgets, and shops and small offices on lease." },
          { name: "Wagholi", note: "A growing area on the Pune-Ahmednagar road, with many newer projects and lower entry budgets than central Pune." },
        ],
      },
      {
        group: "West Pune",
        areas: [
          { name: "Baner", note: "Popular with IT professionals. Flats for rent and sale, and offices and shops on lease." },
          { name: "Balewadi", note: "Next to Baner, with newer projects and good road links toward Hinjewadi and the Mumbai-Bengaluru highway." },
          { name: "Aundh", note: "An established residential locality. Flats for rent and sale in older and newer buildings." },
          { name: "Kothrud", note: "A long-settled residential area. Flats and independent houses for rent and sale." },
          { name: "Pashan", note: "A quieter locality with hill views and easy access to Baner and Aundh." },
        ],
      },
      {
        group: "Pimpri-Chinchwad (PCMC) and the IT corridor",
        areas: [
          { name: "Hinjewadi", note: "Pune's largest IT corridor. Flats for rent are in steady demand from people working in the IT parks." },
          { name: "Wakad", note: "Close to Hinjewadi and the highway. Flats for rent and sale across budgets." },
          { name: "Pimple Saudagar", note: "A residential locality in PCMC with many family-sized flats for rent and sale." },
          { name: "Pimpri and Chinchwad", note: "Established industrial and residential areas. Flats, shops and small industrial units." },
        ],
      },
    ],
    checks: {
      heading: "Before you rent, lease or buy in Pune",
      items: [
        "For a project: look it up on the MahaRERA website and match the registration number with the brochure.",
        "For a resale flat: ask for the sale deed, society NOC, share certificate, latest property tax receipt and details of any loan on it.",
        "For a rental: ask for a written rent or leave and licence agreement. Check the current registration and stamp duty rules with the state registration department, as they change.",
        "Agree the rent, deposit, maintenance, lock-in and notice period in writing before paying anything.",
        "Pay by bank transfer, keep every receipt and never pay in cash.",
      ],
    },
    faqs: [
      { q: "Can I get a flat for rent in Kharadi or Magarpatta through you?", a: "Yes. Share your budget, the number of bedrooms and the move-in date on WhatsApp or the enquiry form. Matching flats in Kharadi, Magarpatta, Amanora, Mundhwa and nearby areas are shortlisted and visits are arranged." },
      { q: "Do you handle commercial space for lease in Pune?", a: "Yes. Offices, shops and showrooms on lease in areas such as Kharadi, Viman Nagar, Koregaon Park and Magarpatta. The lease terms are read with you before you sign." },
      { q: "Is the agent MahaRERA registered?", a: "Yes. Pavan Vatyani's MahaRERA registration number is A52100037796. You can look it up on the MahaRERA website." },
      { q: "Do I pay anything to enquire?", a: "No. Enquiring is free. Any brokerage is agreed in writing before work starts." },
      { q: "Where do meetings take place?", a: "Meetings are by appointment, at Amanora Park Town, Hadapsar, Pune 411028 or at the property. Message first to fix a time." },
    ],
    sources: ["maharera"],
    barAreas: ["Amanora", "Magarpatta", "Kharadi", "Koregaon Park", "Kalyani Nagar", "Viman Nagar", "Mundhwa", "Hadapsar", "Baner", "Wakad", "Hinjewadi", "Other area in Pune"],
    keywords: ["flat for rent in Pune", "property for rent in Pune", "office space for lease in Pune", "flats for sale in Pune", "real estate agent in Pune"],
  },

  ahmedabad: {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    authority: "GujRERA",
    seoTitle: "Flats for Rent, Lease, Buy & Sell in Ahmedabad",
    description:
      "Flats, shops and offices for rent, lease, buy and sell in Ahmedabad: SG Highway, Bopal, Shela, Prahlad Nagar, Thaltej, Gota, CG Road and more.",
    h1: "Flats, shops and offices for rent, lease, buy and sell in Ahmedabad",
    lead:
      "Share the area, budget and type of property. You get matching options with RERA status and paperwork checked before you visit. Coverage includes the main residential and commercial areas of Ahmedabad, plus GIFT City in Gandhinagar and Dholera.",
    short:
      "Assetzpro Services helps with flats, shops and offices to rent, lease, buy or sell across Ahmedabad, including SG Highway, Bopal, Shela, Prahlad Nagar, Thaltej, Gota and CG Road, with GIFT City and Dholera enquiries as well. Meetings are by appointment on CG Road, Ahmedabad.",
    needs: [
      { title: "Flat for rent in Ahmedabad, plus shops and offices", body: "Share your budget, area and move-in date. Ready flats, houses, shops and offices are shortlisted and visits are arranged. Tenants are usually asked for ID, address proof and income or employment proof, and a written rent agreement is signed before possession." },
      { title: "Commercial space for lease in Ahmedabad", body: "Offices, showrooms and shops on lease along SG Highway, in Prahlad Nagar, Vastrapur, Navrangpura and CG Road, among other areas. Lock-in, escalation, maintenance and deposit terms are read with you first." },
      { title: "Buy a flat, house or plot in Ahmedabad", body: "Ready flats and projects across the west and northwest of the city. Projects are looked up on the GujRERA register, and the title, approvals and occupancy status are reviewed before you pay a booking amount." },
      { title: "Sell or rent out your property in Ahmedabad", body: "Share the locality, size, floor and your expected price or rent. A paperwork checklist is prepared, serious buyers and tenants are brought in, and the brokerage is agreed in writing before work starts." },
    ],
    groups: [
      {
        group: "SG Highway and the west",
        blurb: "The main commercial and residential corridor, with many offices, malls and newer apartment projects.",
        areas: [
          { name: "SG Highway", note: "Ahmedabad's main business corridor, with offices, showrooms and residential towers. Commercial space on lease and flats for rent and sale." },
          { name: "Bodakdev", note: "A central west-side locality of apartments, cafes and offices, close to SG Highway." },
          { name: "Thaltej", note: "A busy locality at the junction of SG Highway and the Sarkhej-Gandhinagar corridor. Flats for rent and sale, and shops on lease." },
          { name: "Vastrapur", note: "An established residential and commercial locality near the lake, with many offices and shops." },
          { name: "Satellite", note: "A settled residential area with a mix of apartments, shops and offices." },
          { name: "Prahlad Nagar", note: "A corporate and residential hub with offices, towers and retail. Flats for rent and sale, and office space on lease." },
          { name: "Bopal and South Bopal", note: "Fast-growing west Ahmedabad near the SP Ring Road, with many new projects. Flats for rent and sale across budgets." },
          { name: "Shela", note: "Beyond Bopal, with newer township-style projects and larger homes." },
          { name: "Shilaj and Ambli", note: "Western areas with villas, bungalows and newer apartments." },
        ],
      },
      {
        group: "Central and north Ahmedabad",
        areas: [
          { name: "Navrangpura and CG Road", note: "Central, long-established commercial streets with retail, offices and professional firms. Offices and shops on lease, and flats for rent." },
          { name: "Sola and Science City", note: "Northwest areas with newer residential projects and good road links." },
          { name: "Gota", note: "A growing northwest locality with many new apartment projects and a lower entry budget than the west." },
          { name: "Chandkheda", note: "A northern residential area with apartments and independent houses." },
          { name: "Ranip", note: "A settled north-side residential area." },
        ],
      },
    ],
    checks: {
      heading: "Before you rent, lease or buy in Ahmedabad",
      items: [
        "For a project: look it up on the GujRERA website and match the registration number with the brochure.",
        "For a resale flat: ask for the sale deed, society NOC, latest property tax receipt, electricity bill and details of any loan on it.",
        "For a rental: sign a written rent agreement. Check the current registration and stamp duty rules with the Gujarat registration department.",
        "Agree rent, deposit, maintenance, lock-in and notice period in writing before paying anything.",
        "Pay by bank transfer, keep every receipt and never pay in cash.",
      ],
    },
    faqs: [
      { q: "Can I get a flat for rent on SG Highway or in Bopal through you?", a: "Yes. Share your budget, the bedrooms you need and the move-in date on WhatsApp or the enquiry form. Matching flats on SG Highway, in Bopal, Shela, Prahlad Nagar, Thaltej and nearby areas are shortlisted." },
      { q: "Do you handle office space for lease in Ahmedabad?", a: "Yes. Offices, shops and showrooms on lease along SG Highway, in Prahlad Nagar, Vastrapur, Navrangpura and CG Road. Lease terms are read with you before you sign." },
      { q: "Is the agent registered for Gujarat property?", a: "Gujarat property is handled under a GujRERA registration. Anup Vatyani's GujRERA number is AG/AHMEDABAD/AHMEDABAD CITY/A403336/200529, and it can be checked on the GujRERA website." },
      { q: "Do you cover GIFT City and Dholera?", a: "Yes, for enquiries. See the GIFT City and Dholera pages for what to check before you rent, lease or buy there." },
      { q: "Where do meetings take place?", a: "Meetings are by appointment, on CG Road, Ahmedabad 380009 or at the property. Message first to fix a time." },
    ],
    sources: ["gujrera"],
    barAreas: ["SG Highway", "Bodakdev", "Thaltej", "Vastrapur", "Satellite", "Prahlad Nagar", "Bopal", "South Bopal", "Shela", "Gota", "Navrangpura / CG Road", "Other area in Ahmedabad"],
    keywords: ["flat for rent in Ahmedabad", "property for rent in Ahmedabad", "office space for lease in Ahmedabad", "flats for sale in Ahmedabad", "real estate agent in Ahmedabad"],
  },

  "gift-city": {
    slug: "gift-city",
    name: "GIFT City",
    state: "Gujarat",
    authority: "GujRERA",
    seoTitle: "GIFT City Office Space for Lease, Flats for Rent",
    description:
      "Office space for lease and rent, and flats for rent and sale in GIFT City, Gandhinagar, near Ahmedabad. What to check before you commit.",
    h1: "GIFT City property: office space for lease, flats for rent and sale",
    lead:
      "GIFT City is India's first International Financial Services Centre, in Gandhinagar, a short drive from Ahmedabad. Firms look for office space on lease or rent, and individuals look for flats on rent or purchase. Share what you need, and the approvals and paperwork are checked with you.",
    short:
      "GIFT City (Gujarat International Finance Tec-City) is in Gandhinagar, near Ahmedabad. Assetzpro Services takes enquiries for office space on lease or rent and for flats to rent or buy there, and checks the approvals and paperwork first. Meetings are by appointment.",
    needs: [
      { title: "Office space for lease or rent in GIFT City", body: "Firms setting up or moving into GIFT City need to understand the building, the lease terms and the approvals that apply to their business. Options are shortlisted with you, and the lease terms (lock-in, escalation, maintenance, deposit) are read before you sign." },
      { title: "Flats for rent in GIFT City", body: "Professionals who work in GIFT City, or nearby in Gandhinagar and Ahmedabad, look for flats on rent. Share your budget and move-in date, and options are shortlisted and visits arranged." },
      { title: "Buy a flat or commercial unit near GIFT City", body: "For any purchase, the project registration, title, approvals and possession terms are checked first. Nearby Gandhinagar and SG Highway areas, which many buyers consider alongside GIFT City, are compared too." },
      { title: "Sell or lease out a property in GIFT City", body: "If you own a unit, share the building, size and expected rent or price. Serious tenants and buyers are brought in, and the brokerage is agreed in writing first." },
    ],
    groups: [
      {
        group: "Areas people compare with GIFT City",
        blurb: "Many tenants and buyers look at these places together with GIFT City because of the drive time and budget.",
        areas: [
          { name: "GIFT City", note: "The IFSC and the planned business district in Gandhinagar. Commercial office space for lease and rent, and residential units." },
          { name: "Gandhinagar", note: "The state capital, with government offices, sectors of residential plots and flats, and easy roads to GIFT City and Ahmedabad." },
          { name: "SG Highway", note: "Ahmedabad's main business corridor, with a direct road link toward Gandhinagar and GIFT City." },
          { name: "Thaltej and Bodakdev", note: "West Ahmedabad localities with flats and offices, within reach of both SG Highway and GIFT City." },
        ],
      },
    ],
    checks: {
      heading: "Before you lease or buy in GIFT City",
      items: [
        "Confirm which approvals your business needs, and with which authority, before choosing a space. Rules for units in the IFSC differ from the rest of Gujarat, so ask the regulator and the building's developer.",
        "For a residential project: look it up on the GujRERA website and match the registration number with the brochure.",
        "Read the full lease or agreement, including lock-in, rent increase, maintenance and exit terms.",
        "Pay by bank transfer, keep every receipt and never pay in cash.",
      ],
    },
    caution: {
      heading: "A note on GIFT City funds and property",
      paras: [
        "Property in GIFT City is a separate matter from the funds registered in GIFT City (IFSC), which fall under IFSCA, not under the AMFI registration shown on this website. If you want to learn about those funds, giftcityfunds.in is an educational site on them.",
        "Assetzpro Services does not promise rents, prices or returns for any property.",
      ],
    },
    faqs: [
      { q: "Where is GIFT City?", a: "GIFT City is in Gandhinagar, Gujarat, between Ahmedabad and Gandhinagar. It is India's first International Financial Services Centre." },
      { q: "Can you help with office space for lease in GIFT City?", a: "Yes. Share the size you need, your budget and when you plan to move. Options are shortlisted and the lease terms are read with you, and you check approvals for your business type with the right authority." },
      { q: "Can I rent a flat near GIFT City?", a: "Yes. Many professionals rent in GIFT City, Gandhinagar or west Ahmedabad. Share your budget and the date you need to move in." },
      { q: "Does the site promise returns on GIFT City property?", a: "No. No returns, rents or price rises are promised for any property." },
    ],
    sources: ["gujrera"],
    barAreas: ["GIFT City", "Gandhinagar", "SG Highway", "Thaltej", "Other area near GIFT City"],
    keywords: ["office space for lease in GIFT City", "flat for rent in GIFT City", "GIFT City property", "commercial property in GIFT City"],
  },

  dholera: {
    slug: "dholera",
    name: "Dholera",
    state: "Gujarat",
    authority: "DSIRDA / DICDL",
    seoTitle: "Dholera Plots: What to Check Before You Buy",
    description:
      "Plots and property in Dholera SIR, Gujarat: how land is allotted, what to verify, and common risks. Enquiries taken from Ahmedabad and Pune buyers.",
    h1: "Dholera plots and property: what to check before you buy",
    lead:
      "Dholera is a planned Special Investment Region about 100 km from Ahmedabad. Enquiries are taken for plots and property there. Because land in Dholera is heavily promoted, the first step is to check the approvals, ownership and the stage of the project, before any money changes hands.",
    short:
      "Dholera is a planned Special Investment Region (SIR) in Gujarat, roughly 100 km from Ahmedabad. Assetzpro Services takes enquiries for plots and property there and checks approvals, ownership and the stage of the project first. No returns or price rises are promised.",
    needs: [
      { title: "Plots and land in Dholera", body: "Enquiries are taken for residential and commercial plots. Before any discussion on price, ownership, the land's zoning under the Dholera plan and the approvals are checked, because the same land can be restricted to different uses." },
      { title: "Allotment by the authority", body: "The Dholera authorities describe land allotment by auction or tender for residential and commercial plots in the activation area. You are helped to understand the process and the documents, and point you to the official portals." },
      { title: "Ahmedabad properties as an alternative", body: "Many people who ask about Dholera also compare ready or under-construction property in Ahmedabad and GIFT City. Both can be shown so you choose with the full picture." },
      { title: "Sell or lease land or property", body: "If you hold a plot or property and want to sell or lease it, share the details and the papers. You are told what a serious buyer will ask for." },
    ],
    groups: [
      {
        group: "Dholera and the connection to Ahmedabad",
        areas: [
          { name: "Dholera SIR", note: "A planned region under the Dholera Special Investment Region Development Authority (DSIRDA). Infrastructure is being built in stages, and much of it is still planned." },
          { name: "Ahmedabad–Dholera expressway", note: "An expressway between Ahmedabad and Dholera has been reported as open, which has cut the drive time. Check the current position on the official sources before relying on it." },
          { name: "Dholera airport and industry", note: "An airport and industrial projects such as a semiconductor plant are reported to be under construction, with start dates still targets. These timelines can change." },
        ],
      },
    ],
    checks: {
      heading: "Before you buy or invest in Dholera land",
      items: [
        "Ask for the ownership papers and check them with a property lawyer: sale deed, 7/12 extract, mutation entries and any encumbrance.",
        "Confirm the plot is within the Dholera plan and what use it is zoned for.",
        "Check with the Dholera authority (DSIRDA) and the developer (DICDL) whether the seller or project is authorised.",
        "If the project is a residential scheme, ask for the RERA registration number and check it on the GujRERA website.",
        "Never pay a booking amount on the strength of a brochure, an agent's word or a social media post.",
        "Pay only by bank transfer to the seller or the authority, and keep every receipt.",
      ],
    },
    caution: {
      heading: "Read this before you consider Dholera",
      paras: [
        "Dholera plots are widely advertised, and some promotions claim price rises that nobody can guarantee. Assetzpro Services does not promise returns, rents or price rises for any property.",
        "Many of the planned facilities, such as the airport, industrial projects and city services, are still being built, and dates may slip. Land bought today may not give you income or use for years. Only commit money you can leave untouched.",
        "Check everything yourself against the official sources below, and take legal advice before you pay.",
      ],
    },
    faqs: [
      { q: "Where is Dholera?", a: "Dholera is in Ahmedabad district, Gujarat, roughly 100 km from Ahmedabad. It is a planned Special Investment Region." },
      { q: "Is buying a plot in Dholera safe?", a: "It depends on the plot and the seller. Check ownership, zoning, and whether the seller or project is authorised, and take legal advice. No returns and no price rises are promised." },
      { q: "How is land allotted in Dholera?", a: "The authority's own FAQs say residential and commercial land in the activation area is allotted by auction or newspaper tender. Check the official Dholera website for the current process." },
      { q: "Do you take enquiries for Dholera?", a: "Yes. Share what you are looking for and your budget. Approvals and ownership are checked with you first." },
    ],
    sources: ["dholera", "gujrera"],
    barAreas: ["Dholera SIR", "Near Dholera", "Ahmedabad (alternative)"],
    keywords: ["Dholera plots", "property in Dholera", "Dholera SIR", "Dholera land"],
  },
};

export const PLACE_ORDER: PlaceSlug[] = ["pune", "ahmedabad", "gift-city", "dholera"];
