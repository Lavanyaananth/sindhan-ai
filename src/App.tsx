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
    console.log("handleSendMessage called");
    console.log("input:", input);
    console.log("isLoading:", isLoading);
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
      if (!response.ok) {
        throw new Error("Failed to get AI response");
      }
      const data = await response.json();
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
        <Conversation messages={messages}></Conversation>
        {/* Loading state */}
        {isLoading && (
          <div className="px-6 py-3 text-sm text-gray-500">Thinking...</div>
        )}
        {/* Error state */}
        {error && <div className="px-6 py-3 text-sm text-red-500">{error}</div>}

        <div className="border-t p-4">
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
              disabled={isLoading}
              placeholder="Ask anything..."
              className="flex-1 rounded-lg border px-4 py-2"
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
