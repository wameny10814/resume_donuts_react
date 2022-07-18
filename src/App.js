import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import BackgroundWaveAnimation from './components/BackgroundWaveAnimation';

// import Index from './pages/member/Index';
// import Cart from './pages/Cart';
import Products from './pages/Products-Yu';
// import Membercenter from './pages/member/Membercenter';
// import Login from './pages/member/Login';
// import Eye from './components/Member/Eye'

function App() {
  return (
    <>
      <BackgroundWaveAnimation />
      <Navbar />
      <Products />
      <Footer />
    </>
  );
}

export default App;
