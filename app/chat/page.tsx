import { redirect } from "next/navigation";

/** The chat experience now lives at "/" (see app/page.tsx) — keep this route
 *  working for anyone with an old /chat link or bookmark. */
export default function ChatRedirectPage() {
  redirect("/");
}
