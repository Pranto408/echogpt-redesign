export type Role = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: Role;
  content: string;
  createdAt: Date;
}

export interface Conversation {
  id: string;
  title: string;
  updatedAt: Date;
  messages: ChatMessage[];
  pinned?: boolean;
}

export interface AiModel {
  id: string;
  name: string;
  description: string;
}
