
import React from 'react';
import { Star, Shield, Users, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: <Star className="w-8 h-8" />,
    title: "4.9/5 Average Rating",
    desc: "With over 2,400 reviews, we are consistently rated Manhattan's best for precision and atmosphere."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Inclusive Atmosphere",
    desc: "LGBTQ+ friendly and welcoming to every client. We pride ourselves on a respectful and amazing behavior."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Premium Sanitation",
    desc: "Located within Baronness, we maintain hospital-grade cleanliness for your safety and comfort."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Master Detailers",
    desc: "Barbers like Danny specialize in detail, patience, and a service that never feels rushed."
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1599351431247-f50940aa616f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Barber working" 
                className="rounded-2xl h-80 w-full object-cover mt-12 shadow-2xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1512690118274-7808299167b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Details" 
                className="rounded-2xl h-80 w-full object-cover shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-amber-600 p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-serif font-bold text-white">10+</p>
              <p className="text-white/80 text-sm uppercase tracking-widest font-bold">Years of Elite <br /> Excellence</p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Why Manhattan Chooses <span className="text-amber-500 italic">Elite</span></h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Situated in the heart of Lexington Ave, Elite Barbers NYC represents the pinnacle of grooming. We don't just cut hair; we sculpt confidence through detail and a premium impression.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-amber-500">{f.icon}</div>
                  <h4 className="text-xl font-serif font-bold text-white">{f.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
