"use client";

import { useCallback, useState } from "react";
import type { ChatMessage, Conversation } from "@/lib/types";

let idCounter = 0;
const nextId = () => `msg-${Date.now()}-${idCounter++}`;

/**
 * Drives the demo chat: appends the user's message, then simulates a
 * streaming assistant reply. Swap `simulateReply` for a real API call.
 */
export function useChat(initial: Conversation) {
  const [messages, setMessages] = useState<ChatMessage[]>(initial.messages);
  const [isStreaming, setIsStreaming] = useState(false);

  const sendMessage = useCallback((content: string) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: nextId(),
      role: "user",
      content,
      createdAt: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsStreaming(true);

    const reply =
      "Thanks for the details — here's a starting point. I've kept it concise; let me know if you'd like more depth on any part, or a different tone.";

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "assistant", content: reply, createdAt: new Date() },
      ]);
      setIsStreaming(false);
    }, 900);
  }, []);

  return { messages, sendMessage, isStreaming };
}
