import { Avatar } from "@/components/ui/avatar";
import { formatTime } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/lib/types";

export function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn("flex items-start gap-3 animate-slide-up", isUser && "flex-row-reverse")}
      role="group"
      aria-label={isUser ? "Your message" : "EchoGPT's response"}
    >
      <Avatar label={isUser ? "You" : "EchoGPT"} variant={isUser ? "user" : "assistant"} />
      <div className={cn("flex max-w-[80%] flex-col gap-1 sm:max-w-[65%]", isUser && "items-end")}>
        <div
          className={cn(
            "whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
            isUser
              ? "rounded-tr-sm bg-brand-600 text-white"
              : "rounded-tl-sm bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100"
          )}
        >
          {message.content}
        </div>
        <time
          dateTime={message.createdAt.toISOString()}
          className="px-1 text-[11px] text-slate-400 dark:text-slate-500"
        >
          {formatTime(message.createdAt)}
        </time>
      </div>
    </div>
  );
}
