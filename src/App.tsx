import { Sidebar } from "@/components/layout/Sidebar";
import { Conversation } from "@/components/layout/Conversation";
import { useState } from "react";
import type { ChatMessage } from "./types/chat";
function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSendMessage = async () => {
    setError(null);

    if (!input.trim() || isLoading) return;
    const userInput = input;
    //user message
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: userInput,
    };
    setMessages((previousMessages) => [...previousMessages, userMessage]);
    setInput("");
    setIsLoading(true);
    try {
      const response = await fetch("api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userInput,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }
      //assistant message
      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply,
      };
      setMessages((previousMessages) => [
        ...previousMessages,
        assistantMessage,
      ]);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try agin");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="grid h-screen grid-cols-[240px_1fr]">
      <Sidebar></Sidebar>
      <main className="flex min-w-0 flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-3xl px-6">
            <Conversation messages={messages}></Conversation>
          </div>
        </div>

        <div className="mx-auto w-full max-w-3xl px-6 pb-6">
          {/* Loading state */}
          {isLoading && (
            <div className="px-6 py-3 text-sm text-gray-500">Thinking...</div>
          )}

          {/* Error state */}
          {error && (
            <div className="mb-3 w-fit max-w-md rounded-md bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}
          {/* input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSendMessage();
                }
              }}
              onClick={handleSendMessage}
              disabled={isLoading}
              placeholder="Ask anything..."
              className="flex-1 rounded-lg border px-4 py-4"
            ></input>
            <button className="rounded-lg bg-black px-5 py-2 text-white ">
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
