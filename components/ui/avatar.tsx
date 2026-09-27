import { cn } from "@/lib/utils";

interface AvatarProps {
  label: string;
  variant?: "user" | "assistant";
  className?: string;
}

/** Simple initials/icon avatar — avoids external image loads for the chat UI. */
export function Avatar({ label, variant = "user", className }: AvatarProps) {
  const initials = label
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
        variant === "assistant"
          ? "bg-brand-600 text-white"
          : "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200",
        className
      )}
    >
      {variant === "assistant" ? "E" : initials}
    </div>
  );
}
