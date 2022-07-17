import React from 'react';
import Index from './pages/member/Index';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import BackgroundWaveAnimation from './components/BackgroundWaveAnimation';
import Cart from './pages/Cart'

function App() {
  return (
    <>
      <BackgroundWaveAnimation />
      <Navbar />
      <Cart />
      <Footer />
    </>
  );
}

export default App;
