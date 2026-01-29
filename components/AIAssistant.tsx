
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/gemini';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hi! I\'m Lumina, your personal concierge. Looking for recommendations or have questions about our products?' }
  ]);
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

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const aiText = await getAIResponse(messages, input);
    setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 flex flex-col border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-indigo-600 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-white font-bold">Ask Lumina</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-indigo-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 shadow-sm rounded-tl-none border border-gray-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-400 p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 italic text-sm">
                  Lumina is thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about silk masks, headphones..."
                className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-indigo-600 text-white p-2 rounded-xl hover:bg-indigo-700 transition-colors disabled:bg-gray-400"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-indigo-700 hover:scale-110 transition-all duration-300 ring-4 ring-indigo-500/20"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
