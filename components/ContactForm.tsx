
import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, ChevronRight } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#111] p-10 rounded-2xl border border-amber-500/30 text-center space-y-4 max-w-md mx-auto">
        <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto">
          <Calendar className="text-amber-500 w-10 h-10" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-white">Appointment Requested!</h3>
        <p className="text-gray-400">Our concierge will contact you shortly to confirm your preferred time.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-amber-500 font-bold hover:underline"
        >
          Book another session
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
      <div className="bg-amber-600 p-6 text-center">
        <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-wider">Book Your Chair</h3>
        <p className="text-white/80 text-sm mt-1">Starting at $80 — Premium Grooming</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-8 space-y-5">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Full Name"
            required
            className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:border-amber-500 outline-none transition-all"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input 
            type="tel" 
            placeholder="Phone Number"
            required
            className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:border-amber-500 outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input 
              type="date" 
              required
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:border-amber-500 outline-none transition-all text-sm"
            />
          </div>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <select className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:border-amber-500 outline-none transition-all text-sm appearance-none">
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Select Service</label>
          <select className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg py-3 px-4 text-white focus:border-amber-500 outline-none transition-all">
            <option>Elite Haircut ($80+)</option>
            <option>Hot Shave ($70+)</option>
            <option>Full Grooming Session ($150+)</option>
            <option>Beard Sculpting ($50+)</option>
          </select>
        </div>

        <button 
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02]"
        >
          <span>Confirm Booking Request</span>
          <ChevronRight className="w-5 h-5" />
        </button>
        
        <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest leading-relaxed">
          Secure your slot in the elite chair. <br /> Our team will call to confirm within 15 mins.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
