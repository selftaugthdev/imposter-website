"use client";

import { useState } from "react";
import Link from "next/link";
import AvatarRow from "./AvatarRow";
import RevealCard from "./RevealCard";
import AppStoreBadge from "./AppStoreBadge";
import { getCategoryBySlug } from "@/data/categories";
import { AVATAR_EMOJIS } from "@/lib/constants";

type Step = "setup" | "huddle" | "lookaway" | "reveal";

const generalWords = getCategoryBySlug("general")?.words ?? ["VOLCANO"];

function randomWord() {
  return generalWords[Math.floor(Math.random() * generalWords.length)].toUpperCase();
}

export default function DemoWidget({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState<Step>("setup");
  const [playerCount, setPlayerCount] = useState(5);
  const [result, setResult] = useState<{ variant: "imposter" | "safe"; word: string; avatar: string } | null>(
    null
  );

  function startReveal() {
    const isImposter = Math.random() < 1 / playerCount;
    setResult({
      variant: isImposter ? "imposter" : "safe",
      word: randomWord(),
      avatar: AVATAR_EMOJIS[Math.floor(Math.random() * playerCount) % AVATAR_EMOJIS.length],
    });
    setStep("reveal");
  }

  function toggleSide() {
    setResult((prev) =>
      prev
        ? {
            ...prev,
            variant: prev.variant === "imposter" ? "safe" : "imposter",
          }
        : prev
    );
  }

  function reset() {
    setStep("setup");
    setResult(null);
  }

  return (
    <div
      className={`mx-auto w-full rounded-3xl border border-white/10 bg-surface p-6 sm:p-8 ${
        compact ? "max-w-md" : "max-w-xl"
      }`}
    >
      {step === "setup" && (
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">
            see how it works
          </p>
          <h3 className="font-display text-3xl">How many of you tonight?</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[3, 4, 5, 6, 7, 8].map((n) => (
              <button
                key={n}
                onClick={() => setPlayerCount(n)}
                className={`h-11 w-11 rounded-full font-semibold transition-colors ${
                  playerCount === n
                    ? "bg-accent text-white"
                    : "bg-card text-text-secondary hover:text-text-primary"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          <AvatarRow count={playerCount} size={compact ? "sm" : "md"} />
          <button
            onClick={() => setStep("huddle")}
            className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Start the round
          </button>
        </div>
      )}

      {step === "huddle" && (
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">step 1</p>
          <h3 className="font-display text-3xl">Everyone huddle up</h3>
          <p className="max-w-xs text-text-secondary">
            In real life you’d pass one phone around the table. For this demo, you’re playing every seat.
          </p>
          <AvatarRow count={playerCount} size={compact ? "sm" : "md"} />
          <button
            onClick={() => setStep("lookaway")}
            className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            We’re ready
          </button>
        </div>
      )}

      {step === "lookaway" && (
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">step 2</p>
          <h3 className="font-display text-3xl">🤫 Everyone else, look away</h3>
          <p className="max-w-xs text-text-secondary">
            Only the player holding the phone should look. No peeking.
          </p>
          <AvatarRow count={playerCount} dimmed activeIndex={0} size={compact ? "sm" : "md"} />
          <button
            onClick={startReveal}
            className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            I’m ready, reveal my card
          </button>
        </div>
      )}

      {step === "reveal" && result && (
        <div className="flex flex-col items-center gap-6">
          <RevealCard variant={result.variant} word={result.word} avatarEmoji={result.avatar} className="w-full" />
          <button onClick={toggleSide} className="text-sm text-accent-light underline-offset-4 hover:underline">
            {result.variant === "imposter"
              ? "Curious what the innocent players see? Tap here"
              : "Curious what the imposter sees? Tap here"}
          </button>

          <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-6 w-full text-center">
            <p className="font-semibold text-text-primary">
              That’s one card. Now imagine it with your whole group, live.
            </p>
            <AppStoreBadge />
            <div className="flex gap-4 text-sm text-text-muted">
              <button onClick={reset} className="hover:text-text-secondary">
                Run the demo again
              </button>
              {compact && (
                <Link href="/play" className="hover:text-text-secondary">
                  Try the full demo
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
