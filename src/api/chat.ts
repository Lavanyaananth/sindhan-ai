import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
export default async function handler(req: Request) {
  //POST method check
  if (req.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
    });
  }
  try {
    //message type check
    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return Response.json({ error: "Message is required" }, { status: 400 });
    }
    //sending messages to gemini and API response
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });
    return Response.json({
      reply: response.text,
    });
  } catch (error) {
    //error
    console.log("Gemini API error ", error);
    return Response.json(
      {
        error: "Failed to generate response",
      },
      {
        status: 500,
      },
    );
  }
}
