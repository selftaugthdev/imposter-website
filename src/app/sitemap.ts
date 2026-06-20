import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const routes = [
  "",
  "play",
  "imposter-word-list-movies",
  "imposter-word-list-food",
  "imposter-word-list-animals",
  "social-deduction-party-games",
  "how-to-play-imposter-game",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}/${route}`,
    lastModified: new Date(),
  }));
}
