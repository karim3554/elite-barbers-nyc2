
import React from 'react';
import { Scissors, Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center space-x-2">
              <Scissors className="text-amber-500 w-8 h-8" />
              <span className="text-3xl font-serif font-bold tracking-tighter text-white">ELITE BARBERS NYC</span>
            </div>
            <p className="text-gray-500 max-w-md font-light leading-relaxed">
              Located in the iconic Baronness building on Lexington Ave, we provide a grooming experience that merges Manhattan sophistication with master-level craftsmanship.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-500">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500">
                <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-amber-500 transition-colors">Why Elite</a></li>
              <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery</a></li>
              <li><a href="#faq" className="hover:text-amber-500 transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:row items-center justify-between text-gray-600 text-xs uppercase tracking-widest">
          <p>© 2025 ELITE BARBERS NYC. ALL RIGHTS RESERVED.</p>
          <div className="mt-4 md:mt-0 space-x-8 flex">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
