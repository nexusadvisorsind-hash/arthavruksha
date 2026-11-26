import { INTENT_AREAS, INTENT_ORDER } from "@/lib/pune-intents";
import { PUNE_AREA_ORDER } from "@/lib/pune-areas";

/** Every path generated from data, so the sitemap and the "last updated" dates cover them without a hand-kept list. */
export function generatedPaths(): string[] {
  const out: string[] = [];
  for (const a of PUNE_AREA_ORDER) out.push(`/real-estate/pune/${a}`);
  for (const a of INTENT_AREAS) for (const i of INTENT_ORDER) out.push(`/real-estate/pune/${a}/${i}`);
  return out;
}
