import type { Metadata } from "next";
import AppStoreBadge from "@/components/AppStoreBadge";

export const metadata: Metadata = {
  title: "Best Social Deduction Party Games (And How Imposter Game Compares)",
  description:
    "Looking for games like Mafia, Spyfall, or Werewolf? Here’s how social deduction party games work and where Imposter Game fits as the easiest pass-and-play option.",
};

export default function SocialDeductionPage() {
  return (
    <main className="px-4 sm:px-6 py-12 sm:py-16">
      <article className="mx-auto max-w-2xl">
        <h1 className="font-display text-4xl sm:text-5xl mb-6">
          The best social deduction party games, and where Imposter Game fits
        </h1>

        <p className="text-text-secondary leading-relaxed mb-6">
          Social deduction games all run on the same trick. Most people know something, one or two
          people don’t, and the fun comes from watching everyone try to figure out who’s faking it.
          Mafia and Werewolf turned this into a campfire classic. Spyfall brought it to game night
          tables everywhere. Imposter Game takes the same core idea and strips out everything that
          slows it down. No moderator, no setup time, no rulebook. Just pass the phone and play.
        </p>

        <h2 className="font-display text-2xl sm:text-3xl mt-10 mb-4">How social deduction games work</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          The setup is always similar. A group of players gets information. One or more players in
          the group don’t get that information, or get false information instead. Everyone talks,
          gives clues, or answers questions, and the group has to spot who doesn’t actually know
          what’s going on. It’s part bluffing, part reading people, and part luck. The best games in
          this genre keep rounds short so nobody’s sitting out for long.
        </p>

        <h2 className="font-display text-2xl sm:text-3xl mt-10 mb-4">Imposter Game vs Mafia</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Mafia needs a narrator, a big group, and usually someone who’s played before to keep things
          moving. Rounds can run long, and if you’re “eliminated” early, you’re just watching for the
          rest of the game. Imposter Game skips all of that. Every player is active every round, there’s
          no narrator needed, and a full round takes a few minutes instead of an hour. It’s Mafia’s
          energy without the homework.
        </p>

        <h2 className="font-display text-2xl sm:text-3xl mt-10 mb-4">Imposter Game vs Spyfall</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Spyfall is closer to what Imposter Game is doing. Everyone knows a location except the spy,
          who has to bluff through questions without knowing where they are. Imposter Game uses the
          same bluffing core but swaps the location-and-questions format for a simpler word-and-clue
          format that’s faster to explain to a new group. It also adds category packs, difficulty
          levels, and an AI generator that builds a fresh theme whenever you want one, so the game
          doesn’t get stale after a few rounds.
        </p>

        <h2 className="font-display text-2xl sm:text-3xl mt-10 mb-4">Imposter Game vs Werewolf</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Werewolf leans heavier on elimination and night phases, which is great for a dedicated game
          night but a lot for a quick hang. Imposter Game is built for the in-between moments. Waiting
          for food at a restaurant, a slow afternoon, a pregame before people head out. Open the app,
          pick a category, and you’re playing in under a minute.
        </p>

        <h2 className="font-display text-2xl sm:text-3xl mt-10 mb-4">Why pass-and-play wins for casual groups</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Pass-and-play means one phone, no accounts, no syncing devices, no Wi-Fi required. Everyone
          just hands the phone around the circle. It’s the lowest possible barrier to starting a game,
          which matters most for groups who aren’t already “board game people.” If your group can pass
          a phone around a table, they can play Imposter Game.
        </p>

        <div className="flex flex-col items-center gap-4 text-center mt-12 border-t border-white/10 pt-10">
          <h2 className="font-display text-2xl">Try the format that started it</h2>
          <p className="text-text-secondary text-sm max-w-sm">
            Pick a category, pass the phone, and see who in your group can keep a straight face.
          </p>
          <AppStoreBadge />
        </div>
      </article>
    </main>
  );
}
