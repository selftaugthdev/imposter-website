import { AVATAR_EMOJIS } from "@/lib/constants";

type AvatarRowProps = {
  count?: number;
  activeIndex?: number;
  dimmed?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const SIZE_MAP = {
  sm: "h-9 w-9 text-lg",
  md: "h-12 w-12 text-2xl",
  lg: "h-16 w-16 text-3xl",
};

export default function AvatarRow({
  count = AVATAR_EMOJIS.length,
  activeIndex,
  dimmed = false,
  size = "md",
  className = "",
}: AvatarRowProps) {
  const avatars = Array.from({ length: count }, (_, i) => AVATAR_EMOJIS[i % AVATAR_EMOJIS.length]);

  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {avatars.map((emoji, i) => {
        const isActive = activeIndex === i;
        return (
          <div
            key={i}
            className={[
              SIZE_MAP[size],
              "flex items-center justify-center rounded-full bg-card border transition-all duration-300",
              isActive
                ? "border-accent shadow-[0_0_18px_rgba(123,47,190,0.6)] scale-110"
                : "border-white/10",
              dimmed && !isActive ? "opacity-30" : "opacity-100",
            ].join(" ")}
          >
            {emoji}
          </div>
        );
      })}
    </div>
  );
}
