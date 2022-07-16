import React from 'react';
import './App.css';
import Index from './pages/member/Index';
import Navbar from './components/Navbar';
import BackgroundWaveAnimation from './components/BackgroundWaveAnimation';

function App() {
  return (
    <>
      <BackgroundWaveAnimation />
      <Navbar />
      <Index />
    </>
  );
}

export default App;
