import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CopyRight from './components/CopyRight';

const App = () => {
  return(
    <div>
        <NavBar />
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
        <Footer />
        <CopyRight />
    </div>
  );
};

export default App;