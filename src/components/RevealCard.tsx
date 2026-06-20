type RevealCardProps = {
  variant: "imposter" | "safe";
  word: string;
  avatarEmoji?: string;
  className?: string;
};

export default function RevealCard({ variant, word, avatarEmoji, className = "" }: RevealCardProps) {
  const isImposter = variant === "imposter";

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-background px-6 py-14 text-center ${className}`}
    >
      <div className="glow-spotlight absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {avatarEmoji && (
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card border border-accent text-4xl shadow-[0_0_24px_rgba(123,47,190,0.5)]">
            {avatarEmoji}
          </div>
        )}

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">
          {isImposter ? "uh oh" : "phew"}
        </p>

        <h2
          className={`font-display text-5xl sm:text-6xl tracking-wide ${
            isImposter ? "text-imposter-red" : "text-accent-light"
          }`}
        >
          {isImposter ? "YOU ARE THE IMPOSTER" : "YOU'RE SAFE"}
        </h2>

        <div className="rounded-2xl border border-accent/60 bg-card px-8 py-5 shadow-[0_0_30px_rgba(123,47,190,0.25)]">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-2">
            {isImposter ? "you had no idea the word was" : "the secret word was"}
          </p>
          <p className="font-display text-3xl sm:text-4xl text-text-primary tracking-wide">
            {word}
          </p>
        </div>

        <p className="max-w-xs text-sm text-text-secondary">
          {isImposter
            ? "Everyone else knew it. You had to bluff your way through. Did they buy it?"
            : "You knew the word the whole time. Now go catch whoever didn't."}
        </p>
      </div>
    </div>
  );
}
