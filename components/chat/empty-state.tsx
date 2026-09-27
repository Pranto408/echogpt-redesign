import { SUGGESTION_CARDS } from "@/lib/constants";

export function EmptyState({ onPick }: { onPick: (text: string) => void }) {
  return (
    <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
        Hello There! <span aria-hidden="true">👋</span> How can I assist you today?
      </h1>
      <p className="mt-3 text-slate-500 dark:text-slate-400">
        Your personal AI assistant is ready to help — ask me anything, anytime.
      </p>

      <div className="mt-8 grid w-full gap-3 sm:grid-cols-2">
        {SUGGESTION_CARDS.map((card) => (
          <button
            key={card.title}
            onClick={() => onPick(card.title)}
            className="rounded-2xl border border-slate-200 bg-white p-4 text-left transition-colors hover:border-brand-300 hover:bg-brand-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700"
          >
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{card.title}</p>
            <p className="mt-1 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
              {card.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
