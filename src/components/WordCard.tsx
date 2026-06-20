export default function WordCard({ word }: { word: string }) {
  return (
    <div className="rounded-xl bg-card border border-white/5 px-4 py-4 text-center transition-colors hover:border-accent/50">
      <span className="font-medium text-text-primary">{word}</span>
    </div>
  );
}
