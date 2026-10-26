export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? "";
export const ANALYTICS_ENABLED = Boolean(GA_ID || CLARITY_ID);
export const CONSENT_KEY = "av_analytics_consent";

export type Consent = "granted" | "denied" | null;

export function readConsent(): Consent {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function writeConsent(v: "granted" | "denied") {
  try {
    window.localStorage.setItem(CONSENT_KEY, v);
  } catch {
    /* storage blocked: the choice simply applies to this visit */
  }
}

type Gtag = (...args: unknown[]) => void;

/** Sends a GA4 event. Does nothing unless the visitor accepted analytics and GA has loaded. */
export function track(event: string, params?: Record<string, unknown>) {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === "function") g("event", event, params);
}
