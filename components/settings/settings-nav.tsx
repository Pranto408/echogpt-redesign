"use client";

import { cn } from "@/lib/utils";

export type SettingsTab = "profile" | "appearance" | "api";

const TABS: { id: SettingsTab; label: string }[] = [
  { id: "profile", label: "Profile" },
  { id: "appearance", label: "Appearance" },
  { id: "api", label: "API & Data" },
];

export function SettingsNav({
  active,
  onChange,
}: {
  active: SettingsTab;
  onChange: (tab: SettingsTab) => void;
}) {
  return (
    <nav aria-label="Settings sections" className="flex gap-1 border-b border-slate-200 dark:border-slate-800 sm:w-48 sm:flex-col sm:border-b-0 sm:border-r sm:pr-4">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          aria-current={active === tab.id ? "page" : undefined}
          className={cn(
            "rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
            active === tab.id && "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400"
          )}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
