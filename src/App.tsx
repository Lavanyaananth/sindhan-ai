import { Sidebar } from "@/components/layout/Sidebar";
import { Conversation } from "@/components/layout/Conversation";
import { useState } from "react";
import type { ChatMessage } from "./types/chat";
function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const handleSendMessage = () => {
    if (!input.trim()) return;
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: input,
    };
    setMessages((previousMessages) => [...previousMessages, userMessage]);
    setInput("");
  };
  return (
    <div className="grid h-screen grid-cols-[240px_1fr]">
      <Sidebar></Sidebar>
      <main className="flex min-w-0 flex-col">
        <Conversation messages={messages}></Conversation>
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
