import { Avatar } from "@/components/ui/avatar";

/** Shown while the assistant "reply" is in flight. Uses aria-live so screen readers announce it once. */
export function TypingIndicator() {
  return (
    <div className="flex items-start gap-3" aria-live="polite">
      <Avatar label="EchoGPT" variant="assistant" />
      <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 dark:bg-slate-800">
        <span className="sr-only">EchoGPT is typing</span>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            aria-hidden="true"
            className="h-1.5 w-1.5 animate-blink rounded-full bg-slate-400 dark:bg-slate-500"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}
