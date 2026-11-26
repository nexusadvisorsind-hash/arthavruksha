import { GOOGLE_REVIEW_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/seo";
import { cn } from "@/lib/utils";

const ICON = "h-5 w-5";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className={ICON} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className={ICON} fill="currentColor" aria-hidden="true">
      <rect x="2.5" y="9" width="4" height="12" />
      <circle cx="4.5" cy="4.8" r="2.3" />
      <path d="M9.5 9h3.8v1.8c.7-1.3 2.1-2.1 3.9-2.1 3.4 0 4.3 2.2 4.3 5.3V21h-4v-6c0-1.4-.2-2.6-1.8-2.6-1.7 0-2.2 1.2-2.2 2.7V21h-4z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className={ICON} fill="currentColor" aria-hidden="true">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}

const ITEMS = [
  { href: INSTAGRAM_URL, label: "Assetzpro on Instagram", text: "Instagram", Icon: InstagramIcon },
  { href: LINKEDIN_URL, label: "Assetzpro on LinkedIn", text: "LinkedIn", Icon: LinkedInIcon },
  { href: GOOGLE_REVIEW_URL, label: "Write a Google review for Assetzpro", text: "Google reviews", Icon: GoogleIcon },
];

/** Each profile is one link: the round logo with its name beside it. 44px tall tap target. */
export function SocialLinks({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-5 gap-y-2", className)}>
      {ITEMS.map(({ href, label, text, Icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "group inline-flex min-h-11 items-center gap-2 font-body text-sm underline-offset-4 hover:underline",
              tone === "dark" ? "text-primary-foreground hover:text-accent" : "text-primary hover:text-secondary"
            )}
          >
            <span
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors",
                tone === "dark"
                  ? "border-primary-foreground/30 group-hover:border-accent"
                  : "border-border group-hover:border-secondary"
              )}
            >
              <Icon />
            </span>
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
}
