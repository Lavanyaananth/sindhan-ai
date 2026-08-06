import { Sidebar } from "@/components/layout/Sidebar";
import { Conversation } from "@/components/layout/Conversation";
import { useState } from "react";
function App() {
  const [messages, setMessages] = useState([]);
  return (
    <div className="flex h-screen">
      <Sidebar></Sidebar>
      <Conversation></Conversation>
    </div>
  );
}

export default App;
