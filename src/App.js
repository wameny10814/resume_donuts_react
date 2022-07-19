import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import BackgroundWaveAnimation from './components/BackgroundWaveAnimation';
import './App.css';

// import Index from './pages/member/Index';
// import Cart from './pages/Cart';
import ProductsYu from './pages/Products-Yu/Products-Yu';
import Membercenter from './pages/member/Membercenter';
import Login from './pages/member/Login';
// import Eye from './components/Member/Eye'
// import Member_register from './pages/member/Member_register'

// react router 錄影檔 7/19 14:33
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="ProductsYu" element={<ProductsYu />} />
      </Routes>
      <Footer />
      <BackgroundWaveAnimation />
    </BrowserRouter>
  );
}

export default App;
