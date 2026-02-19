
import React, { useState, useRef, useEffect } from 'react';
import { getMaestroRecommendation } from '../services/geminiService';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    const response = await getMaestroRecommendation(userMessage);
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[350px] md:w-[400px] h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#C5A059]/20 animate-fadeInUp">
          <div className="bg-[#2D1B14] p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-xl">
                👨‍🍳
              </div>
              <div>
                <h4 className="text-white font-serif text-sm">El Maestro Chocolatero</h4>
                <p className="text-[#C5A059] text-[10px] uppercase tracking-widest">En línea desde el obrador</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#F9F7F2]/50">
            {messages.length === 0 && (
              <div className="text-center py-10 opacity-60">
                <p className="text-sm italic text-chocolate">"¿Buscas el desayuno perfecto? Pregúntame por nuestros jeringos o mi recomendación de hoy."</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-[#2D1B14] text-white rounded-tr-none' 
                    : 'bg-white border border-[#C5A059]/30 text-[#2D1B14] rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl border border-[#C5A059]/30 text-xs text-chocolate italic animate-pulse">
                  El Maestro está pensando...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu antojo aquí..."
              className="flex-1 bg-gray-50 border-none rounded-full px-4 text-sm focus:ring-1 focus:ring-[#C5A059]"
            />
            <button 
              onClick={handleSend}
              className="bg-[#C5A059] text-white p-2 rounded-full hover:bg-[#b38e4a] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#2D1B14] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group relative border-2 border-[#C5A059]"
        >
          <span className="text-2xl">👨‍🍳</span>
          <div className="absolute -top-12 right-0 bg-[#C5A059] text-[#2D1B14] text-[10px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            HABLA CON EL MAESTRO
          </div>
        </button>
      )}
    </div>
  );
};

export default AIChatbot;
