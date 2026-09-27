"use client";

import { cn } from "@/lib/utils";

interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: string;
  id?: string;
}

/** Accessible toggle switch built on a native checkbox for correct semantics with SRs. */
export function Switch({ checked, onCheckedChange, label, id }: SwitchProps) {
  return (
    <label htmlFor={id} className="inline-flex cursor-pointer items-center gap-3">
      <span className="sr-only">{label}</span>
      <span
        className={cn(
          "relative h-6 w-11 rounded-full transition-colors",
          checked ? "bg-brand-600" : "bg-slate-300 dark:bg-slate-700"
        )}
      >
        <input
          id={id}
          type="checkbox"
          role="switch"
          aria-checked={checked}
          checked={checked}
          onChange={(e) => onCheckedChange(e.target.checked)}
          className="peer absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
        <span
          className={cn(
            "pointer-events-none absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-brand-500 peer-focus-visible:ring-offset-1",
            checked ? "translate-x-5" : "translate-x-0.5"
          )}
        />
      </span>
    </label>
  );
}
