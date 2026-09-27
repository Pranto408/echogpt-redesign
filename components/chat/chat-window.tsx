"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { MessageBubble } from "./message-bubble";
import { TypingIndicator } from "./typing-indicator";
import { ChatInput } from "./chat-input";
import { EmptyState } from "./empty-state";
import { Button } from "@/components/ui/button";
import { useChat } from "@/hooks/use-chat";
import type { Conversation } from "@/lib/types";

export function ChatWindow({
  conversation,
  onOpenSidebar,
  isAuthenticated = false,
}: {
  conversation: Conversation;
  onOpenSidebar: () => void;
  isAuthenticated?: boolean;
}) {
  const { messages, sendMessage, isStreaming } = useChat(conversation);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isStreaming]);

  return (
    <div className="flex h-dvh flex-1 flex-col">
      <header className="flex h-16 items-center justify-between border-b border-slate-200 px-3 sm:px-4 dark:border-slate-800">
        <button
          aria-label="Open navigation"
          onClick={onOpenSidebar}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex-1" />
        {!isAuthenticated && (
          <Link href="/login">
            <Button size="sm">Sign In</Button>
          </Link>
        )}
      </header>

      <main id="main-content" aria-live="polite" className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        {messages.length === 0 ? (
          <EmptyState onPick={sendMessage} />
        ) : (
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            {messages.map((m) => (
              <MessageBubble key={m.id} message={m} />
            ))}
            {isStreaming && <TypingIndicator />}
            <div ref={endRef} />
          </div>
        )}
      </main>

      <ChatInput onSend={sendMessage} disabled={isStreaming} />
    </div>
  );
}
