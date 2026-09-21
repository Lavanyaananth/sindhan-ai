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
    const { message } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Message is required",
      });
    }
    console.log("1. API function started");

    console.log("2. Request body:", req.body);

    console.log("3. Calling Gemini...");
    //sending messages to gemini and API response
    const response = await Promise.race([
      ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: message,
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Gemini request timed out")), 15000),
      ),
    ]);
    console.log("4. Gemini responded");
    return res.status(200).json({
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
