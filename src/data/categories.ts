import raw from "./categories.json";

export type Category = {
  slug: string;
  name: string;
  emoji: string;
  hasPage: boolean;
  pageSlug?: string;
  seoTitle?: string;
  seoDescription?: string;
  intro?: string;
  words: string[];
};

export type SpecialCard = {
  slug: string;
  name: string;
  emoji: string;
  blurb: string;
};

export const categories: Category[] = raw.categories;
export const specialCards: SpecialCard[] = raw.specialCards;

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getPageCategories(): Category[] {
  return categories.filter((c) => c.hasPage);
}
