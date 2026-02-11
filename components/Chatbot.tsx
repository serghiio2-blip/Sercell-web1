
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Smartphone, Zap, MessageSquare } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Protocolos de asistencia serCell activos. Soy CellBot Neural. ¿En qué área de soporte puedo asistirle?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getChatResponse(userMsg, messages);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {/* Ventana de Chat - Neural Design */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="w-[350px] sm:w-[420px] h-[600px] bg-[#080808]/95 backdrop-blur-2xl border border-blue-500/20 rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col mb-4"
          >
            {/* Minimalist Header */}
            <div className="bg-black/50 p-6 flex justify-between items-center border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                    <Zap className="text-blue-400 w-6 h-6 animate-pulse" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-black" />
                </div>
                <div>
                  <h3 className="text-white font-black text-lg font-poppins tracking-tight">CellBot <span className="text-blue-500">Neural</span></h3>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-emerald-400 font-black uppercase tracking-[0.2em]">Core Active</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center transition-all text-white">
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 text-[15px] font-medium leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none shadow-lg shadow-blue-600/10' 
                    : 'bg-white/5 text-white rounded-2xl rounded-tl-none border border-white/10'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Futuristic Input */}
            <div className="p-6 bg-black/80 border-t border-white/10">
              <div className="flex gap-3 bg-white/5 border border-white/10 rounded-2xl p-2 focus-within:border-blue-500 transition-all">
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ingrese requerimiento técnico..."
                  className="flex-1 bg-transparent px-3 py-2 text-sm outline-none text-white placeholder:text-gray-600"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-500 transition-all disabled:opacity-50"
                >
                  <Send size={18} className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Holographic Orb Mascot */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer relative z-50 group"
      >
        <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
        
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="w-20 h-20 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full border-2 border-white/20 shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center relative overflow-hidden"
        >
          {/* Inner Core */}
          <div className="w-10 h-10 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
            <Zap className="text-white w-5 h-5" />
          </div>
          
          {/* Scanning lines effect */}
          <div className="absolute inset-0 w-full h-1 bg-blue-300/20 animate-[scan_3s_linear_infinite]" />
          
          {/* Rotating Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full scale-110"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Chatbot;
