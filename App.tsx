
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import StyleConsultant from './components/StyleConsultant';
import FAQ from './components/FAQ';
import LastCTA from './components/LastCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-amber-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <StyleConsultant />
        <Gallery />
        <FAQ />
        <LastCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
