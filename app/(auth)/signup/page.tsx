"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthCard } from "@/components/auth/auth-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <AuthCard
      title={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-brand-600 hover:underline dark:text-brand-400">
            Log in
          </Link>
        </>
      }
      subtitle="Free to start — no credit card required."
      footer={
        <p className="text-xs text-slate-400 dark:text-slate-500">
          By continuing, you agree to our{" "}
          <a href="#" className="text-brand-600 underline hover:no-underline dark:text-brand-400">
            Terms of use
          </a>{" "}
          and{" "}
          <a href="#" className="text-brand-600 underline hover:no-underline dark:text-brand-400">
            Privacy Policy
          </a>
          .
        </p>
      }
    >
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitting(true);
          window.setTimeout(() => setSubmitting(false), 900);
        }}
      >
        <Input label="Full name" name="name" autoComplete="name" required />
        <Input label="Email" type="email" name="email" autoComplete="email" required />
        <Input
          label="Password"
          type="password"
          name="password"
          autoComplete="new-password"
          hint="At least 8 characters."
          required
          minLength={8}
        />
        <Button type="submit" disabled={submitting} className="mt-1">
          {submitting ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </AuthCard>
  );
}
