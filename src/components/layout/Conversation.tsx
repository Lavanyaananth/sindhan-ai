import PromptInput from "./PromptInput";

export function Conversation() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6">
      <div className="w-full max-w-3xl">
        <div className="text-center">
          {/* <h1 className="font-semibold text-4xl mb-2">Welcome to SindhanAI</h1> */}
          <p className="font-normal text-3xl">How can I help you today?</p>
        </div>

        <div className="mt-8">
          <PromptInput></PromptInput>
        </div>
      </div>
    </main>
  );
}
