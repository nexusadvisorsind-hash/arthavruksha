"use client";

import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact";
import { cn } from "@/lib/utils";

const INTENTS = ["Rent", "Buy", "Lease", "Sell"] as const;
type Intent = (typeof INTENTS)[number];

const TYPES = ["Flat", "House or villa", "Shop", "Office", "Plot or land", "Other"];

const FIELD =
  "w-full rounded-md border border-white/20 bg-white/10 px-3 py-2.5 font-body text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent";

/**
 * A short requirement builder. It writes a ready message and opens WhatsApp, so the visitor
 * sends it themselves. Nothing typed here is stored or sent to this site.
 */
export function RequirementBar({
  areas,
  defaultArea,
  heading = "Share what you need",
}: {
  areas: string[];
  defaultArea?: string;
  heading?: string;
}) {
  const [intent, setIntent] = useState<Intent>("Rent");
  const [type, setType] = useState(TYPES[0]);
  const [area, setArea] = useState(defaultArea ?? areas[0]);
  const [budget, setBudget] = useState("");

  const href = useMemo(() => {
    const verb = intent === "Sell" ? "sell" : intent === "Rent" ? "take on rent" : intent === "Lease" ? "take on lease" : "buy";
    const what = type.toLowerCase();
    const budgetLine = budget.trim() ? ` Budget: ${budget.trim()}.` : "";
    const text =
      intent === "Sell"
        ? `Hello, I want to sell my ${what} in ${area}.${budgetLine} Please contact me.`
        : `Hello, I want to ${verb} a ${what} in ${area}.${budgetLine} Please share suitable options.`;
    return whatsappLink(text);
  }, [intent, type, area, budget]);

  return (
    <div className="rounded-2xl border border-white/15 bg-black/25 backdrop-blur-sm p-5 md:p-6 max-w-3xl">
      <p className="font-heading font-semibold text-lg text-white mb-3">{heading}</p>

      <div role="tablist" aria-label="What do you want to do" className="flex flex-wrap gap-2 mb-4">
        {INTENTS.map((i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={intent === i}
            onClick={() => setIntent(i)}
            className={cn(
              "rounded-full px-5 py-1.5 font-body text-sm font-semibold transition-colors",
              intent === i ? "bg-accent text-accent-foreground" : "bg-white/10 text-white hover:bg-white/20"
            )}
          >
            {i}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mb-4">
        <label className="block">
          <span className="sr-only">Type of property</span>
          <select value={type} onChange={(e) => setType(e.target.value)} className={FIELD} aria-label="Type of property">
            {TYPES.map((t) => (
              <option key={t} value={t} className="text-foreground">{t}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="sr-only">Area</span>
          <select value={area} onChange={(e) => setArea(e.target.value)} className={FIELD} aria-label="Area">
            {areas.map((a) => (
              <option key={a} value={a} className="text-foreground">{a}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="sr-only">Budget</span>
          <input
            value={budget}
            onChange={(e) => setBudget(e.target.value.slice(0, 40))}
            placeholder={intent === "Rent" || intent === "Lease" ? "Budget per month" : "Budget or expected price"}
            className={FIELD}
            aria-label="Budget"
          />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 font-body text-base font-semibold text-[#06310f] hover:brightness-95 transition"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" /> Send on WhatsApp
        </a>
        <p className="font-body text-xs text-white/70 max-w-xs">
          Opens WhatsApp with your message ready to send. Nothing you choose here is saved on this website.
        </p>
      </div>
    </div>
  );
}
