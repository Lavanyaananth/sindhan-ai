import { Sidebar } from "@/components/layout/Sidebar";
import { Conversation } from "@/components/layout/Conversation";
function App() {
  return (
    <div className="flex h-screen">
      <Sidebar></Sidebar>
      <Conversation></Conversation>
    </div>
  );
}

export default App;
