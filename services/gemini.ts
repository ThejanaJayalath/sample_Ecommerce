
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (history: Message[], userInput: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "You are Lumina, a helpful and sophisticated shopping assistant for an e-commerce store called Lumina Luxe. You provide product recommendations, fashion advice, and technical specs in a concise, friendly manner. Our categories are Electronics, Fashion, Home & Living, and Wellness.",
      }
    });

    const response = await chat.sendMessage({ message: userInput });
    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later!";
  }
};
