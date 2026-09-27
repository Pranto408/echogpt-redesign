"use client";

import Link from "next/link";
import {
  Plus,
  X,
  Home,
  Users,
  Settings,
  Image as ImageIcon,
  Video,
  Columns2,
  Share2,
  History,
  Store,
  LayoutGrid,
  FileSearch,
  ClipboardList,
  FileText,
  Mail,
  Gem,
  Cpu,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { APP_NAME, WORKSPACE_ITEMS, SUPPORT_ITEMS } from "@/lib/constants";
import type { SidebarItem } from "@/lib/constants";

const ICONS: Record<string, typeof ImageIcon> = {
  image: ImageIcon,
  video: Video,
  compare: Columns2,
  connectors: Share2,
  history: History,
  store: Store,
  tasks: LayoutGrid,
  job: FileSearch,
  sop: ClipboardList,
  support: FileText,
  newsletter: Mail,
  subscriptions: Gem,
  api: Cpu,
  discord: MessageCircle,
};

interface ChatSidebarProps {
  onNewChat: () => void;
  open: boolean;
  onClose: () => void;
  activeItemId?: string;
}

export function ChatSidebar({ onNewChat, open, onClose, activeItemId }: ChatSidebarProps) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-30 bg-black/30 lg:hidden" aria-hidden="true" onClick={onClose} />
      )}
      <aside
        aria-label="Main navigation"
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform lg:static lg:translate-x-0",
          "dark:border-slate-800 dark:bg-slate-950",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between gap-2 px-4 pb-2 pt-4">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-wide text-slate-900 dark:text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            {APP_NAME}
          </Link>
          <button
            aria-label="Close sidebar"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-3 pt-2">
          <Button onClick={onNewChat} className="w-full justify-center gap-2">
            <Plus className="h-4 w-4" aria-hidden="true" />
            New Chat
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-2 pt-4" aria-label="Workspace">
          <SidebarGroup label="Engagement" items={WORKSPACE_ITEMS} activeItemId={activeItemId} />
          <SidebarGroup label="Help & Support" items={SUPPORT_ITEMS} activeItemId={activeItemId} />

          <div className="mt-4 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-4 text-white">
            <p className="text-sm font-semibold">Unlock Pro Features</p>
            <p className="mt-1 text-xs text-brand-100">
              Get higher usage limits, priority responses, and early access to new tools.
            </p>
            <Button className="mt-3 w-full bg-white text-brand-700 hover:bg-brand-50" size="sm">
              Upgrade to Pro
            </Button>
          </div>
        </nav>

        <div className="flex items-center justify-around border-t border-slate-200 px-2 py-2 dark:border-slate-800">
          <IconLink href="/" label="Home" icon={Home} active />
          <IconLink href="#" label="Community" icon={Users} />
          <Link
            href="/settings"
            aria-label="Settings"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <Settings className="h-5 w-5" />
          </Link>
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}

function SidebarGroup({
  label,
  items,
  activeItemId,
}: {
  label: string;
  items: SidebarItem[];
  activeItemId?: string;
}) {
  return (
    <div className="mb-5">
      <p className="px-2 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>
      <ul className="space-y-0.5">
        {items.map((item) => {
          const Icon = ICONS[item.icon] ?? FileText;
          const isActive = item.id === activeItemId;
          return (
            <li key={item.id}>
              <button
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm text-slate-600 hover:bg-slate-100",
                  "dark:text-slate-300 dark:hover:bg-slate-800",
                  isActive && "bg-brand-50 font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-400"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="flex-1 truncate">{item.label}</span>
                {item.pro && (
                  <span className="rounded-full bg-brand-100 px-1.5 py-0.5 text-[10px] font-semibold text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
                    PRO
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function IconLink({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string;
  label: string;
  icon: typeof Home;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800",
        active && "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400"
      )}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}
