import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
export function Sidebar() {
  return (
    <aside className="w-64 h-full flex flex-col border-r p-2">
      <Logo className="h-8 w-8" />
      <Button>New chat</Button>
      <nav className="mt-auto">
        <button className="border w-full transition-colors flex items-center gap-3 hover:bg-accent">
          <CircleUserRound className="h-10 w-10"></CircleUserRound>
          <div>
            <p>Test user</p>
            <p>Free plan</p>
          </div>
        </button>
      </nav>
    </aside>
  );
}
