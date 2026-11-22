import type { Faq } from "@/components/seo/faq-section";
import type { PuneAreaSlug } from "@/lib/pune-areas";

/**
 * Exact-search pages: /real-estate/pune/[area]/[kind]-for-[mode]
 * e.g. /real-estate/pune/amanora/flat-for-rent
 *
 * Each page carries its own area text, checklist and questions. No listings, prices or
 * rents are shown or implied, because none are held to display.
 */
export type Kind = "flat" | "office" | "shop";
export type Mode = "rent" | "sale";
export type IntentSlug = `${Kind}-for-${Mode}`;

export const INTENT_ORDER: IntentSlug[] = [
  "flat-for-rent",
  "flat-for-sale",
  "office-for-rent",
  "office-for-sale",
  "shop-for-rent",
  "shop-for-sale",
];

/** Areas that have intent pages (phase 1). */
export const INTENT_AREAS: PuneAreaSlug[] = ["amanora", "magarpatta", "kharadi", "hadapsar"];

export function parseIntent(slug: string): { kind: Kind; mode: Mode } | null {
  const m = /^(flat|office|shop)-for-(rent|sale)$/.exec(slug);
  return m ? { kind: m[1] as Kind, mode: m[2] as Mode } : null;
}

export const KIND_LABEL: Record<Kind, { noun: string; plural: string; heading: string }> = {
  flat: { noun: "flat", plural: "flats", heading: "Flat" },
  office: { noun: "office", plural: "offices", heading: "Office" },
  shop: { noun: "shop", plural: "shops", heading: "Shop" },
};

export const INTENT_LABEL: Record<IntentSlug, string> = {
  "flat-for-rent": "Flat for rent",
  "flat-for-sale": "Flat for sale",
  "office-for-rent": "Office for rent",
  "office-for-sale": "Office for sale",
  "shop-for-rent": "Shop for rent",
  "shop-for-sale": "Shop for sale",
};

type AreaIntentCopy = {
  short: string; // used in titles and headings: "Amanora"
  full: string; // "Amanora Park Town"
  local: Record<Kind, Record<Mode, string>>;
  hubs: string[]; // commercial places people ask about
  specific: Record<Kind, { q: string; rent: string; sale: string }>;
};

export const AREA_COPY: Partial<Record<PuneAreaSlug, AreaIntentCopy>> = {
  amanora: {
    short: "Amanora",
    full: "Amanora Park Town",
    hubs: ["The township's mall and retail streets", "Magarpatta City, a short distance away", "Commercial buildings in Hadapsar"],
    local: {
      flat: {
        rent: "Tenants in Amanora Park Town are mostly families and working professionals who want a township with a mall, schools and open grounds inside one campus, and a short ride to Magarpatta, Hadapsar and Kharadi. Compare towers on floor, facing, building age, parking and monthly maintenance, because two flats with the same BHK can feel very different. Owners who want to let a flat can share the tower, size and expected rent.",
        sale: "Buyers in Amanora Park Town usually compare resale flats tower by tower. Ask for the sale deed, society NOC, latest tax receipt and details of any loan on the flat, and compare the floor, facing, parking and maintenance with similar flats in the same township. Owners who want to sell can share the tower, size and expected price for a buyer match.",
      },
      office: {
        rent: "Amanora is mainly residential, so offices nearby are usually small: consulting rooms, start-ups and service businesses that want staff close to home. Magarpatta City and the commercial buildings of Hadapsar are a short distance away, so compare space across the three areas, and ask about carpet area, access hours, parking and the permitted use.",
        sale: "An office purchase near Amanora usually suits a professional or small business that wants its own space instead of paying rent. Check that the unit is approved for office use, compare the carpet and built-up area, and ask for the title papers, the occupation certificate and any dues to the building before you pay a booking amount.",
      },
      shop: {
        rent: "Shops serving a large township depend on where the unit sits: inside the campus, on a main road or on a quiet lane. Compare frontage, visibility, parking, the permitted use and who pays maintenance, and look at which businesses already operate nearby so that your shop does not compete with a better-placed neighbour.",
        sale: "A shop purchase near Amanora is a long-term decision, so ask who the current tenant is, what rent is paid and when the agreement ends. Check the approved use, the frontage and signage rights, the property tax record and the title papers, and compare the price with similar units in the same lane.",
      },
    },
    specific: {
      flat: {
        q: "Which towers in Amanora Park Town should I look at?",
        rent: "That depends on budget, floor and flat size. Share the numbers and matching towers are shortlisted. Compare floor, facing, parking and maintenance within the same tower before you decide.",
        sale: "That depends on budget, floor and flat size. Share the numbers and matching towers are shortlisted. For each flat, compare the price with similar flats in the same tower and check the documents.",
      },
      office: {
        q: "Is there office space near Amanora Park Town?",
        rent: "Small offices and consulting rooms are asked for here, and larger space is usually found in nearby Magarpatta City and Hadapsar. Share the size and budget and options across the three areas are shortlisted.",
        sale: "Small commercial units are found in and around the township, and larger units in nearby Magarpatta City and Hadapsar. Share the size and budget and matching units are shortlisted, subject to availability.",
      },
      shop: {
        q: "Does the position of a shop in Amanora Park Town matter?",
        rent: "Yes. A shop inside the campus, on a main road or on a quiet lane gets very different footfall. Visit at your trading hours and compare frontage and parking before you agree the rent.",
        sale: "Yes. Footfall differs between a shop inside the campus, on a main road and on a quiet lane, which affects both the rent it can earn and its resale value. Compare similar units in the same lane.",
      },
    },
  },

  magarpatta: {
    short: "Magarpatta",
    full: "Magarpatta City",
    hubs: ["Cybercity, the IT and office park inside the township", "Destination Centre and other commercial buildings", "Shops and retail inside the township"],
    local: {
      flat: {
        rent: "Magarpatta City is an integrated township in Hadapsar with residential societies, offices, shops, schools and green spaces in one campus. Tenants who work in Cybercity often choose it to keep the journey short. Societies differ in age, size and rules, so compare the society and the exact flat on floor, parking, power backup and maintenance, and check early whether the society asks for a copy of the agreement and identity papers.",
        sale: "Magarpatta City resale flats are usually compared society by society. Ask for the sale deed, society NOC, latest tax receipt and any loan details, and compare the flat's floor, size and maintenance with others in the same society. Owners who want to sell can share the society, size and expected price.",
      },
      office: {
        rent: "Cybercity, the IT and office park inside Magarpatta City, and commercial buildings such as Destination Centre add office space to the township. Compare the carpet and built-up areas, parking, internet options, access hours, the lock-in and the yearly increase, and agree who pays for fit-out and what happens to it when the lease ends.",
        sale: "Buying an office in or near Magarpatta City suits a business that wants a permanent address close to the township's workforce. Check the approved use, the carpet and built-up area, the occupation certificate and dues to the building, and ask whether a tenant is already in the unit and on what terms.",
      },
      shop: {
        rent: "Shops in Magarpatta City serve residents and office staff inside the township, so footfall follows the daily routine of the campus. Compare the position, frontage, parking and permitted use, and ask the society or building about rules on signage, trading hours and the kind of business allowed.",
        sale: "A shop purchase in Magarpatta City depends on the position within the township and on the rules of the society or building. Check the approved use, signage and trading rules, the current tenant and rent, the property tax record and the title papers before you pay a booking amount.",
      },
    },
    specific: {
      flat: {
        q: "How do I choose a society in Magarpatta City?",
        rent: "Compare societies on age, size, tenant rules, parking and maintenance, not only on rent, and test the real travel time to your workplace. Share your needs and matching societies are shortlisted.",
        sale: "Compare societies on age, size, parking, maintenance and the price of similar flats in the same society, and check the documents for the exact flat. Share your needs and matching societies are shortlisted.",
      },
      office: {
        q: "Can a flat in Magarpatta City be used as an office?",
        rent: "Usually not. Societies often do not allow business use, so confirm the permitted use in writing. Offices are normally taken in commercial buildings such as those in Cybercity and Destination Centre.",
        sale: "Usually not. Societies often do not allow business use, so a purchase for office use should be a unit approved as commercial. Confirm the approved use before you pay a booking amount.",
      },
      shop: {
        q: "Who decides what business a shop in Magarpatta City can run?",
        rent: "The approved use of the unit and the rules of the society or building both matter. Ask for the permitted use and any signage or timing rules in writing before you pay a deposit.",
        sale: "The approved use of the unit and the rules of the society or building both matter. Ask for them in writing, because they affect who can rent the shop later and what it can earn.",
      },
    },
  },

  kharadi: {
    short: "Kharadi",
    full: "Kharadi",
    hubs: ["EON IT Park", "World Trade Center Pune", "Business parks and commercial buildings"],
    local: {
      flat: {
        rent: "Kharadi is a main IT and office area on the east side of Pune, off Nagar Road, close to EON IT Park and World Trade Center Pune, so rental demand follows the office workforce. Compare 1, 2 and 3 BHK flats on the real travel time at your usual hour, the building's age, parking and maintenance, as newer projects, construction and road works are common.",
        sale: "Many buyers in Kharadi look at newer projects as well as resale flats. For a project, check the MahaRERA registration, the promised possession date and the quality of the surroundings. For a resale flat, ask for the sale deed, society NOC, latest tax receipt and loan details.",
      },
      office: {
        rent: "Kharadi's business parks and commercial buildings, including EON IT Park and World Trade Center Pune, draw companies that want staff close to the IT cluster. Ask for the carpet area, parking, power backup, internet options and lock-in, and agree the yearly increase and fit-out terms in writing.",
        sale: "Buying an office in Kharadi suits a business that wants to own space near the IT parks. Confirm the approved use, the carpet and built-up area, parking, the occupation certificate and building dues, and ask whether the unit is already let and on what terms.",
      },
      shop: {
        rent: "Shops in Kharadi mostly serve the residential projects and the office crowd, so lunchtime and evening footfall matters. Compare frontage, visibility, parking and the permitted use, and check who pays maintenance and whether GST applies to the rent.",
        sale: "A shop purchase in Kharadi often depends on the surrounding residential projects and the office crowd. Check the approved use, the current tenant and rent, the title papers, the property tax record and whether GST or other charges apply before paying a booking amount.",
      },
    },
    specific: {
      flat: {
        q: "Is Kharadi only for people who work in IT?",
        rent: "No. Many tenants work elsewhere, but the area suits people who want to be near the IT parks and business centres. Test the route to your own workplace at your usual hour before you decide.",
        sale: "No. Many buyers live here for other reasons, but demand follows the IT parks and business centres. Compare a project's possession date and RERA status, and check the surroundings on the actual street.",
      },
      office: {
        q: "Are offices in Kharadi only in IT parks?",
        rent: "No. Besides the large business parks, there are smaller offices in commercial buildings. Share the size, budget and number of people and matching options are shortlisted.",
        sale: "No. Besides the large business parks, there are smaller units in commercial buildings. Share the size and budget and matching units are shortlisted, subject to availability.",
      },
      shop: {
        q: "What kind of shops do well in Kharadi?",
        rent: "That depends on the exact spot. Food, daily needs and services near residential projects and office clusters are typical asks. Visit at lunchtime and in the evening to judge footfall before you commit.",
        sale: "That depends on the exact spot. Units near residential projects and office clusters are typical asks. Visit at lunchtime and in the evening to judge footfall, and compare similar shops on the same stretch.",
      },
    },
  },

  hadapsar: {
    short: "Hadapsar",
    full: "Hadapsar",
    hubs: ["Commercial buildings along Solapur Road", "Hadapsar Industrial Estate", "Shops on the main roads"],
    local: {
      flat: {
        rent: "Hadapsar is a long-established part of east Pune along Solapur Road, with older societies, newer projects and township flats side by side, so the exact building and street matter more than the area name. Tenants often want a short commute to Magarpatta, Kharadi or the industrial estate; test the route at your usual hour.",
        sale: "Hadapsar has everything from older societies to new projects. For a project, compare possession date and MahaRERA status with the brochure. For a resale flat, ask for the sale deed, society NOC, latest tax receipt and loan details, and compare the price with similar flats on the same street.",
      },
      office: {
        rent: "Offices in Hadapsar are mostly small and mid-sized units in commercial buildings along Solapur Road and the roads around it, close to Hadapsar Industrial Estate. Compare access for staff and customers, parking, the permitted use, the lock-in and the maintenance before you sign.",
        sale: "Buying an office in Hadapsar suits a business that wants a fixed base on Solapur Road or near the industrial estate. Check the approved use, the carpet and built-up area, the occupation certificate, building dues and the title papers, and ask whether the unit is already let.",
      },
      shop: {
        rent: "Shops along Hadapsar's main roads depend on frontage, footfall and parking. Compare how visible the shop is from the road, whether customers can park, and the permitted use, and check the lock-in, the yearly increase, the deposit and who pays maintenance and property tax.",
        sale: "A shop purchase in Hadapsar depends heavily on the road and the frontage. Ask who the current tenant is and what rent is paid, check the approved use, signage rights, the property tax record and the title papers, and compare the price with similar shops on the same stretch.",
      },
    },
    specific: {
      flat: {
        q: "Does Hadapsar include Magarpatta and Amanora?",
        rent: "Both townships sit within the wider Hadapsar area, so flats there are also shortlisted if they match. Share your budget and size, and say whether you want a township or a regular society.",
        sale: "Both townships sit within the wider Hadapsar area, so flats there are also shortlisted if they match. Share your budget and size, and say whether you want a township or a regular society.",
      },
      office: {
        q: "Is Hadapsar a good location for a small office?",
        rent: "Many small businesses choose it for access from several parts of east Pune. Test the travel time for your staff and customers at your usual hours, and compare parking before you decide.",
        sale: "Many small businesses choose it for access from several parts of east Pune. Test the travel time for staff and customers, compare parking, and check the documents for the exact unit.",
      },
      shop: {
        q: "What should I look at first in a Hadapsar shop?",
        rent: "Frontage and visibility from the road, parking for customers and the permitted use. Visit at your trading hours and compare similar shops on the same stretch.",
        sale: "Frontage and visibility from the road, parking for customers, the current tenant and the title papers. Compare similar shops on the same stretch before you decide.",
      },
    },
  },
};

/** Checklist per property type and mode. */
export const CHECKS: Record<IntentSlug, { heading: (a: string) => string; items: string[] }> = {
  "flat-for-rent": {
    heading: (a) => `What to check before renting a flat in ${a}`,
    items: [
      "Ask what the monthly maintenance covers and who pays it, and whether the society has rules for tenants.",
      "Match the name on the ownership papers to the person who signs the agreement.",
      "Confirm parking, power backup and lift access for the specific building and floor.",
      "Agree the deposit, how it is refunded and the notice period, and get them in writing.",
      "Pay by bank transfer and keep a receipt for every amount.",
    ],
  },
  "flat-for-sale": {
    heading: (a) => `What to check before buying a flat in ${a}`,
    items: [
      "Ask for the sale deed, society NOC, latest property tax receipt and a maintenance dues certificate.",
      "Ask whether a loan is running on the flat and how it will be closed at sale.",
      "For a project, check the MahaRERA registration and the promised possession date.",
      "Compare the price with similar flats in the same building before you negotiate.",
      "Keep every amount agreed in writing and pay by bank transfer against a receipt.",
    ],
  },
  "office-for-rent": {
    heading: (a) => `What to check before taking an office on rent in ${a}`,
    items: [
      "Confirm the approved use of the unit and what the quoted area includes, carpet or built-up.",
      "Ask for the lock-in period, notice period and the yearly increase in writing.",
      "Ask whether GST applies to the rent and who pays maintenance, parking and power.",
      "Agree who pays for fit-out and what happens to it when the lease ends.",
      "Check access hours, parking and internet options for your staff and visitors.",
    ],
  },
  "office-for-sale": {
    heading: (a) => `What to check before buying an office in ${a}`,
    items: [
      "Check the title papers and that the unit is approved for office use.",
      "Compare the carpet and built-up area with what you are paying for.",
      "Ask for the occupation certificate and any dues to the building or society.",
      "Ask whether a tenant is in the unit, and get the agreement, rent and end date.",
      "Ask a chartered accountant or lawyer about GST, stamp duty and registration costs for your case.",
    ],
  },
  "shop-for-rent": {
    heading: (a) => `What to check before taking a shop on rent in ${a}`,
    items: [
      "Visit at your trading hours to judge footfall, frontage and visibility.",
      "Confirm the permitted use, signage rights and any licences your business needs.",
      "Ask for the lock-in, the yearly increase and the deposit refund terms in writing.",
      "Ask whether GST applies to the rent and who pays maintenance and property tax.",
      "Check parking for customers and deliveries.",
    ],
  },
  "shop-for-sale": {
    heading: (a) => `What to check before buying a shop in ${a}`,
    items: [
      "Check the title papers and that the shop is approved for retail use.",
      "If it is let, ask for the agreement, rent, lock-in and end date, and confirm the tenant will continue.",
      "Ask for the property tax record, the occupation certificate and any dues.",
      "Check frontage, signage rights and parking, and compare with similar shops on the same stretch.",
      "Ask a chartered accountant or lawyer about GST, stamp duty and registration costs for your case.",
    ],
  },
};

/** Short steps per mode, shown as "How it works". */
export const STEPS: Record<Mode, { title: string; body: string }[]> = {
  rent: [
    { title: "Share your requirement", body: "Message the size, budget, move-in date and any must-haves on WhatsApp or the enquiry form." },
    { title: "Get a shortlist", body: "Matching options are lined up, subject to availability. Nothing is shown that is not actually available." },
    { title: "Visit by appointment", body: "Visits are fixed at a time that suits you and the owner." },
    { title: "Agree the terms in writing", body: "Deposit, rent, lock-in and notice period go into the agreement, which is normally registered in Maharashtra." },
  ],
  sale: [
    { title: "Share your requirement", body: "Message the size, budget, possession timeline and any must-haves on WhatsApp or the enquiry form." },
    { title: "Get a shortlist", body: "Matching options are lined up, subject to availability. Nothing is shown that is not actually available." },
    { title: "Check the documents", body: "Title papers, society NOC, tax receipts and loan details are checked before you pay a booking amount." },
    { title: "Agree and register", body: "Price, payment schedule and possession date go into a written agreement, followed by registration." },
  ],
};

/** Generic questions per type and mode. {A} is replaced with the area name. */
const GENERIC: Record<IntentSlug, { q: string; a: string }[]> = {
  "flat-for-rent": [
    { q: "How is a flat rental agreement done in {A}?", a: "A residential rental in Maharashtra is usually documented as a leave and license agreement, which is normally registered. Check the current registration and stamp duty rules with the registration department or a lawyer, and keep every amount in writing." },
    { q: "What should I share to get matching flats in {A}?", a: "The number of bedrooms, budget, furnishing preference, move-in date and who will live there. With those, matching flats are shortlisted, subject to availability." },
    { q: "Do I pay to enquire about a flat for rent in {A}?", a: "No. Enquiring is free, and any brokerage is agreed in writing before work starts." },
  ],
  "flat-for-sale": [
    { q: "What documents should I ask for when buying a flat in {A}?", a: "For a resale flat, ask for the sale deed, society NOC, latest property tax receipt, a maintenance dues certificate and details of any loan. For a project, check the MahaRERA registration." },
    { q: "How do I check a project's RERA registration?", a: "Search the project on the MahaRERA website and compare the registered details with the brochure. The RERA check guide on this site explains the steps." },
    { q: "Can I sell my flat in {A} through Assetzpro?", a: "Yes. Share the society, size, floor and expected price. Interested buyers are matched, subject to demand, and brokerage is agreed in writing before work starts." },
  ],
  "office-for-rent": [
    { q: "What lease terms should I agree for an office in {A}?", a: "Agree the lock-in, notice period, yearly increase, deposit, maintenance, fit-out rules and what happens to fit-out at the end. Commercial space is usually documented as a lease or a leave and license, so check which applies and whether it must be registered." },
    { q: "What should I share to get matching offices in {A}?", a: "The size in square feet, budget, number of people, parking needs and start date. With those, matching offices are shortlisted, subject to availability." },
    { q: "Do I pay to enquire about an office for rent in {A}?", a: "No. Enquiring is free, and any brokerage is agreed in writing before work starts." },
  ],
  "office-for-sale": [
    { q: "What should I check before buying an office in {A}?", a: "The title papers, approved use, carpet and built-up area, occupation certificate, building dues and whether a tenant is already in the unit." },
    { q: "Do GST and stamp duty apply to an office purchase?", a: "It depends on the property and its stage. Ask a chartered accountant or a lawyer about GST, stamp duty and registration costs for your case before you pay." },
    { q: "Can I sell my office in {A} through Assetzpro?", a: "Yes. Share the building, size and expected price. Interested buyers are matched, subject to demand, and brokerage is agreed in writing before work starts." },
  ],
  "shop-for-rent": [
    { q: "What matters most when taking a shop on rent in {A}?", a: "Frontage and visibility, footfall at your trading hours, parking, the permitted use and signage rights. Also check the lock-in, the yearly increase and who pays maintenance." },
    { q: "Do I need a licence to run a business from a shop in {A}?", a: "Many businesses need local licences or registrations, depending on the activity. Check with the relevant authority or a professional before you pay a deposit." },
    { q: "Do I pay to enquire about a shop for rent in {A}?", a: "No. Enquiring is free, and any brokerage is agreed in writing before work starts." },
  ],
  "shop-for-sale": [
    { q: "What should I check before buying a shop in {A}?", a: "The title papers, approved use, current tenant and rent, property tax record, occupation certificate and any dues, plus frontage and signage rights." },
    { q: "Can I buy a shop that is already let?", a: "Yes, but ask for the agreement, the rent, the lock-in and the end date, and confirm the tenant will continue. The income depends on the tenant staying." },
    { q: "Can I sell my shop in {A} through Assetzpro?", a: "Yes. Share the location, size and expected price. Interested buyers are matched, subject to demand, and brokerage is agreed in writing before work starts." },
  ],
};

export function buildIntentPage(area: PuneAreaSlug, slug: IntentSlug) {
  const copy = AREA_COPY[area];
  const parsed = parseIntent(slug);
  if (!copy || !parsed) return null;
  const { kind, mode } = parsed;
  const word = KIND_LABEL[kind];
  const a = copy.short;
  const rentSale = mode === "rent" ? "rent" : "sale";

  const title =
    slug === "flat-for-rent" ? `Flat for Rent in ${a}, Pune: 1, 2 and 3 BHK`
    : slug === "flat-for-sale" ? `Flat for Sale in ${a}, Pune: Check Before You Buy`
    : slug === "office-for-rent" ? `Office Space for Rent in ${a}, Pune`
    : slug === "office-for-sale" ? `Office for Sale in ${a}, Pune: Buy Commercial Space`
    : slug === "shop-for-rent" ? `Shop for Rent in ${a}, Pune: Retail and Showroom`
    : `Shop for Sale in ${a}, Pune: Buy Retail Space`;

  const h1 =
    mode === "rent"
      ? `${word.heading} for rent in ${a}, Pune`
      : `${word.heading} for sale in ${a}, Pune`;

  const description =
    mode === "rent"
      ? `${word.heading} for rent in ${copy.full}, Pune. Share size, budget and date, get matching options. MahaRERA registered. By appointment.`
      : `${word.heading} for sale in ${copy.full}, Pune. Share size, budget and timeline, get matching options. MahaRERA registered. By appointment.`;

  const lead =
    mode === "rent"
      ? `Looking for a ${word.noun} for rent in ${copy.full}? Share the size, budget and move-in date and ${word.plural} that match are shortlisted for a visit. Owners who want to let a ${word.noun} can share the details too.`
      : `Looking for a ${word.noun} for sale in ${copy.full}? Share the size, budget and timeline and ${word.plural} that match are shortlisted. Owners who want to sell a ${word.noun} can share the details too.`;

  const short =
    `Assetzpro Services helps with a ${word.noun} for ${rentSale} in ${copy.full}, Pune. ` +
    `Enquiring is free, availability changes, and nothing is listed that is not actually available. ` +
    `Pavan Vatyani is MahaRERA registered (A52100037796). Meetings are by appointment.`;

  const spec = copy.specific[kind];
  const faqs: Faq[] = [
    { q: spec.q, a: mode === "rent" ? spec.rent : spec.sale },
    ...GENERIC[slug].map((g) => ({ q: g.q.replaceAll("{A}", a), a: g.a })),
  ];

  const heading =
    mode === "rent"
      ? `${word.heading} for rent in ${copy.full}`
      : `${word.heading} for sale in ${copy.full}`;

  return {
    slug, kind, mode, areaShort: a, areaFull: copy.full,
    title, h1, description, lead, short, heading,
    local: copy.local[kind][mode],
    hubs: copy.hubs,
    checks: { heading: CHECKS[slug].heading(a), items: CHECKS[slug].items },
    steps: STEPS[mode],
    faqs,
  };
}
