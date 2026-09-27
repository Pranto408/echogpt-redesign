"use client";

import type { ReactNode } from "react";
import { useRef, useState, KeyboardEvent } from "react";
import { ArrowUp, Mic, Paperclip, Plus, History, Share2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModelSelector } from "./model-selector";
import { AI_MODELS } from "@/lib/constants";

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

/** Two-row composer: a toolbar (model + quick actions) above the message row. */
export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState("");
  const [model, setModel] = useState(AI_MODELS[0]!.id);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  };

  const handleSubmit = () => {
    if (!value.trim() || disabled) return;
    onSend(value);
    setValue("");
    requestAnimationFrame(resize);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border-t border-slate-200 bg-white p-3 sm:p-4 dark:border-slate-800 dark:bg-slate-950">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-brand-500 dark:border-slate-700 dark:bg-slate-900"
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-3 py-1.5 dark:border-slate-800">
          <div className="flex items-center gap-1">
            <ModelSelector value={model} onChange={setModel} />
            <span className="h-4 w-px bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
            <IconButton label="Connect a tool">
              <Share2 className="h-4 w-4" aria-hidden="true" />
            </IconButton>
            <IconButton label="Boost this response">
              <Rocket className="h-4 w-4" aria-hidden="true" />
            </IconButton>
          </div>
          <div className="flex items-center gap-1">
            <IconButton label="Add attachment">
              <Plus className="h-4 w-4" aria-hidden="true" />
            </IconButton>
            <IconButton label="View chat history">
              <History className="h-4 w-4" aria-hidden="true" />
            </IconButton>
          </div>
        </div>

        <div className="flex items-end gap-2 p-2">
          <button
            type="button"
            aria-label="Attach a file"
            className="mb-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Paperclip className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>

          <label htmlFor="chat-message" className="sr-only">
            Ask a question
          </label>
          <textarea
            id="chat-message"
            ref={textareaRef}
            rows={1}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              resize();
            }}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question..."
            className="max-h-48 flex-1 resize-none bg-transparent px-1 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
          />

          <button
            type="button"
            aria-label="Use voice input"
            className="mb-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Mic className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>

          <Button
            type="submit"
            size="icon"
            disabled={!value.trim() || disabled}
            aria-label="Send message"
            className="mb-1 shrink-0 rounded-full"
          >
            <ArrowUp className="h-[18px] w-[18px]" aria-hidden="true" />
          </Button>
        </div>
      </form>
      <p className="mx-auto mt-2 max-w-3xl text-center text-xs text-slate-400 dark:text-slate-500">
        EchoGPT can make mistakes. Consider checking important information.
      </p>
    </div>
  );
}

function IconButton({ label, children }: { label: string; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
    >
      {children}
    </button>
  );
}
