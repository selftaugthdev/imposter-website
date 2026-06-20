import type { Metadata } from "next";
import Image from "next/image";
import DemoWidget from "@/components/DemoWidget";
import AppStoreBadge from "@/components/AppStoreBadge";

export const metadata: Metadata = {
  title: "Play the Demo | Imposter Game",
  description:
    "Try a single-device simulation of Imposter Game right in your browser. Pick a player count, pass the phone, and see the dramatic reveal moment for yourself.",
};

export default function PlayPage() {
  return (
    <main className="flex flex-col px-4 sm:px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl flex flex-col items-center gap-3 text-center mb-10">
        <Image
          src="/images/mascot/surprised.webp"
          alt="The Imposter Game mascot, caught off guard"
          width={300}
          height={447}
          className="w-28 sm:w-32 mb-2"
        />
        <p className="text-sm uppercase tracking-[0.2em] text-accent-light">demo</p>
        <h1 className="font-display text-4xl sm:text-5xl">See how it works</h1>
        <p className="text-text-secondary max-w-md">
          This is a single device walkthrough, not real pass-and-play. In the real app, every player
          gets their own turn on their own phone, passed around the table.
        </p>
      </div>

      <DemoWidget />

      <div className="mx-auto max-w-md flex flex-col items-center gap-4 text-center mt-16">
        <h2 className="font-display text-2xl">Play it for real with your group</h2>
        <p className="text-text-secondary text-sm">
          Get the app, gather your people, and find out who can’t keep a straight face.
        </p>
        <AppStoreBadge />
      </div>
    </main>
  );
}
