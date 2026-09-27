"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export function ApiSection() {
  const [saveHistory, setSaveHistory] = useState(true);
  const [shareAnalytics, setShareAnalytics] = useState(false);

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">API &amp; Data</h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Control what EchoGPT stores and how your data is used.
      </p>

      <div className="mt-6 divide-y divide-slate-200 dark:divide-slate-800">
        <div className="flex items-center justify-between py-4">
          <div>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-100">Save conversation history</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Keep past chats so you can revisit them later.</p>
          </div>
          <Switch id="save-history" label="Save conversation history" checked={saveHistory} onCheckedChange={setSaveHistory} />
        </div>
        <div className="flex items-center justify-between py-4">
          <div>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-100">Share usage analytics</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Help improve EchoGPT with anonymized usage data.</p>
          </div>
          <Switch id="share-analytics" label="Share usage analytics" checked={shareAnalytics} onCheckedChange={setShareAnalytics} />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button variant="outline" size="sm">Export my data</Button>
        <Button variant="outline" size="sm" className="border-red-300 text-red-600 hover:bg-red-50 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950">
          Delete all conversations
        </Button>
      </div>
    </Card>
  );
}
