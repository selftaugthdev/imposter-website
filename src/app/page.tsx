import type { Metadata } from "next";
import Image from "next/image";
import AppStoreBadge from "@/components/AppStoreBadge";
import AvatarRow from "@/components/AvatarRow";
import DemoWidget from "@/components/DemoWidget";
import CategoryGrid from "@/components/CategoryGrid";

export const metadata: Metadata = {
  title: "Imposter Game - Find The Spy | Pass and Play Party Game",
  description:
    "Someone in your group is lying. Imposter Game is the pass-and-play social deduction party game where everyone gets a word except one liar. Free on the App Store.",
};

const steps = [
  {
    title: "Pick a category",
    body: "Movies, food, animals, sports, or type your own theme and let the AI build a pack on the spot.",
  },
  {
    title: "Everyone gets a word, except one",
    body: "Pass the phone around the table. Every player sees the secret word. One player sees nothing.",
  },
  {
    title: "Discuss and vote",
    body: "Give a clue without saying the word out loud. The imposter has to fake it. Then everyone votes on who’s lying.",
  },
  {
    title: "Reveal",
    body: "Find out who was bluffing the whole time, and whether they actually got away with it.",
  },
];

const features = [
  {
    emoji: "✨",
    title: "AI Theme Generator",
    body: "Type any theme you want. The AI builds a fresh word pack in seconds.",
  },
  {
    emoji: "👥",
    title: "3 to 20 Players",
    body: "A quick round for three friends or a full party. It scales either way.",
  },
  {
    emoji: "🎯",
    title: "Difficulty Levels",
    body: "Easy words for beginners, brutal ones for the sharks at the table.",
  },
  {
    emoji: "🎈",
    title: "Kids Mode",
    body: "Simple, friendly words that work for the whole family.",
  },
  {
    emoji: "🗂️",
    title: "Category Packs",
    body: "Movies, food, animals, sports, jobs, travel, and more, all built in.",
  },
  {
    emoji: "🔁",
    title: "Never Repeats",
    body: "The game tracks every word used this session so nothing shows up twice.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="relative overflow-hidden">
        <div className="glow-spotlight absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-14 sm:pt-20 pb-12 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-start gap-6 text-center md:text-left mx-auto md:mx-0">
            <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] tracking-wide">
              Someone in your group <span className="text-accent">is lying.</span>
            </h1>
            <p className="max-w-md text-lg text-text-secondary">
              Pass the phone, get your word, give your clue. One player has no idea what’s going on.
              Can you catch them before the vote?
            </p>
            <AppStoreBadge />
            <p className="text-xs text-text-muted">Free to play. No account needed.</p>
            <AvatarRow count={6} size="sm" className="justify-start" />
          </div>

          <div className="relative flex justify-center">
            <Image
              src="/images/mascot/smug.webp"
              alt="The Imposter Game mascot, masked and smug"
              width={400}
              height={596}
              priority
              className="relative z-10 w-56 sm:w-72 drop-shadow-[0_0_40px_rgba(123,47,190,0.35)]"
            />
          </div>
        </div>
      </section>

      <section id="demo" className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl flex flex-col items-center gap-3 text-center mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-accent-light">try it now</p>
          <h2 className="font-display text-3xl sm:text-4xl">This is the actual game moment.</h2>
          <p className="max-w-md text-text-secondary">
            No download needed to feel it. Run the demo below the way you’d play with friends.
          </p>
        </div>
        <DemoWidget compact />
      </section>

      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-surface">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl sm:text-4xl text-center mb-10">How it works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="rounded-2xl bg-card border border-white/5 p-6">
                <span className="font-display text-3xl text-accent-light">{i + 1}</span>
                <h3 className="mt-3 font-semibold text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl sm:text-4xl text-center mb-10">
            Everything you need for game night
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl bg-card border border-white/5 p-6">
                <span className="text-3xl">{feature.emoji}</span>
                <h3 className="mt-3 font-semibold text-lg">{feature.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-surface">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl sm:text-4xl text-center mb-3">Browse the word packs</h2>
          <p className="text-center text-text-secondary mb-10 max-w-md mx-auto">
            A taste of what’s inside. Tap a category to see sample words, or grab the app for the full set.
          </p>
          <CategoryGrid />
        </div>
      </section>

      <section className="relative px-4 sm:px-6 py-16 sm:py-24 overflow-hidden">
        <div className="glow-spotlight absolute inset-0" />
        <div className="relative mx-auto max-w-2xl flex flex-col items-center gap-6 text-center">
          <Image
            src="/images/mascot/peeking.webp"
            alt="The Imposter Game mascot peeking around the corner"
            width={300}
            height={447}
            className="w-24 sm:w-28"
          />
          <h2 className="font-display text-4xl sm:text-5xl">Ready to find out who’s lying?</h2>
          <p className="text-text-secondary max-w-md">
            Grab the app, pick your people, and find out who can’t keep a straight face.
          </p>
          <AppStoreBadge />
        </div>
      </section>
    </main>
  );
}
