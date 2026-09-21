import type { ChatMessage } from "@/types/chat";
interface ConversationProps {
  messages: ChatMessage[];
}
export function Conversation({ messages }: ConversationProps) {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="mx-auto max-w-3xl space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={
              message.role === "user"
                ? "ml-auto max-w-[80%] rounded-lg bg-black p-3 text-white"
                : "max-w-[80%] rounded-lg bg-gray-100 p-3 text-black"
            }
          >
            {message.content}
          </div>
        ))}
      </div>
    </div>
  );
}
