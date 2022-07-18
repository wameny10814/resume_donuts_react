import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import BackgroundWaveAnimation from './components/BackgroundWaveAnimation';
import './App.css'

// import Index from './pages/member/Index';
// import Cart from './pages/Cart';
import Products from './pages/Products-Yu/Products-Yu';
import Membercenter from './pages/member/Membercenter';
import Login from './pages/member/Login';
// import Eye from './components/Member/Eye'
// import Member_register from './pages/member/Member_register'


function App() {
  return (
    <>
      <BackgroundWaveAnimation />
      <Navbar />
      <Membercenter />
      <Footer />
    </>
  );
}

export default App;
