export interface BaseMessage {
    message: string;
    palindrome: boolean;
}

export interface Message extends BaseMessage {
    id: number;
  }