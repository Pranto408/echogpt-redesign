# EchoGPT — Redesign

A redesigned front-end for EchoGPT: a landing page, chat interface, settings, and
auth screens, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

> Note on scope: echogpt.live is a client-rendered app All chat data here
> is local mock/demo data — there's no backend.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Routes: `/` (landing), `/chat`, `/login`, `/signup`,
`/settings`.

## Stack & structure

- **Next.js 14 App Router + TypeScript** — file-based routing, server components
  by default; `"use client"` only where interactivity is needed (chat, forms,
  theme toggle).
- **Tailwind CSS** — utility classes, `darkMode: "class"` driven by `next-themes`.
- **next-themes** — light/dark/system mode with no flash-of-wrong-theme on load.
- **Framer Motion** — subtle entrance animations on the landing page only;
  respects `prefers-reduced-motion` globally (see `globals.css`).
- **lucide-react** — icon set.

```
app/                  Routes (App Router)
  layout.tsx           Root layout: fonts, theme provider, skip link
  page.tsx             Home — the app shell itself (sidebar + chat), no separate marketing page
  chat/page.tsx         Redirects to "/" (kept for old links/bookmarks)
  settings/page.tsx     Settings (tabs: profile, appearance, API & data)
  (auth)/login/, signup/   Auth screens (route group, no /auth prefix in URL)
components/
  ui/                  Reusable primitives: Button, Input, Textarea, Card,
                       Avatar, Switch, Skeleton
  layout/              ThemeToggle
  chat/                ChatSidebar, ChatWindow, MessageBubble, ChatInput,
                       ModelSelector, TypingIndicator, EmptyState
  settings/            SettingsNav, ProfileSection, AppearanceSection, ApiSection
  auth/                AuthCard, SocialButton
lib/                   types, constants (nav items, models, suggestion cards), cn() utility
hooks/                 useChat (demo send/reply), useLocalStorage, useMediaQuery
```

## What changed vs. a typical AI-chat UI, and why

- **App-shell home, not a marketing page**: like the reference screenshots,
  `/` opens straight into the assistant (sidebar + greeting + suggestion
  cards + composer) with a "Sign In" button, rather than a separate hero/
  features landing page.
- **Accessibility**: every icon-only control has an `aria-label`; the theme
  toggle, model picker, and nav items use correct ARIA roles
  (`listbox`/`option`, `switch`, `aria-current`); focus rings are visible in
  both themes; there's a "Skip to main content" link; the message list uses
  `aria-live="polite"` so replies are announced; motion is disabled under
  `prefers-reduced-motion`.
- **Usability**: Enter sends a message, Shift+Enter adds a newline; the
  textarea auto-grows; empty state offers starter prompts instead of a blank
  screen; the sidebar collapses to an off-canvas drawer below `lg` instead of
  disappearing entirely.
- **Performance**: no client-side data fetching library needed for this demo
  (state is local); route-based code splitting comes from the App Router;
  `next/font` self-hosts Inter (no render-blocking font request); icons are
  tree-shaken (`lucide-react` + `optimizePackageImports`).
- **Responsive**: the sidebar becomes a full off-canvas drawer under `lg`; the
  composer's toolbar row wraps sensibly on narrow screens.

## Wiring up a real backend

`hooks/use-chat.ts` currently fakes a reply with `setTimeout`. To connect a
real model:

1. Replace the body of `sendMessage` with a `fetch` to your API route
   (e.g. `app/api/chat/route.ts`) that streams tokens back.
2. Swap the `setTimeout` completion for incremental `setMessages` updates as
   chunks arrive (or use the Vercel AI SDK's `useChat` hook, which this file
   deliberately mirrors the shape of).
3. `ModelSelector` already exposes the selected model id — pass it along in
   the request body.

## Verified

`npm run build` (type-check + lint + production build) passes cleanly in this
repo as delivered.
