import type { Metadata } from "next";
import WordListPage from "@/components/WordListPage";
import { getCategoryBySlug } from "@/data/categories";

const category = getCategoryBySlug("food")!;

export const metadata: Metadata = {
  title: category.seoTitle,
  description: category.seoDescription,
};

export default function FoodWordListPage() {
  return <WordListPage category={category} />;
}
