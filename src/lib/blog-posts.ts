export type BlogSection = { heading?: string; body: string[] };

export type BlogPost = {
  slug: string;
  category: "Mutual Funds" | "Real Estate" | "Insurance" | "Loans" | "Personal Finance";
  title: string;
  seoTitle?: string;
  excerpt: string;
  readTime: string;
  date: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-check-rera-registration-maharashtra-gujarat",
    category: "Real Estate",
    title: "How to Check RERA Registration in Maharashtra and Gujarat",
    excerpt: "A project's RERA number can be checked online in a few minutes. Here is what to look up, what to compare and what should make you pause.",
    readTime: "4 min read",
    date: "October 2026",
    sections: [
      { body: ["The short answer: search the project on the state RERA website, which is MahaRERA for Maharashtra and GujRERA for Gujarat, and compare the registration number in the brochure with the portal record. If the numbers do not match, or no record is found, stop and ask the seller to explain before paying anything."] },
      { heading: "Step 1: Get the registration number", body: ["Ask for the RERA registration number of the project. It should appear on the brochure, the website and the advertisements. Maharashtra numbers usually begin with the letter P followed by digits. The format differs in Gujarat, so copy the number exactly as given."] },
      { heading: "Step 2: Search the state portal", body: ["Open the official MahaRERA or GujRERA website and use the registered projects search. You can search by project name, promoter name, location or registration number. Use only the official government sites, not a listing portal's copy of the data."] },
      { heading: "Step 3: Compare what the portal shows", body: ["Check that the promoter and project name match the brochure, that the registration is still valid, and what completion date is stated. Look at the approved layout, the number of units and the progress updates the promoter has filed. A large gap between the promised and registered completion date is worth a question."] },
      { heading: "Step 4: Check the agent too", body: ["Agents who help with sales in registered projects must also be registered with the state authority and should quote their registration number. Pavan Vatyani's MahaRERA number is A52100037796. Anup Vatyani's GujRERA number is AG/AHMEDABAD/AHMEDABAD CITY/A403336/200529. Both can be looked up on the respective portal."] },
      { heading: "What a RERA check does not cover", body: ["RERA registration is not a guarantee of quality or a replacement for legal checks. The title deed, the encumbrance certificate, the approved plan and, for a ready flat, the occupancy certificate still need to be reviewed. Rules and portal layouts change, so use the official site for the current position."] },
    ],
  },
  {
    slug: "sip-vs-lumpsum-how-to-choose",
    category: "Mutual Funds",
    title: "SIP vs Lumpsum: How to Choose Between the Two",
    excerpt: "A SIP spreads money over months, a lumpsum goes in at once. Which one fits depends on how the money arrives and how long it can stay invested.",
    readTime: "4 min read",
    date: "October 2026",
    sections: [
      { body: ["The short answer: a SIP suits money that arrives monthly, such as a salary, and a lumpsum suits money that arrives all at once, such as a bonus or a sale of property. Neither guarantees a better result, because mutual fund returns are market-linked. Mutual Fund investments are subject to market risks, read all scheme related documents carefully."] },
      { heading: "What a SIP does", body: ["A Systematic Investment Plan invests a fixed amount at a set interval, usually monthly. Because the amount is fixed, more units are bought when the price is low and fewer when it is high. This averages the purchase cost over time, but it does not protect against a falling market or promise a profit."] },
      { heading: "What a lumpsum does", body: ["A lumpsum puts the whole amount in on one day. All of it starts working immediately, but all of it is also exposed to the price on that day. Some investors split a large amount into a few instalments to reduce the effect of timing."] },
      { heading: "How to decide", body: ["Start with where the money comes from. A monthly surplus naturally fits a SIP. A one-time amount can go in as a lumpsum or in stages. Then look at the goal: money needed in under three years should be in lower-risk funds whichever method is used, while longer goals can take more market risk."] },
      { heading: "Try the numbers", body: ["The SIP calculator and the goal calculator on this site show how an assumed rate changes a monthly amount or a target. The rate is an assumption, not a forecast, so try more than one."] },
    ],
  },
  {
    slug: "how-much-term-insurance-cover-do-you-need",
    category: "Insurance",
    title: "How Much Term Insurance Cover Do You Need?",
    excerpt: "There is no single right figure. Three simple methods give a starting range that you can refine with your own loans, dependants and goals.",
    readTime: "4 min read",
    date: "October 2026",
    sections: [
      { body: ["The short answer: add up what your family would need if your income stopped, then subtract the cover and savings they already have. A common rule of thumb is a multiple of annual income, but it is only a starting point. Insurance is the subject matter of solicitation."] },
      { heading: "Method 1: Income replacement", body: ["Estimate how many years your family would need support, multiply by the annual amount they would need, and adjust for expected rises in costs. A younger person with young children generally needs more years of support than someone close to retirement."] },
      { heading: "Method 2: Needs-based", body: ["List the loans to be cleared, such as a home loan, the cost of future goals such as a child's education, and the living costs of the family for a set period. Add these up and subtract existing cover and liquid savings. This method is more work but uses your actual numbers."] },
      { heading: "Method 3: Rule of thumb", body: ["Some people use a multiple of annual income as a quick check. Treat it as a sanity check only, because it ignores loans, dependants and savings."] },
      { heading: "Review it when life changes", body: ["A new loan, a child, a marriage or a change in income each changes the figure. Cover that was enough five years ago may not be today. The insurance needs calculator on this site works from your own numbers, and Menka Motwani can go through the result with you."] },
    ],
  },
  {
    slug: "home-loan-documents-checklist",
    category: "Loans",
    title: "Home Loan Documents Checklist: What Lenders Usually Ask For",
    excerpt: "Missing papers are one of the commonest reasons a home loan is delayed. Here is a checklist grouped by what each document proves.",
    readTime: "3 min read",
    date: "October 2026",
    sections: [
      { body: ["The short answer: lenders usually ask for proof of identity and address, proof of income, recent bank statements and the property papers. The exact list differs by lender and by whether you are salaried or self-employed, so confirm it with the lender before applying."] },
      { heading: "Identity and address", body: ["PAN card, Aadhaar or another government ID, passport-size photographs and a recent address proof such as a utility bill or rental agreement."] },
      { heading: "Income proof: salaried", body: ["Recent salary slips, Form 16 and the last six months of bank statements for the salary account. Some lenders ask for an employment letter."] },
      { heading: "Income proof: self-employed", body: ["Income tax returns with computation for the last two to three years, balance sheet and profit and loss statements, business proof and bank statements for the business and personal accounts."] },
      { heading: "Property documents", body: ["The sale agreement or allotment letter, title documents, the RERA registration number for an under-construction project, the approved plan and, for a resale, the previous chain of ownership papers. The lender's legal and valuation team reviews these."] },
      { heading: "Before you submit", body: ["Check that names and addresses match across documents, and that statements are recent. Small mismatches cause delay. Pavan Vatyani checks each paper against the lender's list before it is submitted."] },
    ],
  },
  {
    slug: "loan-against-property-vs-personal-loan",
    category: "Loans",
    title: "Loan Against Property vs Personal Loan: Which Fits When",
    excerpt: "Both put money in your account, but one is backed by a property and the other is not. The difference changes the risk, the cost and the tenure.",
    readTime: "4 min read",
    date: "October 2026",
    sections: [
      { body: ["The short answer: a loan against property is secured by a property you own, so lenders can often offer larger amounts and longer tenures, but the property is at risk if repayments stop. A personal loan is unsecured and usually smaller and shorter. Rates and limits vary by lender, so compare actual offers."] },
      { heading: "Loan against property (LAP)", body: ["You mortgage a residential or commercial property you own and receive a loan against its value. Lenders commonly lend only a portion of the property's assessed value. The loan is useful for large needs such as business expansion or a child's education, and it needs property papers and a valuation."] },
      { heading: "Personal loan", body: ["There is no collateral. Approval depends on income, existing obligations and credit history. The process is faster, but amounts are usually smaller and the interest rate is often higher than on a secured loan."] },
      { heading: "What to compare", body: ["Look at the interest rate, processing fees, prepayment charges, tenure and the total amount repaid, not only the monthly instalment. The EMI calculator on this site shows how rate and tenure change the instalment."] },
      { heading: "Which fits when", body: ["For a smaller, short-term need, a personal loan avoids putting a property at risk. For a large amount over a long period, a LAP may cost less per year, but only if the repayment is comfortably affordable."] },
    ],
  },
  {
    slug: "sip-mistakes-first-time-investors",
    category: "Mutual Funds",
    title: "5 Mistakes First-Time SIP Investors Make (and How to Avoid Them)",
    excerpt:
      "Starting your first SIP is exciting — but small early mistakes can quietly cost you years of growth. Here's what to watch for.",
    readTime: "5 min read",
    date: "September 2026",
    sections: [
      {
        body: [
          "Starting a Systematic Investment Plan is one of the best financial decisions a young earner can make. But the same handful of mistakes appear again and again with first-time investors — and they're easy to avoid once you know what to look for.",
        ],
      },
      {
        heading: "1. Stopping the SIP the moment the market dips",
        body: [
          "This is among the most common costly mistakes. Markets go up and down — that's normal, not a warning sign. When you stop your SIP during a dip, you miss out on buying units at a lower price, which is exactly when a SIP works hardest for you. Unless your goal or income situation has genuinely changed, staying invested through the dip is usually the better move.",
        ],
      },
      {
        heading: "2. Chasing last year's best-performing fund",
        body: [
          "A fund that topped the charts last year is not guaranteed to repeat that performance. Picking funds based on a single year's returns is one of the most common — and costly — mistakes. What matters more is consistency over 5-7 years, the fund manager's track record, and whether the fund's strategy actually fits your goal.",
        ],
      },
      {
        heading: "3. Not linking the SIP to a real goal",
        body: [
          "\"I should invest\" is a vague reason to start a SIP, and vague reasons are the first thing people abandon when life gets busy. \"I need ₹15 lakhs for my daughter's college in 12 years\" is a reason you'll stick to. Tie every SIP to a specific goal and timeline — it makes the discipline much easier to maintain.",
        ],
      },
      {
        heading: "4. Ignoring asset allocation as you age",
        body: [
          "The right mix of equity and debt at age 25 is not the right mix at age 55. Many investors set up a SIP once and never revisit it. A periodic review — once a year is enough — to shift some allocation toward more stable options as you approach your goal date protects the wealth you've already built.",
        ],
      },
      {
        heading: "5. Not accounting for taxes and exit loads",
        body: [
          "Redeeming equity fund units before one year attracts short-term capital gains tax, and many funds charge an exit load for early withdrawal. First-time investors are often surprised by this at redemption time. Understanding the tax and exit-load rules for your specific fund before you invest avoids nasty surprises later.",
        ],
      },
      {
        heading: "The bottom line",
        body: [
          "None of these mistakes are complicated to avoid — they just require a plan and someone to periodically sanity-check it with you. That is the kind of ongoing support Anup Vatyani, as Mutual Fund Distributor, provides, with no extra cost beyond the standard distribution commission paid by the fund house.",
        ],
      },
    ],
  },
  {
    slug: "rera-explained-property-buyers-guide",
    category: "Real Estate",
    seoTitle: "RERA Explained: A Property Buyer's Guide | Artha Vriksha",
    title: "RERA Explained: What Every Property Buyer in Maharashtra & Gujarat Should Know",
    excerpt:
      "RERA registration numbers are everywhere in property listings — but what do they actually protect you from? Here's the plain-language guide.",
    readTime: "6 min read",
    date: "September 2026",
    sections: [
      {
        body: [
          "If you've looked at property listings recently, you've probably seen a RERA registration number quoted alongside the price. Most buyers know it's \"important\" without knowing exactly why. Here's what it actually means for you.",
        ],
      },
      {
        heading: "What RERA actually is",
        body: [
          "The Real Estate (Regulation and Development) Act, 2016 requires developers to register most residential and commercial projects with the state's RERA authority — MahaRERA in Maharashtra, GujRERA in Gujarat — before they can advertise, market, or sell units. Registration requires the developer to disclose the project layout, approvals, timeline, and put 70% of buyer payments into an escrow account that can only be used for that project's construction.",
        ],
      },
      {
        heading: "Why the escrow rule matters so much",
        body: [
          "Before RERA, it was common for developers to use money collected from one project's buyers to fund a different, unrelated project — leaving the first project delayed or unfinished. The escrow requirement makes that much harder, which is a major reason project delays have reduced industry-wide since RERA came into force.",
        ],
      },
      {
        heading: "What to actually check before you buy",
        body: [
          "A RERA number being mentioned in a brochure isn't enough — verify it directly on the state authority's website (MahaRERA or GujRERA), where you can see the project's real registered completion date, the developer's other registered projects and their status, and any complaints filed against the project. This takes ten minutes and can save you from a multi-year delay.",
        ],
      },
      {
        heading: "What RERA does not cover",
        body: [
          "RERA registration is not the same as a clean title. It doesn't verify that the land itself is free of disputes, or that the property is zoned correctly for your intended use. That's a separate check — title deed verification and encumbrance certificate review — which is just as important and often skipped by buyers who assume RERA covers everything.",
        ],
      },
      {
        heading: "How the property check works",
        body: [
          "Every property presented by Pavan Vatyani (Maharashtra) or Anup Vatyani (Gujarat) is first checked for RERA registration, title and encumbrance, and the developer's track record — so you're not doing this homework alone. A property found from another source can also be run through the same verification before you commit.",
        ],
      },
    ],
  },
  {
    slug: "term-vs-whole-life-insurance",
    category: "Insurance",
    title: "Term vs Whole Life Insurance: Which Do You Actually Need?",
    excerpt:
      "Insurance agents often push whichever policy pays them more. Here's an honest, unbiased breakdown of the two most common life insurance types.",
    readTime: "5 min read",
    date: "August 2026",
    sections: [
      {
        body: [
          "This is one of the questions asked most often about insurance. Both policy types protect your family financially if something happens to you — but they work very differently, and the right choice depends on your goals, not on which one earns an agent a bigger commission.",
        ],
      },
      {
        heading: "Term insurance: pure protection, low cost",
        body: [
          "A term plan pays a lump sum to your family if you pass away during the policy term — say, 30 years — and pays nothing if you outlive the term. Because there's no savings or investment component, the premium is dramatically lower than whole life insurance for the same cover amount. For most working professionals with dependents, a term plan with a high cover amount (typically 10-15 times your annual income) is the most efficient way to protect your family.",
        ],
      },
      {
        heading: "Whole life insurance: protection plus a savings component",
        body: [
          "A whole life (or endowment) policy combines a smaller death benefit with a savings or investment element, and it pays out even if you outlive the policy — either at maturity or through the accumulated value. The premiums are significantly higher for the same death benefit, and the investment returns embedded in these policies are usually lower than what you'd get investing that premium difference separately in mutual funds.",
        ],
      },
      {
        heading: "The math most people never see",
        body: [
          "A common example: a healthy 30-year-old might pay roughly ₹12,000/year for a ₹1 crore term cover, versus ₹80,000+/year for a whole life policy with a much smaller death benefit and modest maturity value. Investing that ₹68,000 difference in a diversified mutual fund SIP instead, over 30 years, typically builds significantly more wealth than the whole life policy's maturity payout — while still giving your family the larger term cover if something happens to you.",
        ],
      },
      {
        heading: "So which should you buy?",
        body: [
          "For most people in their working years with dependents, the combination of a high-cover term plan plus separate mutual fund investing outperforms a whole life policy on both protection and growth. Whole life insurance can make sense for specific estate-planning or guaranteed-payout needs later in life — but it's rarely the right first policy for a young earner.",
        ],
      },
      {
        heading: "How the choice is made",
        body: [
          "The policy that fits the family's needs matters more than the commission it pays. Walking through your actual numbers shows which structure genuinely fits, among the plans Anup Vatyani is appointed to offer.",
        ],
      },
    ],
  },
  {
    slug: "improve-loan-approval-chances",
    category: "Loans",
    title: "How to Improve Your Loan Approval Chances (Before You Apply)",
    excerpt:
      "Most loan rejections happen for fixable reasons. A little preparation before you apply can be the difference between approval and a hard 'no'.",
    readTime: "4 min read",
    date: "August 2026",
    sections: [
      {
        body: [
          "A rejected loan application doesn't just cost you time — it can also show up on your credit report and make your next application harder. Most rejections come down to a handful of fixable issues. Here's how to walk in prepared.",
        ],
      },
      {
        heading: "Check your credit score before, not after",
        body: [
          "Your CIBIL score is the first thing any bank or NBFC checks. A score below 700 makes approval difficult and pushes up your interest rate even when you do get approved. Check your score yourself before applying — if it's lower than expected, it's usually because of late payments, high credit card utilization, or an error on your report, all of which are fixable in a few months with the right steps.",
        ],
      },
      {
        heading: "Keep your debt-to-income ratio in check",
        body: [
          "Lenders typically want your total EMIs (including the new loan) to stay under 40-50% of your monthly income. If you already have a car loan and credit card EMIs running, that new home loan application might get rejected or reduced in amount — not because of your income, but because of what you're already committed to paying out.",
        ],
      },
      {
        heading: "Get your documentation right the first time",
        body: [
          "A large share of delays — not outright rejections, but frustrating back-and-forth — come from incomplete or mismatched paperwork: address proof that doesn't match your application, incomplete income documentation for self-employed applicants, or missing bank statements. Getting a complete, consistent document set ready before you apply speeds up approval significantly.",
        ],
      },
      {
        heading: "Don't apply to five lenders at once",
        body: [
          "Every loan application triggers a \"hard inquiry\" on your credit report, and multiple hard inquiries in a short window actually lower your score and make you look like a credit risk to the next lender. It's better to have someone compare lenders for you upfront and apply to the one or two banks most likely to approve you, rather than shotgunning applications everywhere.",
        ],
      },
      {
        heading: "How Pavan Vatyani helps",
        body: [
          "This comparison and documentation check is what Pavan Vatyani does before an application is submitted on your behalf. Paperwork is checked for completeness before it reaches the bank, and approval is always the lender's decision.",
        ],
      },
    ],
  },
  {
    slug: "why-one-team-beats-four-specialists",
    category: "Personal Finance",
    title: "Why One Team Beats Four Separate Specialists for Your Finances",
    excerpt:
      "Your property broker, mutual fund agent, insurance agent and loan officer rarely talk to each other. Here's why that costs you more than you'd think.",
    readTime: "4 min read",
    date: "July 2026",
    sections: [
      {
        body: [
          "It's completely normal to have a different person handling your investments, your property search, your insurance, and your loans. It is also one reason why many people end up with financial decisions that do not work well together.",
        ],
      },
      {
        heading: "A real example",
        body: [
          "Say you're buying a flat. Your property broker finds you a great option and you're excited to move forward. But your mutual fund SIPs are locked into ELSS funds you started for tax savings, so liquidating them for the down payment triggers a 3-year lock-in penalty you didn't know about. Meanwhile, your loan officer doesn't know about the personal loan EMI you're already paying, so your home loan eligibility comes back lower than expected. None of these people did anything wrong — they just didn't have the full picture.",
        ],
      },
      {
        heading: "The hidden cost of fragmented advice",
        body: [
          "When nobody sees your whole financial position, a few things tend to happen: you miss opportunities (like using a lower-interest loan against property instead of a costlier personal loan), you pay avoidable taxes (like the ELSS lock-in example above), and risks go unnoticed (like being underinsured relative to your total debt exposure).",
        ],
      },
      {
        heading: "What changes when it's one team",
        body: [
          "When your mutual fund distributor, property broker, insurance agent and loan specialist are all part of the same team with visibility into your full picture, recommendations start accounting for each other. Your loan structuring considers your investment lock-ins. Your insurance cover gets sized against your actual property and loan exposure. Your investment timeline gets planned around any property purchase you're saving for.",
        ],
      },
      {
        heading: "That's the whole idea behind Artha Vriksha",
        body: [
          "Artha Vriksha Services was built to close this gap: one team of licensed professionals across all four services, so what you hear on one reflects what is happening in the other three.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
