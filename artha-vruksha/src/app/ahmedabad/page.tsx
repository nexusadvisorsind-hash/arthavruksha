import { pageMeta } from "@/lib/seo";
import { CITIES } from "@/lib/cities";
import { CityPage } from "@/components/seo/city-page";

export const metadata = pageMeta({ title: `${CITIES.ahmedabad.title} | Assetzpro`, description: CITIES.ahmedabad.description, path: "/ahmedabad" });

export default function Ahmedabad() {
  return <CityPage city={CITIES.ahmedabad} />;
}
