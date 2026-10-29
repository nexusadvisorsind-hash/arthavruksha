import { pageMeta } from "@/lib/seo";
import { CITIES } from "@/lib/cities";
import { CityPage } from "@/components/seo/city-page";

export const metadata = pageMeta({ title: `${CITIES.pune.title} | Assetzpro`, description: CITIES.pune.description, path: "/pune" });

export default function Pune() {
  return <CityPage city={CITIES.pune} />;
}
