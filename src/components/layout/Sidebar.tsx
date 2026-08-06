import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
export function Sidebar() {
  return (
    <aside className="w-64 h-full flex flex-col border-r p-2">
      <Logo className="h-8 w-8" />
      <Button>New chat</Button>
      <nav className="mt-auto">
        <p className="font-medium"> Recent chats </p>
        <ul className="flex flex-col gap-2 mb-4">
          <li>Explain react</li>
          <li>What is GPT?</li>
          <li>Explain Gemini API</li>
        </ul>
        <button className="border w-full p-3 rounded-2xl transition-colors flex items-center gap-3 hover:bg-accent">
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
