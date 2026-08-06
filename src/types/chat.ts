export type MessageRole = "user" | "assistant";
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}
