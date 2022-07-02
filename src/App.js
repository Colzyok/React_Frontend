import React from 'react';
import NavBar from './components/NavBar'
import HeroSection from './components/Main/HeroSection'
import Features from './components/Main/Features'
import Services from './components/Main/Services'
import Pricing from './components/Main/Pricing'
import About from './components/Main/About'
import Newsletter from './components/Main/Newsletter'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <NavBar />
    <HeroSection />
    <Features />
    <Services />
    <Pricing />
    <About />
    <Newsletter />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
