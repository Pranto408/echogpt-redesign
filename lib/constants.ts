import type { AiModel } from "./types";

export const APP_NAME = "EchoGPT";

export const AI_MODELS: AiModel[] = [
  { id: "echo-fast", name: "EchoGPT", description: "Quick answers, everyday tasks" },
  { id: "echo-pro", name: "Echo Pro", description: "Deeper reasoning, longer context" },
  { id: "echo-vision", name: "Echo Vision", description: "Understands images and screenshots" },
];

export interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  pro?: boolean;
}

export const WORKSPACE_ITEMS: SidebarItem[] = [
  { id: "image-studio", label: "Image Studio", icon: "image", pro: true },
  { id: "video-studio", label: "Video Studio", icon: "video", pro: true },
  { id: "compare", label: "Compare", icon: "compare" },
  { id: "connectors", label: "Connectors", icon: "connectors" },
  { id: "history", label: "History", icon: "history" },
  { id: "store", label: "Store", icon: "store" },
  { id: "ai-tasks", label: "AI Tasks", icon: "tasks" },
  { id: "job-analysis", label: "AI Job Analysis", icon: "job" },
  { id: "sop-builder", label: "AI SOP Builder", icon: "sop" },
];

export const SUPPORT_ITEMS: SidebarItem[] = [
  { id: "support", label: "Support", icon: "support" },
  { id: "newsletter", label: "Newsletter", icon: "newsletter" },
  { id: "subscriptions", label: "Subscriptions", icon: "subscriptions" },
  { id: "api-platform", label: "API Platform", icon: "api" },
  { id: "discord", label: "Discord", icon: "discord" },
];

export const SUGGESTION_CARDS = [
  {
    title: "Unlock your creative flow",
    description:
      "Get prompts shaped to your own writing style, to push past blocks and spark new ideas.",
  },
  {
    title: "Build a resume that shines",
    description:
      "Tailor your resume to a specific role so it highlights the experience that matters most.",
  },
  {
    title: "Set a challenge that transforms you",
    description:
      "Turn a goal into a personalized challenge that nudges you a little outside your comfort zone.",
  },
  {
    title: "Write irresistible social content",
    description:
      "Generate captions with personality for your photos and videos, built to spark conversation.",
  },
] as const;

export const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
] as const;
