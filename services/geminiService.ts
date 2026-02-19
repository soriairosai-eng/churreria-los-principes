import { GoogleGenAI } from "@google/genai";
import { BUSINESS_INFO, MENU_ITEMS } from "../constants";

// Lazy initialization or safe check
const getAIClient = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("Gemini API Key is missing (VITE_GEMINI_API_KEY). Chatbot will be disabled.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const getMaestroRecommendation = async (userPrompt: string) => {
  try {
    const ai = getAIClient();
    if (!ai) {
      return "Lo siento, el Maestro Chocolatero está descansando (Falta API Key). Por favor contacta al administrador.";
    }

    const model = 'gemini-1.5-flash'; // Updated model name
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

    const result: any = await ai.models.generateContent({
      model,
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction,
        temperature: 0.8,
        topP: 0.9,
      },
    } as any);

    // Handle widespread SDK variations safely
    const responseText = result.response ? result.response.text : result.text;
    if (typeof responseText === 'function') {
      return responseText();
    }
    return responseText || "El chocolate está listo.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "El chocolate está casi listo, pero ahora mismo no puedo atenderte. ¡Visítanos en el Barrio de Fátima!";
  }
};
