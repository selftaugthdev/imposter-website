import Link from "next/link";
import { categories, specialCards } from "@/data/categories";
import { APP_STORE_URL } from "@/lib/constants";

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((category) => {
        const content = (
          <>
            <span className="text-3xl">{category.emoji}</span>
            <span className="font-semibold text-text-primary">{category.name}</span>
            <span className="text-xs text-text-muted">
              {category.hasPage ? "See word list" : "In the app"}
            </span>
          </>
        );

        const cardClass =
          "flex flex-col items-center gap-2 rounded-2xl bg-card border border-white/5 px-4 py-6 text-center transition-all hover:border-accent/60 hover:-translate-y-0.5";

        return category.hasPage ? (
          <Link key={category.slug} href={`/${category.pageSlug}`} className={cardClass}>
            {content}
          </Link>
        ) : (
          <a key={category.slug} href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={cardClass}>
            {content}
          </a>
        );
      })}

      {specialCards.map((card) => (
        <a
          key={card.slug}
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 rounded-2xl bg-gradient-to-b from-accent/20 to-card border border-accent/40 px-4 py-6 text-center transition-all hover:border-accent hover:-translate-y-0.5"
        >
          <span className="text-3xl">{card.emoji}</span>
          <span className="font-semibold text-text-primary">{card.name}</span>
          <span className="text-xs text-text-muted">In the app</span>
        </a>
      ))}
    </div>
  );
}
