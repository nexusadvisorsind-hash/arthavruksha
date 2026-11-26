import Link from "next/link";
import { MapPin } from "lucide-react";

type Props = {
  heading: string;
  paragraphs: string[];
  links?: { href: string; label: string }[];
};

/** Plain-language "near you" block: who helps, with what, and where meetings happen. No listings, prices or claims. */
export function NearYou({ heading, paragraphs, links = [] }: Props) {
  return (
    <section className="py-14 md:py-16 bg-surface border-y border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-5 flex items-start gap-3">
          <MapPin className="h-7 w-7 text-secondary shrink-0 mt-1.5" aria-hidden="true" /> {heading}
        </h2>
        {paragraphs.map((t) => (
          <p key={t} className="font-body text-foreground-muted leading-relaxed mb-4 last:mb-0">{t}</p>
        ))}
        {links.length > 0 && (
          <ul className="flex flex-wrap gap-x-6 mt-3">
            {links.map((k) => (
              <li key={k.href}>
                <Link href={k.href} className="inline-flex min-h-11 items-center font-body text-primary underline hover:text-secondary">{k.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export const PUNE_AREA_LINE = "Amanora, Magarpatta, Hadapsar, Kharadi, Viman Nagar, Kalyani Nagar, Koregaon Park, Mundhwa, Baner, Wakad and Hinjewadi";
export const AHMEDABAD_AREA_LINE = "SG Highway, Bopal, South Bopal, Shela, Thaltej, Bodakdev, Vastrapur, Satellite, Prahlad Nagar, Gota and Chandkheda";
export const MEET_LINE = "Meetings are by appointment at Amanora Park Town, Hadapsar, Pune 411028, or on CG Road, Ahmedabad 380009.";
