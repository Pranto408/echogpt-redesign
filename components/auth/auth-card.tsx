"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { APP_NAME } from "@/lib/constants";

export function AuthCard({
  title,
  subtitle,
  children,
  footer,
}: {
  title: ReactNode;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-white px-4 py-12 dark:bg-slate-950">
      <DecorativeBackground />

      <button
        onClick={() => router.back()}
        aria-label="Go back"
        className="absolute left-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <div className="relative w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            {APP_NAME}
          </Link>
          <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">{title}</div>
        </div>

        <div className="mt-6">{children}</div>
        <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">{subtitle}</p>
        <div className="mt-2 text-center">{footer}</div>
      </div>
    </div>
  );
}

/** Purely decorative — hidden from assistive tech, disabled under reduced motion via globals.css transitions. */
function DecorativeBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <span className="absolute left-[6%] top-[18%] h-3 w-3 rounded-full border-2 border-brand-300 dark:border-brand-700" />
      <span className="absolute right-[8%] top-[14%] h-3 w-3 rounded-full border-2 border-brand-300 dark:border-brand-700" />
      <span className="absolute bottom-[16%] left-[12%] h-3 w-3 rounded-full border-2 border-brand-300 dark:border-brand-700" />
      <svg
        className="absolute -bottom-10 -left-16 h-64 w-64 text-brand-100 dark:text-brand-900/40"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path d="M0 100 Q50 60 100 100 T200 100" stroke="currentColor" strokeWidth="1.5" />
        <path d="M0 130 Q50 90 100 130 T200 130" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <div className="absolute bottom-6 right-6 h-16 w-16 rotate-45 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 opacity-90" />
    </div>
  );
}
