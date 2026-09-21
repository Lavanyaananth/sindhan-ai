import { Message } from "@/components/chat/Message";
import type { ChatMessage } from "@/types/chat";
interface ConversationProps {
  messages: ChatMessage[];
}
export function Conversation({ messages }: ConversationProps) {
  return (
    <main className="flex flex-1 flex-col overflow-y-auto px-6 py-6 ">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
        {messages.map((message) => (
          <Message key={message.id} message={message}></Message>
        ))}

        <div className="mx-auto mt-6 w-full max-w-3xl"></div>
      </div>
    </main>
  );
}
