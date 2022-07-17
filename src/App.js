import React from 'react';
import './App.css';
// import Membercenter from './pages/member/Membercenter';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import BackgroundWaveAnimation from './components/BackgroundWaveAnimation';
// import Login from './pages/member/Login';
// import Eye from './components/Member/Eye'
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
