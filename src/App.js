import React from 'react';
import Index from './pages/member/Index';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import BackgroundWaveAnimation from './components/BackgroundWaveAnimation';

function App() {
  return (
    <>
      <BackgroundWaveAnimation />
      <Navbar />
      <Index />
      <Footer />
    </>
  );
}

export default App;
