import type { Metadata } from "next";
import AppStoreBadge from "@/components/AppStoreBadge";

export const metadata: Metadata = {
  title: "How to Play Imposter Game | Rules and Tips",
  description:
    "Learn how to play Imposter Game in under five minutes. Setup, word reveal, giving clues, voting, and tips for catching the imposter before they catch you.",
};

export default function HowToPlayPage() {
  return (
    <main className="px-4 sm:px-6 py-12 sm:py-16">
      <article className="mx-auto max-w-2xl">
        <h1 className="font-display text-4xl sm:text-5xl mb-6">How to play Imposter Game</h1>

        <p className="text-text-secondary leading-relaxed mb-6">
          Imposter Game is a pass-and-play party game for 3 to 20 people. Everyone gets a secret word
          except one player, the imposter, who gets nothing. The group gives clues, the imposter
          bluffs, and then everyone votes on who they think is faking it. Here’s exactly how a round
          goes.
        </p>

        <h2 className="font-display text-2xl sm:text-3xl mt-10 mb-4">1. Set up the round</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Open the app, add your players, and pick a category. Movies, food, animals, sports, and more
          come built in, or type any theme you want and let the AI build a pack for you on the spot.
          You can also set the difficulty and how many imposters you want in play, depending on how
          big your group is.
        </p>

        <h2 className="font-display text-2xl sm:text-3xl mt-10 mb-4">2. Pass the phone around</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          One phone, passed player to player. Everyone else looks away while the current player taps
          to reveal their card. If you’re not the imposter, you’ll see the secret word. If you are, the
          screen tells you straight up, and you’re on your own from there. No one else at the table
          knows who got that screen.
        </p>

        <h2 className="font-display text-2xl sm:text-3xl mt-10 mb-4">3. Give your clue</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Going in turn order, each player says one clue about the word without saying the word
          itself. If your word is “volcano,” you might say “I can erupt.” If you’re the imposter, you
          have nothing to go on, so you listen to everyone else’s clues and try to invent something
          that fits without giving yourself away.
        </p>

        <h2 className="font-display text-2xl sm:text-3xl mt-10 mb-4">4. Discuss and vote</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          After everyone’s given a clue, talk it out. Whose clue felt vague? Who hesitated? Who copied
          someone else’s vibe a little too closely? Once the group’s ready, everyone votes on who they
          think the imposter is.
        </p>

        <h2 className="font-display text-2xl sm:text-3xl mt-10 mb-4">5. The reveal</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          The app reveals who the imposter actually was and what the secret word was the whole time.
          If the group caught the imposter, the innocent players win. If the imposter slipped through,
          they win instead. Either way, you’ll usually want to play again immediately.
        </p>

        <h2 className="font-display text-2xl sm:text-3xl mt-10 mb-4">Tips for catching the imposter</h2>
        <ul className="text-text-secondary leading-relaxed mb-6 list-disc pl-5 space-y-2">
          <li>Listen for clues that are technically true but oddly generic. That’s a classic imposter move.</li>
          <li>Watch who waits to go last. Imposters often stall so they can copy the pattern of earlier clues.</li>
          <li>If someone’s clue contradicts an earlier clue from someone else, follow that thread.</li>
          <li>Don’t be afraid to ask a follow-up question before the vote. Imposters crack under follow-ups.</li>
        </ul>

        <h2 className="font-display text-2xl sm:text-3xl mt-10 mb-4">Tips for playing the imposter well</h2>
        <ul className="text-text-secondary leading-relaxed mb-6 list-disc pl-5 space-y-2">
          <li>Stay vague but confident. Specific details are how you get caught.</li>
          <li>Build off the clue right before yours. It feels less suspicious than going off-script.</li>
          <li>Don’t go first if you can help it. Let a few clues land before you have to invent one.</li>
        </ul>

        <div className="flex flex-col items-center gap-4 text-center mt-12 border-t border-white/10 pt-10">
          <h2 className="font-display text-2xl">Ready to try it with your group?</h2>
          <p className="text-text-secondary text-sm max-w-sm">
            Grab the app and run your first round in under a minute.
          </p>
          <AppStoreBadge />
        </div>
      </article>
    </main>
  );
}
