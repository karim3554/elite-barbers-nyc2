
import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1622286332618-f2803b11428c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1593702295094-ada74ca4a49a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1605497746444-ac961bc97843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">The Result of Precision</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Explore our portfolio of premium cuts, shaves, and the refined atmosphere of our Lexington Ave studio.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 max-w-[1600px] mx-auto px-1 md:px-4">
        {images.map((src, i) => (
          <div key={i} className="group relative aspect-square overflow-hidden rounded-sm md:rounded-xl">
            <img 
              src={src} 
              alt={`Elite Barber Work ${i + 1}`} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-serif italic text-lg border-b border-amber-500">Elite Style</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
