import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SocialButton({
  children,
  label,
  variant = "outline",
  onClick,
}: {
  children: ReactNode;
  label: string;
  variant?: "outline" | "solid";
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-11 w-full items-center justify-center gap-3 rounded-xl text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900",
        variant === "solid"
          ? "bg-brand-600 text-white hover:bg-brand-700"
          : "border border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
      )}
    >
      <span aria-hidden="true" className="flex h-4 w-4 items-center justify-center">
        {children}
      </span>
      {label}
    </button>
  );
}
