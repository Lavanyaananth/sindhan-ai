import { GoogleGenAI } from "@google/genai";
import type { VercelRequest, VercelResponse } from "@vercel/node";
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
console.log("Gemini API key loaded:", Boolean(process.env.GEMINI_API_KEY));
export default async function handler(req: VercelRequest, res: VercelResponse) {
  //POST method check
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed",
    });
  }
  try {
    //message type check
    const { message } = await req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Message is required",
      });
    }
    //sending messages to gemini and API response
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: message,
    });
    return Response.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Gemini API error:", error);

    if (error instanceof Error && error.message.includes("503")) {
      return res.status(503).json({
        error: "The AI service is temporarily unavailable. Please try again.",
      });
    }

    return res.status(500).json({
      error: "Failed to generate response",
    });
  }
}
