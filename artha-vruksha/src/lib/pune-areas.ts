import type { Faq } from "@/components/seo/faq-section";

export type PuneAreaSlug =
  | "amanora"
  | "magarpatta"
  | "hadapsar"
  | "kharadi"
  | "koregaon-park"
  | "viman-nagar"
  | "kalyani-nagar"
  | "mundhwa";

export type PuneArea = {
  slug: PuneAreaSlug;
  name: string;
  seoTitle: string;
  description: string;
  h1: string;
  lead: string;
  short: string;
  about: string[];
  residential: { heading: string; body: string };
  commercial: { heading: string; body: string };
  checks: { heading: string; items: string[] };
  faqs: Faq[];
  near: PuneAreaSlug[];
};

/** Registration line reused on every area page. */
export const RERA_LINE = "Pavan Vatyani is MahaRERA registered (A52100037796). Meetings are by appointment.";

export const PUNE_AREAS: Record<PuneAreaSlug, PuneArea> = {
  amanora: {
    slug: "amanora",
    name: "Amanora Park Town",
    seoTitle: "Real Estate Agent in Amanora: Flats, Shops, Offices",
    description:
      "Flats for rent and sale, shops and offices on lease in Amanora Park Town, Hadapsar, Pune. MahaRERA registered channel partner. Meetings by appointment.",
    h1: "Real estate agent in Amanora Park Town: flats, shops and offices",
    lead:
      "Flats to rent or buy, and shops and offices to lease, in Amanora Park Town and the streets around it. Share your budget and move-in date and matching options are shortlisted for a visit.",
    short:
      "Assetzpro Services helps with flats, shops and offices to rent, lease, buy or sell in Amanora Park Town, Hadapsar, Pune. Pavan Vatyani is MahaRERA registered (A52100037796). Meetings are by appointment at Amanora Park Town or at the property.",
    about: [
      "Amanora Park Town is a large integrated township off Solapur Road in Hadapsar, east Pune. Homes, a mall, schools and open grounds sit inside one planned campus, and Magarpatta City, Hadapsar and Kharadi are close by.",
      "Because the township is big, the experience changes from tower to tower. Floor, facing, the age of the building, parking and the monthly maintenance all differ, so the useful comparison is the exact unit, not the area name.",
    ],
    residential: {
      heading: "Flats for rent and sale in Amanora",
      body: "Families, working couples and professionals who work in Magarpatta, Hadapsar and Kharadi often ask for 2 and 3 BHK flats here, furnished or unfurnished. For a rental you are shortlisted flats that match your budget and floor preference, and for a purchase the society documents and the loan position are checked before you pay a booking amount. Owners who want to rent out or sell can share the tower, size and expected rent or price.",
    },
    commercial: {
      heading: "Shops and offices on lease near Amanora",
      body: "Retail units, small offices and consulting rooms are asked for by clinics, service businesses and start-ups that want customers or staff nearby. Before you commit, ask for the carpet area, the permitted use of the unit, the maintenance charges, whether GST applies to the rent, the lock-in and the yearly increase.",
    },
    checks: {
      heading: "What to check before renting or buying in Amanora",
      items: [
        "Ask what the monthly maintenance covers and who pays it, and whether the society has rules for tenants.",
        "Match the name on the ownership papers to the person who signs the agreement.",
        "Confirm parking, power backup and lift access for the specific tower and floor.",
        "For a purchase, ask for the sale deed, society NOC, latest tax receipt and details of any loan on the flat.",
        "Keep every amount agreed in writing and pay by bank transfer against a receipt.",
      ],
    },
    faqs: [
      { q: "Can I find a flat for rent in Amanora Park Town through Assetzpro?", a: "Yes. Share your budget, the number of bedrooms and your move-in date on WhatsApp or the enquiry form. Matching flats in Amanora and nearby Magarpatta and Hadapsar are shortlisted, subject to availability." },
      { q: "Are shops and offices available on lease around Amanora?", a: "Availability changes, so share the size, budget and type of business you have in mind. Matching commercial units around Amanora, Hadapsar and Magarpatta are shortlisted for a visit." },
      { q: "What should a tenant check in an Amanora society?", a: "Ask about maintenance charges, tenant rules, parking, the lock-in period and the deposit refund terms, and get the agreement in writing. In Maharashtra a rental is usually a registered leave and license agreement." },
      { q: "Does Assetzpro have an office in Amanora?", a: "There is no walk-in office. Meetings are by appointment at Amanora Park Town, Hadapsar, Pune 411028, or at the property. Message first to fix a time." },
    ],
    near: ["magarpatta", "hadapsar", "mundhwa", "kharadi"],
  },

  magarpatta: {
    slug: "magarpatta",
    name: "Magarpatta City",
    seoTitle: "Property in Magarpatta City: Flats, Offices, Shops",
    description:
      "Flats for rent and sale, offices and shops on lease in Magarpatta City, Pune. MahaRERA registered channel partner. Meetings by appointment.",
    h1: "Property in Magarpatta City: flats, offices and shops",
    lead:
      "Flats to rent or buy, and offices and shops to lease, in and around Magarpatta City. Tell Assetzpro the size, budget and date and options that match are lined up for a visit.",
    short:
      "Assetzpro Services helps with flats, offices and shops to rent, lease, buy or sell in Magarpatta City, Pune. Pavan Vatyani is MahaRERA registered (A52100037796). Meetings are by appointment.",
    about: [
      "Magarpatta City is an integrated township in Hadapsar with residential societies, office buildings, shops, schools and green spaces inside one campus. Cybercity, its IT and office park, is part of the township, and Destination Centre and other commercial buildings add retail and office space.",
      "People often choose it to keep the journey to work short. Societies differ in age, size and rules, so compare the society and the unit rather than the township as a whole.",
    ],
    residential: {
      heading: "Flats for rent and sale in Magarpatta",
      body: "Tenants who work in Cybercity or nearby offices usually look for 1, 2 and 3 BHK flats close to work. Ask about the floor, the age of the building, parking, power backup and the monthly maintenance. Some societies ask for a copy of the agreement and identity papers before a tenant moves in, so check that early. Owners can share the society, size and expected rent or price to get started.",
    },
    commercial: {
      heading: "Offices and shops on lease in Magarpatta",
      body: "Small and mid-sized businesses look for offices near the township's workforce, and shops serve the residents inside it. Compare the carpet and built-up areas, parking, internet options, access hours, the lock-in, the yearly rent increase and the maintenance charges, and agree who pays for fit-out and what happens to it when the lease ends.",
    },
    checks: {
      heading: "What to check before renting or leasing in Magarpatta",
      items: [
        "Compare societies on age, maintenance, parking and tenant rules, not only on rent.",
        "For an office, confirm the permitted use and what the quoted area includes.",
        "Test the real travel time to your workplace at your usual hour.",
        "Ask for the lock-in period, the notice period and the deposit refund terms in writing.",
        "Pay by bank transfer and keep a receipt for every amount.",
      ],
    },
    faqs: [
      { q: "Can I find a flat for rent in Magarpatta City through Assetzpro?", a: "Yes. Share your budget, the number of bedrooms and your move-in date, and flats in Magarpatta and nearby Amanora, Hadapsar and Kharadi are shortlisted, subject to availability." },
      { q: "Is office space on lease available in Magarpatta?", a: "Availability changes, so share the size, budget and the number of people. Matching offices in and around Magarpatta are shortlisted for a visit." },
      { q: "Can a flat in Magarpatta be used as an office?", a: "Usually not. Societies often do not allow business use, so confirm the permitted use before you commit." },
      { q: "How long is a typical rental agreement?", a: "That is agreed between the owner and the tenant, and 11 months is common for residential rentals in Maharashtra. Get the terms in writing and check the registration requirements." },
    ],
    near: ["amanora", "hadapsar", "mundhwa", "kharadi"],
  },

  hadapsar: {
    slug: "hadapsar",
    name: "Hadapsar",
    seoTitle: "Flats and Shops in Hadapsar: Rent, Lease, Buy, Sell",
    description:
      "Flats for rent and sale, shops and offices on lease in Hadapsar, Pune. MahaRERA registered channel partner. Meetings by appointment.",
    h1: "Flats, shops and offices for rent, lease, buy and sell in Hadapsar",
    lead:
      "Hadapsar has a wide range of societies and commercial space along Solapur Road and the roads around it. Share your budget and area and options that match are lined up for a visit.",
    short:
      "Assetzpro Services helps with flats, shops and offices to rent, lease, buy or sell in Hadapsar, Pune. Pavan Vatyani is MahaRERA registered (A52100037796). Meetings are by appointment.",
    about: [
      "Hadapsar is a long-established part of east Pune along Solapur Road, with Hadapsar Industrial Estate, the railway station and a large number of housing societies and shops. Planned townships such as Magarpatta City and Amanora Park Town sit within the wider Hadapsar area.",
      "The area is varied: older buildings, newer projects, township flats and small shops all exist side by side. That makes the exact building and street more important than the area name when you compare rent or price.",
    ],
    residential: {
      heading: "Flats for rent and sale in Hadapsar",
      body: "Budgets range widely, from older societies to new projects and township flats. Tenants often want a short commute to Magarpatta, Kharadi or the industrial estate, and buyers compare projects on possession date and RERA status. Share the size, budget and the work location, and options are shortlisted accordingly.",
    },
    commercial: {
      heading: "Shops and small offices on lease in Hadapsar",
      body: "Shops along the main roads, small offices and showrooms are common in Hadapsar. Footfall, frontage, parking and the permitted use matter most for a shop, while access for staff and customers matters for an office. Check the lock-in, the yearly increase, the deposit and the maintenance before you sign.",
    },
    checks: {
      heading: "What to check in Hadapsar",
      items: [
        "Visit at your usual travel hour, because traffic on Solapur Road can change the real commute.",
        "For a project, look up the MahaRERA registration and compare it with the brochure.",
        "For a resale flat, ask for the sale deed, society NOC and the latest tax receipt.",
        "For a shop, confirm the approved use and who pays maintenance and property tax.",
        "Agree every term in writing before paying.",
      ],
    },
    faqs: [
      { q: "Can I get a flat for rent in Hadapsar through Assetzpro?", a: "Yes. Share your budget, size and move-in date and matching flats in Hadapsar, Magarpatta, Amanora and nearby areas are shortlisted, subject to availability." },
      { q: "Are shops available on lease in Hadapsar?", a: "Availability changes. Share the size, budget and type of business and matching shops and small offices are shortlisted for a visit." },
      { q: "Is Hadapsar suitable for people who work in Kharadi or Magarpatta?", a: "Many tenants choose it for that reason, but the real travel time depends on the exact location, so test the route at your usual hour." },
      { q: "Do I pay to enquire?", a: "No. Enquiring is free, and any brokerage is agreed in writing before work starts." },
    ],
    near: ["amanora", "magarpatta", "mundhwa", "kharadi"],
  },

  kharadi: {
    slug: "kharadi",
    name: "Kharadi",
    seoTitle: "Flat for Rent in Kharadi, plus Offices and Shops",
    description:
      "Flats for rent and sale, offices and shops on lease in Kharadi, Pune, close to the IT parks. MahaRERA registered channel partner.",
    h1: "Flat for rent in Kharadi, plus offices and shops on lease",
    lead:
      "Kharadi is one of Pune's main IT and office areas. Share the size, budget and move-in date and flats, offices and shops that match are shortlisted for a visit.",
    short:
      "Assetzpro Services helps with flats, offices and shops to rent, lease, buy or sell in Kharadi, Pune. Pavan Vatyani is MahaRERA registered (A52100037796). Meetings are by appointment.",
    about: [
      "Kharadi is on the east side of Pune, off Nagar Road, and is known for its IT parks and business centres such as EON IT Park and World Trade Center Pune. Many residents work nearby, and new housing projects continue to come up.",
      "Newer buildings are common, and so are ongoing construction and road works, so check the conditions on the actual street and at your usual hour before you decide.",
    ],
    residential: {
      heading: "Flats for rent and sale in Kharadi",
      body: "1, 2 and 3 BHK flats for rent are a steady search here because many tenants work in the nearby IT parks. For a purchase, compare projects on possession date, RERA status and the quality of the surroundings. Share your budget, the size and the move-in date for a shortlist.",
    },
    commercial: {
      heading: "Offices and shops on lease in Kharadi",
      body: "Offices in business parks and commercial buildings, and shops serving the residential projects, are the main commercial options. Ask for the carpet area, parking, power backup, internet options and the lock-in period, and agree the yearly increase and fit-out terms in writing.",
    },
    checks: {
      heading: "What to check in Kharadi",
      items: [
        "Visit at your usual travel hour, as peak-hour traffic can change the real commute.",
        "For a new project, check the MahaRERA registration and the promised possession date.",
        "For an office, confirm the approved use, the parking and the access hours.",
        "Ask what the maintenance covers and who pays it.",
        "Sign nothing until the deposit, notice period and lock-in are written down.",
      ],
    },
    faqs: [
      { q: "Can I get a flat for rent in Kharadi through Assetzpro?", a: "Yes. Share your budget, the size and your move-in date and matching flats in Kharadi and nearby areas are shortlisted, subject to availability." },
      { q: "Is office space on lease available in Kharadi?", a: "Availability changes. Share the size, budget and number of people and matching offices around Kharadi are shortlisted for a visit." },
      { q: "Is Kharadi only for people who work in IT?", a: "No. Many residents and tenants work elsewhere, but the area suits people who want to be near the IT parks and business centres." },
      { q: "How is a rental agreement done in Pune?", a: "A rental is usually a leave and license agreement, which is normally registered in Maharashtra. Check the current rules with the registration department or a lawyer." },
    ],
    near: ["mundhwa", "magarpatta", "viman-nagar", "kalyani-nagar"],
  },

  "koregaon-park": {
    slug: "koregaon-park",
    name: "Koregaon Park",
    seoTitle: "Property in Koregaon Park: Rent, Lease, Buy, Sell",
    description:
      "Flats and commercial space for rent, lease, buy and sell in Koregaon Park, Pune. MahaRERA registered channel partner. Meetings by appointment.",
    h1: "Property in Koregaon Park: flats and commercial space",
    lead:
      "Koregaon Park mixes apartments, bungalows, cafes and offices in a central part of Pune. Share what you need and matching options are shortlisted.",
    short:
      "Assetzpro Services helps with flats and commercial space to rent, lease, buy or sell in Koregaon Park, Pune. Pavan Vatyani is MahaRERA registered (A52100037796). Meetings are by appointment.",
    about: [
      "Koregaon Park is a well-known central locality of Pune, with tree-lined lanes, apartment buildings, bungalows, cafes, restaurants and offices. It is close to the city centre and to the Kalyani Nagar and Mundhwa side of the city.",
      "Properties here vary a lot between lanes and buildings, and many are older, so the condition of the building, the society's records and the exact lane matter more than the locality name.",
    ],
    residential: {
      heading: "Flats for rent and sale in Koregaon Park",
      body: "Tenants and buyers look for apartments in older and newer buildings and, in some cases, bungalows and independent houses. Ask about the age of the building, the lift, parking, the society's rules and the monthly maintenance. Owners can share the building, size and expected rent or price to start.",
    },
    commercial: {
      heading: "Offices and shops on lease in Koregaon Park",
      body: "Boutique offices, studios, cafes and retail units are common. The permitted use of the unit and any extra approvals matter a lot for cafes, clinics and similar businesses, so confirm them before you sign and agree the lock-in, the deposit and the yearly increase in writing.",
    },
    checks: {
      heading: "What to check in Koregaon Park",
      items: [
        "For an older building, ask for the sale deed, society records and the latest tax receipts.",
        "Check parking and access on the specific lane, which can be tight at busy hours.",
        "Confirm the permitted use if you plan a business, such as a cafe, clinic or office.",
        "Ask for the lock-in, notice period and deposit refund terms in writing.",
        "Pay by bank transfer against a receipt.",
      ],
    },
    faqs: [
      { q: "Can I find a flat for rent in Koregaon Park through Assetzpro?", a: "Yes. Share your budget, the size and your move-in date and matching flats in Koregaon Park and nearby areas are shortlisted, subject to availability." },
      { q: "Is commercial space available on lease in Koregaon Park?", a: "Availability changes. Share the type of business, the size and your budget and matching offices and shops are shortlisted for a visit." },
      { q: "Is parking a problem in Koregaon Park?", a: "It can be on some lanes and in older buildings, so ask about dedicated parking for the unit before you commit." },
      { q: "Do I pay to enquire?", a: "No. Enquiring is free, and any brokerage is agreed in writing before work starts." },
    ],
    near: ["kalyani-nagar", "mundhwa", "viman-nagar", "kharadi"],
  },

  "viman-nagar": {
    slug: "viman-nagar",
    name: "Viman Nagar",
    seoTitle: "Flats and Offices in Viman Nagar, Pune",
    description:
      "Flats for rent and sale, offices and shops on lease in Viman Nagar, Pune, near the airport. MahaRERA registered channel partner.",
    h1: "Flats and offices for rent, lease, buy and sell in Viman Nagar",
    lead:
      "Viman Nagar is next to Pune airport and combines apartments, offices and retail. Share your requirement and matching options are shortlisted for a visit.",
    short:
      "Assetzpro Services helps with flats, offices and shops to rent, lease, buy or sell in Viman Nagar, Pune. Pavan Vatyani is MahaRERA registered (A52100037796). Meetings are by appointment.",
    about: [
      "Viman Nagar lies next to Pune airport on the Nagar Road side, close to Kalyani Nagar and Kharadi. It has apartment buildings, offices, shops and a large retail destination, Phoenix Marketcity, within the wider area.",
      "People who travel often, and tenants who work on the airport or Nagar Road side, tend to look here. Noise and traffic vary by street, so visit at different times before you decide.",
    ],
    residential: {
      heading: "Flats for rent and sale in Viman Nagar",
      body: "Apartments range from older buildings to newer projects. Check the floor, the building's age, parking, the lift and the monthly maintenance, and ask the society about tenant rules. If you travel often, check the real route to the airport and to your workplace.",
    },
    commercial: {
      heading: "Offices and shops on lease in Viman Nagar",
      body: "Offices and shops here suit businesses that want a central east Pune address with good road access. Confirm the permitted use, the carpet and built-up areas, parking, the lock-in and the yearly increase, and agree fit-out and exit terms in writing.",
    },
    checks: {
      heading: "What to check in Viman Nagar",
      items: [
        "Visit at different times of day, as traffic and aircraft noise can vary by street.",
        "For a project, check the MahaRERA registration and the possession date.",
        "For an office, confirm approved use, parking and access hours.",
        "Ask what maintenance includes and who pays it.",
        "Get every agreed term in writing before you pay.",
      ],
    },
    faqs: [
      { q: "Can I find a flat for rent in Viman Nagar through Assetzpro?", a: "Yes. Share your budget, size and move-in date and matching flats in Viman Nagar and nearby Kalyani Nagar and Kharadi are shortlisted, subject to availability." },
      { q: "Is office space on lease available in Viman Nagar?", a: "Availability changes. Share the size, budget and number of people and matching offices are shortlisted for a visit." },
      { q: "Is aircraft noise a concern in Viman Nagar?", a: "It can be on some streets and floors, so visit at different times of day before you commit." },
      { q: "Do I pay to enquire?", a: "No. Enquiring is free, and any brokerage is agreed in writing before work starts." },
    ],
    near: ["kalyani-nagar", "kharadi", "koregaon-park", "mundhwa"],
  },

  "kalyani-nagar": {
    slug: "kalyani-nagar",
    name: "Kalyani Nagar",
    seoTitle: "Property in Kalyani Nagar, Pune: Rent, Lease, Buy",
    description:
      "Flats for rent and sale, offices and shops on lease in Kalyani Nagar, Pune. MahaRERA registered channel partner. Meetings by appointment.",
    h1: "Property in Kalyani Nagar: flats, offices and shops",
    lead:
      "Kalyani Nagar is a residential and commercial locality on the Nagar Road side of Pune. Share your requirement and matching options are shortlisted for a visit.",
    short:
      "Assetzpro Services helps with flats, offices and shops to rent, lease, buy or sell in Kalyani Nagar, Pune. Pavan Vatyani is MahaRERA registered (A52100037796). Meetings are by appointment.",
    about: [
      "Kalyani Nagar is a residential and commercial locality on the Nagar Road side of Pune, between Koregaon Park, Viman Nagar and Yerawada. It has apartment buildings, offices, restaurants and retail, and many of its buildings and streets are well established.",
      "It suits people who want a central east Pune address with quick access to several neighbouring areas. As elsewhere, the building and the street decide the experience more than the locality name.",
    ],
    residential: {
      heading: "Flats for rent and sale in Kalyani Nagar",
      body: "Tenants and buyers look for apartments in established buildings and newer projects. Ask about the age of the building, parking, the lift and the monthly maintenance, check the society's rules for tenants, and share your budget and size for a shortlist.",
    },
    commercial: {
      heading: "Offices and shops on lease in Kalyani Nagar",
      body: "Offices, showrooms and retail units serve businesses that want a central east Pune address. Confirm the permitted use, the carpet area, parking and access, and agree the lock-in, the deposit and the yearly increase in writing before you sign.",
    },
    checks: {
      heading: "What to check in Kalyani Nagar",
      items: [
        "Visit at your usual travel hour, because traffic on the Nagar Road side can change the real commute.",
        "For a project, check the MahaRERA registration.",
        "For an older building, ask for the sale deed, society records and tax receipts.",
        "For a business, confirm the approved use of the unit.",
        "Pay by bank transfer and keep every receipt.",
      ],
    },
    faqs: [
      { q: "Can I find a flat for rent in Kalyani Nagar through Assetzpro?", a: "Yes. Share your budget, size and move-in date and matching flats in Kalyani Nagar and nearby Koregaon Park and Viman Nagar are shortlisted, subject to availability." },
      { q: "Is commercial space available on lease in Kalyani Nagar?", a: "Availability changes. Share the type of business, size and budget and matching offices and shops are shortlisted for a visit." },
      { q: "How do I start?", a: "Message on WhatsApp with the area, the type of property, your budget and your timeline. Meetings are by appointment." },
      { q: "Do I pay to enquire?", a: "No. Enquiring is free, and any brokerage is agreed in writing before work starts." },
    ],
    near: ["koregaon-park", "viman-nagar", "kharadi", "mundhwa"],
  },

  mundhwa: {
    slug: "mundhwa",
    name: "Mundhwa",
    seoTitle: "Flats and Commercial Space in Mundhwa, Pune",
    description:
      "Flats for rent and sale, shops and offices on lease in Mundhwa, Pune. MahaRERA registered channel partner. Meetings by appointment.",
    h1: "Flats and commercial space for rent, lease, buy and sell in Mundhwa",
    lead:
      "Mundhwa sits between Koregaon Park, Magarpatta and Kharadi. Share your requirement and matching flats, shops and offices are shortlisted for a visit.",
    short:
      "Assetzpro Services helps with flats, shops and offices to rent, lease, buy or sell in Mundhwa, Pune. Pavan Vatyani is MahaRERA registered (A52100037796). Meetings are by appointment.",
    about: [
      "Mundhwa lies between Koregaon Park and Kalyani Nagar on one side and Magarpatta, Hadapsar and Kharadi on the other. That position gives quick access to several of east Pune's main areas, and newer residential projects have come up there.",
      "Streets and buildings vary a lot, so look at the specific location, the connecting roads and the surroundings rather than the name alone.",
    ],
    residential: {
      heading: "Flats for rent and sale in Mundhwa",
      body: "Newer projects and older buildings both exist. Tenants often choose Mundhwa for the access to Magarpatta, Kharadi and Koregaon Park, and buyers compare projects on possession date, RERA status and the surroundings. Share your budget, the size and your move-in date for a shortlist.",
    },
    commercial: {
      heading: "Shops and offices on lease in Mundhwa",
      body: "Shops along the main roads and small offices suit local businesses. Check frontage, parking and the approved use for a shop, and access for staff and customers for an office. Agree the lock-in, the deposit, the maintenance and the yearly increase in writing.",
    },
    checks: {
      heading: "What to check in Mundhwa",
      items: [
        "Visit the exact street at different times, as road conditions vary.",
        "For a new project, check the MahaRERA registration and possession date.",
        "Confirm parking and the lift for the specific building.",
        "Ask what maintenance covers and who pays it.",
        "Put every agreed term in writing before paying.",
      ],
    },
    faqs: [
      { q: "Can I get a flat for rent in Mundhwa through Assetzpro?", a: "Yes. Share your budget, size and move-in date and matching flats in Mundhwa and nearby Magarpatta, Kharadi and Koregaon Park are shortlisted, subject to availability." },
      { q: "Is commercial space available on lease in Mundhwa?", a: "Availability changes. Share the size, budget and type of business and matching shops and offices are shortlisted for a visit." },
      { q: "Is Mundhwa close to Magarpatta and Kharadi?", a: "Yes, both are nearby, but test the real travel time at your usual hour, as it depends on the exact location and traffic." },
      { q: "Do I pay to enquire?", a: "No. Enquiring is free, and any brokerage is agreed in writing before work starts." },
    ],
    near: ["magarpatta", "kharadi", "koregaon-park", "amanora"],
  },
};

export const PUNE_AREA_ORDER: PuneAreaSlug[] = [
  "amanora",
  "magarpatta",
  "hadapsar",
  "kharadi",
  "koregaon-park",
  "viman-nagar",
  "kalyani-nagar",
  "mundhwa",
];

/** Matches the area names listed on the main Pune page, so each card can link to its own page. */
export const PUNE_AREA_BY_NAME: Record<string, PuneAreaSlug> = {
  "Amanora Park Town": "amanora",
  "Magarpatta City": "magarpatta",
  Hadapsar: "hadapsar",
  Kharadi: "kharadi",
  "Koregaon Park": "koregaon-park",
  "Viman Nagar": "viman-nagar",
  "Kalyani Nagar": "kalyani-nagar",
  Mundhwa: "mundhwa",
};
