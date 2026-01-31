
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Scissors } from 'lucide-react';
import { getStyleConsultation } from '../services/geminiService';

const StyleConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const result = await getStyleConsultation(input);
    setResponse(result || "Our expert barbers are ready to assist you in person.");
    setLoading(false);
  };

  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] p-8 md:p-12 rounded-[2rem] border border-amber-500/20 shadow-2xl relative overflow-hidden">
          {/* Decorative icons */}
          <div className="absolute top-4 right-4 text-amber-500/20">
            <Scissors className="w-24 h-24 rotate-12" />
          </div>

          <div className="relative z-10 text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full border border-amber-500/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">AI Style Concierge</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Not sure what style fits you?</h2>
            <p className="text-gray-400">Describe your hair type or the look you're going for, and our Elite AI consultant will recommend a path forward.</p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: I have thick wavy hair and want a professional but modern look..."
                className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-xl px-6 py-4 text-white focus:border-amber-500 outline-none transition-all shadow-inner"
              />
              <button 
                onClick={handleConsult}
                disabled={loading}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                <span>Consult AI</span>
              </button>
            </div>

            {response && (
              <div className="mt-8 p-6 bg-[#0a0a0a]/50 rounded-xl border border-white/5 animate-fade-in text-left">
                <p className="text-amber-500 font-serif italic mb-2">Our Recommendation:</p>
                <p className="text-gray-300 leading-relaxed font-light">{response}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleConsultant;
