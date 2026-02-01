import React from 'react';
import { GoogleGenAI } from "@google/genai";
import * as FramerMotion from "framer-motion";
import { BRAND_NAME } from '../constants.tsx';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: `Systems Online. I am the ${BRAND_NAME} Intelligence Node. How can I assist your engineering inquiry?` }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMessage }].map(m => ({
          parts: [{ text: m.text }],
          role: m.role
        })),
        config: {
          systemInstruction: `You are the ${BRAND_NAME} Corporate AI Assistant.
          BGATE (Ali Bin Qashash Al Omari General Contracting Co.) established in 2005 in Dammam, KSA.
          Expertise:
          - Control Division: BMS (Sauter, Siemens), DDC Panels, PLC, HVAC Automation.
          - Industrial Insulation: Thermal/Cold insulation, Cladding, Scaffolding for Petrochemicals.
          - Trading: Industrial valves, SS pipes, alloys (Titus, Thermolec, Pure Humidifiers).
          - Safety: PPE and Workforce Protection.
          Tone: Highly professional, technical, precise. 
          Goal: Direct users to technical specifications or the Inquiry form for pricing.
          Location: HQ in Dammam, Branch in Jubail.`,
          temperature: 0.7,
        }
      });

      const modelText = response.text || "I encountered a synchronization error. Please re-establish the connection.";
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error("AI Node Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Critical failure in intelligence node. Please use our manual inquiry channels." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,112,255,0.4)] animate-pulse-subtle hover:scale-110 transition-transform border border-white/20"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[10px] font-black tracking-tighter leading-none">AI</span>
            <div className="w-6 h-0.5 bg-white/50 rounded-full"></div>
            <div className="w-4 h-0.5 bg-white rounded-full"></div>
          </div>
        )}
      </button>

      <FramerMotion.AnimatePresence>
        {isOpen && (
          <FramerMotion.motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 z-[60] w-[90vw] md:w-[400px] h-[600px] bg-black/90 backdrop-blur-2xl border border-white/10 rounded-sm shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-6 border-b border-white/10 bg-blue-600/5 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-blue-500">Intelligence Node</h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Status: Operational</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(0,112,255,1)]"></div>
            </div>

            <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-sm text-xs leading-relaxed uppercase tracking-wider ${
                    m.role === 'user' 
                      ? 'bg-blue-600 text-white font-bold' 
                      : 'bg-white/5 border border-white/10 text-slate-300'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-sm">
                    <div className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-white/10 bg-black">
              <div className="flex gap-3">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="COMMAND INQUIRY..."
                  className="flex-grow bg-white/5 border border-white/10 p-4 text-[11px] font-bold text-white uppercase tracking-widest focus:outline-none focus:border-blue-600 rounded-sm"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-blue-600 px-6 text-white font-black rounded-sm hover:bg-blue-500 transition-colors"
                >
                  GO
                </button>
              </div>
            </div>
          </FramerMotion.motion.div>
        )}
      </FramerMotion.AnimatePresence>
    </>
  );
};

export default AIAssistant;