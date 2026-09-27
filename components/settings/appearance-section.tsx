"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Check, Monitor, Moon, Sun } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { id: "light", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
  { id: "system", label: "System", icon: Monitor },
] as const;

export function AppearanceSection() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Appearance</h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Choose how EchoGPT looks on this device.
      </p>

      <fieldset className="mt-6">
        <legend className="sr-only">Theme</legend>
        <div className="grid grid-cols-3 gap-3">
          {OPTIONS.map(({ id, label, icon: Icon }) => {
            const selected = mounted && theme === id;
            return (
              <label
                key={id}
                className={cn(
                  "relative flex cursor-pointer flex-col items-center gap-2 rounded-xl border p-4 text-sm font-medium",
                  selected
                    ? "border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                )}
              >
                <input
                  type="radio"
                  name="theme"
                  value={id}
                  checked={selected}
                  onChange={() => setTheme(id)}
                  className="sr-only"
                />
                <Icon className="h-5 w-5" aria-hidden="true" />
                {label}
                {selected && <Check className="absolute right-2 top-2 h-4 w-4" aria-hidden="true" />}
              </label>
            );
          })}
        </div>
      </fieldset>
    </Card>
  );
}
