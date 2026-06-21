import Link from "next/link";
import Image from "next/image";
import AppStoreBadge from "./AppStoreBadge";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3">
        <Link href="/" className="flex items-center gap-2 text-text-primary">
          <Image
            src="/images/brand/logo.webp"
            alt="Imposter Game logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-display text-2xl tracking-wide">
            IMPOSTER<span className="text-accent">.</span>
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-text-secondary">
          <Link href="/play" className="hover:text-text-primary">
            Try the demo
          </Link>
          <Link href="/social-deduction-party-games" className="hover:text-text-primary">
            Compare games
          </Link>
          <Link href="/how-to-play-imposter-game" className="hover:text-text-primary">
            How to play
          </Link>
        </nav>
        <AppStoreBadge className="!px-3 !py-2 hidden sm:flex" />
      </div>
    </header>
  );
}
