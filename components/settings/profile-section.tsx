import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

export function ProfileSection() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Profile</h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Update your name and how you appear in shared chats.
      </p>

      <div className="mt-6 flex items-center gap-4">
        <Avatar label="Jordan Rivera" className="h-16 w-16 text-base" />
        <Button variant="outline" size="sm">Change avatar</Button>
      </div>

      <form className="mt-6 grid gap-4 sm:grid-cols-2">
        <Input label="Full name" name="name" defaultValue="Jordan Rivera" />
        <Input label="Email" name="email" type="email" defaultValue="jordan@example.com" />
        <div className="sm:col-span-2">
          <Button type="submit">Save changes</Button>
        </div>
      </form>
    </Card>
  );
}
