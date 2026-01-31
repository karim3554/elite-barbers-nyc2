
import { GoogleGenAI, Type } from "@google/genai";

export const getStyleConsultation = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a world-class barber consultant for Elite Barbers NYC. 
      The user is asking: "${prompt}". 
      Provide a sophisticated, helpful recommendation for a haircut or grooming style that would suit a high-end NYC professional. 
      Be concise, professional, and slightly confident.`,
      config: {
        maxOutputTokens: 300,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Consultation Error:", error);
    return "Our expert barbers are ready to assist you in person. Visit us on Lexington Ave for a personalized consultation.";
  }
};
