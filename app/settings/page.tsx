"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SettingsNav, type SettingsTab } from "@/components/settings/settings-nav";
import { ProfileSection } from "@/components/settings/profile-section";
import { AppearanceSection } from "@/components/settings/appearance-section";
import { ApiSection } from "@/components/settings/api-section";

export default function SettingsPage() {
  const [tab, setTab] = useState<SettingsTab>("profile");

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to chat
      </Link>

      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Settings</h1>

      <div id="main-content" className="mt-6 flex flex-col gap-6 sm:flex-row">
        <SettingsNav active={tab} onChange={setTab} />
        <div className="flex-1">
          {tab === "profile" && <ProfileSection />}
          {tab === "appearance" && <AppearanceSection />}
          {tab === "api" && <ApiSection />}
        </div>
      </div>
    </div>
  );
}
