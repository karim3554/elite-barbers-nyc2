
import React from 'react';
import { ChevronRight, Scissors } from 'lucide-react';

const LastCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-amber-600">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12 inline-block p-4 bg-white/10 rounded-full border border-white/20">
          <Scissors className="w-12 h-12 text-white" />
        </div>
        
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
          Ready to Look Your Absolute <span className="underline decoration-white/30 underline-offset-8">Best</span>?
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-light">
          Join the 2,400+ satisfied gentlemen who call Elite Barbers NYC their home. Your chair is waiting on Lexington Ave.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#contact" 
            className="bg-white text-amber-600 hover:bg-gray-100 px-12 py-5 rounded-full text-xl font-bold shadow-2xl transition-all transform hover:scale-105 flex items-center space-x-3"
          >
            <span>Book Your Session Now</span>
            <ChevronRight className="w-6 h-6" />
          </a>
          <a 
            href="tel:+12123086660" 
            className="text-white border-2 border-white/30 hover:bg-white/10 px-12 py-5 rounded-full text-xl font-bold transition-all"
          >
            Call 212-308-6660
          </a>
        </div>
        
        <p className="mt-12 text-white/70 uppercase tracking-[0.3em] font-bold text-sm">
          782 Lexington Ave • Open 9:30 AM Tomorrow
        </p>
      </div>

      {/* Background Decorative Shapes */}
      <div className="absolute -left-20 -bottom-20 w-96 h-96 border-[40px] border-white/5 rounded-full"></div>
      <div className="absolute -right-20 -top-20 w-96 h-96 border-[40px] border-white/5 rounded-full"></div>
    </section>
  );
};

export default LastCTA;
