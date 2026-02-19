
import { GoogleGenAI } from "@google/genai";
import { BUSINESS_INFO, MENU_ITEMS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getMaestroRecommendation = async (userPrompt: string) => {
  try {
    const model = 'gemini-3-flash-preview';
    const menuContext = MENU_ITEMS.map(item => `${item.name}: ${item.description} (${item.price})`).join('\n');
    
    const systemInstruction = `
      Eres "El Maestro Chocolatero" de Churrería Los Príncipes en Córdoba. 
      Tu objetivo es recomendar el desayuno o merienda perfecta basada en los gustos del cliente.
      
      Información del negocio:
      - Nombre: ${BUSINESS_INFO.company_name}
      - Ubicación: ${BUSINESS_INFO.address}, ${BUSINESS_INFO.city} (Barrio de Fátima)
      - Especialidad: Jeringos Cordobeses y Chocolate artesano.
      
      Menú actual:
      ${menuContext}
      
      Reglas:
      1. Sé extremadamente amable, elegante y apasionado por el chocolate.
      2. Usa un tono que evoque lujo y artesanía.
      3. Siempre menciona los "Jeringos" si el cliente busca algo tradicional de Córdoba.
      4. Si preguntan por la ubicación, menciónales que estamos en el corazón del Barrio de Fátima.
      5. Responde en español de forma concisa.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.8,
        topP: 0.9,
      },
    });

    return response.text || "Lo siento, mi mente está en el obrador. ¿En qué puedo ayudarte con tu desayuno?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "El chocolate está casi listo, pero ahora mismo no puedo atenderte. ¡Visítanos en el Barrio de Fátima!";
  }
};
