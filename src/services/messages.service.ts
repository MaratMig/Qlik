import { Messages } from '../models/messages.interface'
import { BaseMessage, Message } from "../models/message.interface";

const messages: Messages = {};

export const findAll = async (): Promise<Message[]> => Object.values(messages);

export const find = async (id: number): Promise<Message> => messages[id];

export const create = async (newMessage: BaseMessage): Promise<Message> => {
  const id = new Date().valueOf();

  messages[id] = {
    id,
    ...newMessage,
  };
  messages[id].palindrome = isPalindrome( messages[id].message)

  return messages[id];
};

export const update = async (
    id: number,
    itemUpdate: BaseMessage
  ): Promise<Message | null> => {
    const message = await find(id);

    if (!message) {
      return null;
    }

    messages[id] = { id, ...itemUpdate };

    return messages[id];
  };

  export const remove = async (id: number): Promise<null | void> => {
    const message = await find(id);

    if (!message) {
      return null;
    }

    delete messages[id];
  };

  const isPalindrome = (message: string): boolean => {
      let palindrome: boolean = false;

      if (message) {
        const text = message;
        const textArr = text.split("");
        const textArrReverse = [...textArr]
        textArrReverse.reverse();

        for (let index = 0; index < (textArr.length)/2; index++) {
            if(textArr[index] !== textArrReverse[index]){
                return palindrome;
            }
        }
        palindrome =  true;
      }

      return palindrome;
  }