"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Github } from "lucide-react";
import { AuthCard } from "@/components/auth/auth-card";
import { SocialButton } from "@/components/auth/social-button";

export default function LoginPage() {
  const [updates, setUpdates] = useState(true);

  return (
    <AuthCard
      title={
        <>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-brand-600 hover:underline dark:text-brand-400">
            Sign up for free
          </Link>
        </>
      }
      subtitle=""
      footer={
        <p className="text-xs text-slate-400 dark:text-slate-500">
          By proceeding, you agree to our{" "}
          <a href="#" className="text-brand-600 underline hover:no-underline dark:text-brand-400">
            Terms of use
          </a>
          . Read our{" "}
          <a href="#" className="text-brand-600 underline hover:no-underline dark:text-brand-400">
            Privacy Policy
          </a>
          .
        </p>
      }
    >
      <div className="flex flex-col gap-3">
        <SocialButton label="Sign in with email">
          <Mail className="h-4 w-4" />
        </SocialButton>
        <SocialButton label="Sign in with Google" variant="solid">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[11px] font-bold text-brand-700">
            G
          </span>
        </SocialButton>
        <SocialButton label="Sign in with Twitter">
          <span className="text-sm font-bold">𝕏</span>
        </SocialButton>
        <SocialButton label="Sign in with GitHub">
          <Github className="h-4 w-4" />
        </SocialButton>
      </div>

      <label className="mt-5 flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400">
        <input
          type="checkbox"
          checked={updates}
          onChange={(e) => setUpdates(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-600 focus-visible:ring-brand-500"
        />
        I want to receive updates about EchoGPT
      </label>
    </AuthCard>
  );
}
