
import React from 'react';
import { Star, ShieldCheck, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Barber Shop Interior" 
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full border border-amber-500/20">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Manhattan's #1 Rated Grooming</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
            The <span className="text-amber-500">Elite</span> Experience <br /> 
            on Lexington Ave.
          </h1>
          
          <p className="text-xl text-gray-400 max-w-lg font-light leading-relaxed">
            More than just a haircut. We provide precision grooming for the modern gentleman who values detail, patience, and luxury.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">4.9</span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-xs text-gray-500 uppercase mt-1 tracking-tighter">2,462 Verified Reviews</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 border border-white/10 p-4 rounded-xl">
              <MapPin className="text-amber-500 w-6 h-6" />
              <div>
                <p className="text-sm font-bold text-white">782 Lexington Ave</p>
                <p className="text-xs text-gray-500">New York, NY 10065</p>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="animate-fade-in shadow-2xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
