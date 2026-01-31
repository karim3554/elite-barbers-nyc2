
import React from 'react';
import { SERVICES } from '../constants';
import { Scissors } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-[1px] bg-amber-500 mt-3 mx-2"></div>
          <Scissors className="text-amber-500" />
          <div className="w-12 h-[1px] bg-amber-500 mt-3 mx-2"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Elite Craftsmanship</h2>
        <p className="text-gray-400 max-w-2xl mx-auto font-light">
          We combine traditional barbering techniques with modern style for a grooming experience unlike any other in Manhattan.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className="group relative bg-[#111] p-10 rounded-3xl border border-white/5 hover:border-amber-500/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
               {service.icon}
            </div>
            
            <div className="w-14 h-14 bg-amber-600/10 rounded-2xl flex items-center justify-center text-amber-500 mb-8 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
              {service.icon}
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-white mb-2">{service.name}</h3>
            <div className="flex items-center space-x-3 mb-4 text-amber-500 font-bold">
              <span>{service.price}</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="text-gray-500 font-normal text-sm">{service.duration}</span>
            </div>
            
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              {service.description}
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-amber-500 group-hover:translate-x-2 transition-transform"
            >
              Book Service <Scissors className="ml-2 w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
