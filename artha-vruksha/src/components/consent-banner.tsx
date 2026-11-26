"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { ANALYTICS_ENABLED, CLARITY_ID, GA_ID, readConsent, writeConsent, track, type Consent } from "@/lib/analytics";

/**
 * Optional analytics, off until the visitor says yes. Renders nothing at all when no analytics IDs are configured.
 * Nothing is loaded for "denied" or for a visitor who has not chosen yet.
 */
export function ConsentBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setReady(true);
    const reopen = () => setOpen(true);
    window.addEventListener("av:cookie-settings", reopen);
    return () => window.removeEventListener("av:cookie-settings", reopen);
  }, []);

  // Contact clicks, tracked in one place so no page needs its own handler.
  useEffect(() => {
    if (consent !== "granted") return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest("a");
      const href = a?.getAttribute("href") ?? "";
      if (href.startsWith("tel:") || href.startsWith("mailto:")) track("contact_click", { method: href.startsWith("tel:") ? "phone" : "email" });
      else if (href.includes("wa.me") || href.includes("whatsapp")) track("whatsapp_click");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consent]);

  if (!ANALYTICS_ENABLED || !ready) return null;

  const choose = (v: "granted" | "denied") => {
    const wasGranted = consent === "granted";
    writeConsent(v);
    setConsent(v);
    setOpen(false);
    if (v === "denied" && wasGranted) window.location.reload(); // unloads scripts that were already running
  };

  const showBanner = consent === null || open;

  return (
    <>
      {consent === "granted" && GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}</Script>
        </>
      )}
      {consent === "granted" && CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");window.clarity('consent');`}</Script>
      )}
      {showBanner && (
        <div role="dialog" aria-label="Analytics choice" className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background shadow-lg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center gap-4">
            <p className="font-body text-sm text-foreground-muted flex-1">
              Anonymous visit statistics help improve this site. They load only if you accept, and the site works the same either way. Details are in the{" "}
              <a href="/privacy-policy" className="text-secondary underline underline-offset-2">Privacy Policy</a>.
            </p>
            <div className="flex gap-3">
              <button onClick={() => choose("denied")} className="rounded-full border border-border px-5 py-2 font-body text-sm font-semibold text-primary hover:bg-surface">Decline</button>
              <button onClick={() => choose("granted")} className="rounded-full bg-primary px-5 py-2 font-body text-sm font-semibold text-primary-foreground hover:opacity-90">Accept analytics</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/** Footer link that reopens the choice. Hidden when analytics is not configured. */
export function CookieSettingsLink() {
  if (!ANALYTICS_ENABLED) return null;
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event("av:cookie-settings"))} className="hover:text-accent">
      Cookie settings
    </button>
  );
}
