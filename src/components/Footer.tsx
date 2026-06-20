import Link from "next/link";
import { APP_STORE_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-text-muted">
        <p>Imposter Game - Find The Spy</p>
        <nav className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/play" className="hover:text-text-secondary">Demo</Link>
          <Link href="/imposter-word-list-movies" className="hover:text-text-secondary">Movies</Link>
          <Link href="/imposter-word-list-food" className="hover:text-text-secondary">Food</Link>
          <Link href="/imposter-word-list-animals" className="hover:text-text-secondary">Animals</Link>
          <Link href="/social-deduction-party-games" className="hover:text-text-secondary">Compare games</Link>
          <Link href="/how-to-play-imposter-game" className="hover:text-text-secondary">How to play</Link>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-text-secondary">
            App Store
          </a>
        </nav>
      </div>
    </footer>
  );
}
