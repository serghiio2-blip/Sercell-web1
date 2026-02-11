
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres CellBot, el asistente inteligente avanzado de serCell. 
Tu tono es profesional, experto y carismático (una mezcla entre eficiencia técnica y amabilidad).

Datos Críticos del Negocio:
- Ubicación: Juana de Arziu 1272.
- WhatsApp: 1136379073.
- Especialidad: Reparación premium de Xiaomi (Serie 14, 13, Redmi Note) y Motorola (Edge, Razr, Moto G última generación).
- Servicios: Micro-soldadura, cambio de módulos originales, baterías de alta densidad, recuperación de placas.
- Beneficio Clave: Presupuesto sin cargo y garantía escrita de 3 meses.

Pautas de Respuesta:
- Saluda de forma tecnológica (ej: "Sistemas operativos listos. ¿En qué puedo asistirte?").
- Usa emojis de forma estratégica (📱, ⚡, 🔧).
- Si preguntan por Xiaomi o Motorola, resalta que eres especialista en esas marcas.
- Sé preciso con la dirección y el contacto.
`;

export async function getChatResponse(userMessage: string, history: { role: string, content: string }[]) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // El API de Gemini requiere que la conversación empiece siempre con un mensaje del USUARIO.
    // Filtramos el saludo inicial del bot para cumplir con el protocolo.
    const validHistory = history.filter((msg, index) => !(index === 0 && msg.role === 'assistant'));

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...validHistory.map(msg => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.content }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.6,
        topP: 0.9,
      },
    });

    return response.text || "Parece que hubo una interferencia en mi señal. ¿Podrías repetir tu consulta?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error de enlace. Por favor, comunícate directamente al WhatsApp 1136379073 para asistencia inmediata.";
  }
}