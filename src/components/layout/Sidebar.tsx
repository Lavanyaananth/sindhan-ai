import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
export function Sidebar() {
  return (
    <aside className="w-64 border-r">
      <Logo className="h-8 w-8" />
      <Button>New chat</Button>
      <nav>
        <p> Recent chats </p>
        <ul>
          <li>Explain react</li>
          <li>What is GPT?</li>
          <li>Explain Gemini API</li>
        </ul>
      </nav>
    </aside>
  );
}
