import { Button } from "@/components/ui/button";
function PromptInput() {
  return (
    <div className="border p-3 rounded-2xl shadow-sm">
      <div className="flex items-center gap-3">
        <textarea
          className="flex-1 w-full resize-none bg-transparent outline-none"
          placeholder="Ask anything"
          rows={1}
        ></textarea>

        <Button className="cursor-pointer"> Send</Button>
      </div>
    </div>
  );
}

export default PromptInput;
