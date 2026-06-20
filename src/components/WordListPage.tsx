import WordCard from "./WordCard";
import AppStoreBadge from "./AppStoreBadge";
import type { Category } from "@/data/categories";

export default function WordListPage({ category }: { category: Category }) {
  return (
    <main className="flex flex-col px-4 sm:px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl flex flex-col items-center gap-4 text-center mb-10">
        <span className="text-4xl">{category.emoji}</span>
        <h1 className="font-display text-4xl sm:text-5xl">
          Imposter Word List: {category.name}
        </h1>
        <p className="text-text-secondary leading-relaxed text-left sm:text-center">
          {category.intro}
        </p>
      </div>

      <div className="mx-auto max-w-3xl w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-12">
        {category.words.map((word) => (
          <WordCard key={word} word={word} />
        ))}
      </div>

      <div className="mx-auto max-w-md flex flex-col items-center gap-4 text-center">
        <h2 className="font-display text-2xl">Want the full pack, no limits?</h2>
        <p className="text-text-secondary text-sm">
          The app has hundreds more {category.name.toLowerCase()} words, plus every other category,
          difficulty levels, and an AI generator that builds new packs on demand.
        </p>
        <AppStoreBadge />
      </div>
    </main>
  );
}
