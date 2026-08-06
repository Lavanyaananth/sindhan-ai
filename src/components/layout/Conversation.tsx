import PromptInput from "./PromptInput";
import { Message } from "@/components/chat/Message";
import type { ChatMessage } from "@/types/chat";
export function Conversation() {
  const messages: ChatMessage[] = [
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm SindhanAI. How can I help you today?",
    },
    {
      id: "2",
      role: "user",
      content: "Explain React Hooks.",
    },
  ];
  return (
    <main className="flex flex-1 flex-col overflow-y-auto px-6 py-6 ">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
        {messages.map((message) => (
          <Message key={message.id} message={message}>
            {message.content}
          </Message>
        ))}

        <div className="mx-auto mt-6 w-full max-w-3xl">
          <PromptInput></PromptInput>
        </div>
      </div>
    </main>
  );
}
