"use client";

import { useState } from "react";
import { ChatSidebar } from "@/components/chat/chat-sidebar";
import { ChatWindow } from "@/components/chat/chat-window";
import type { Conversation } from "@/lib/types";

const EMPTY_CONVERSATION: Conversation = {
  id: "new",
  title: "New chat",
  updatedAt: new Date(),
  messages: [],
};

/**
 * The home route doubles as the app shell — EchoGPT's actual product opens
 * straight into the assistant rather than a separate marketing page, so this
 * mirrors that: a signed-out visitor lands here and can start chatting
 * immediately, with "Sign In" available but not required.
 */
export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sessionKey, setSessionKey] = useState(0);

  return (
    <div className="flex h-dvh overflow-hidden bg-white dark:bg-slate-950">
      <ChatSidebar
        onNewChat={() => {
          setSessionKey((k) => k + 1);
          setSidebarOpen(false);
        }}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <ChatWindow
        key={sessionKey}
        conversation={EMPTY_CONVERSATION}
        onOpenSidebar={() => setSidebarOpen(true)}
      />
    </div>
  );
}
