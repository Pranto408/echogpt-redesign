"use client";

import { useId, useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { AI_MODELS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ModelSelectorProps {
  value: string;
  onChange: (id: string) => void;
}

/** Custom listbox (not a native <select>) so we can show a description per option, kept accessible via ARIA. */
export function ModelSelector({ value, onChange }: ModelSelectorProps) {
  const [open, setOpen] = useState(false);
  const buttonId = useId();
  const listId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const active = AI_MODELS.find((m) => m.id === value) ?? AI_MODELS[0]!;

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        id={buttonId}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        {active.name}
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-labelledby={buttonId}
          className="absolute left-0 z-20 mt-2 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-900"
        >
          {AI_MODELS.map((model) => (
            <li key={model.id}>
              <button
                role="option"
                aria-selected={model.id === value}
                onClick={() => {
                  onChange(model.id);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-start gap-2 px-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-800",
                  model.id === value && "bg-slate-50 dark:bg-slate-800"
                )}
              >
                <Check
                  className={cn("mt-0.5 h-4 w-4 shrink-0 text-brand-600", model.id !== value && "opacity-0")}
                  aria-hidden="true"
                />
                <span>
                  <span className="block font-medium text-slate-900 dark:text-slate-100">{model.name}</span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400">{model.description}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
