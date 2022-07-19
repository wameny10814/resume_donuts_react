import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BackgroundWaveAnimation from './components/BackgroundWaveAnimation';
import './App.css';

import Cart from './pages/Cart';
import ProductsYu from './pages/Products-Yu/Products-Yu';
import Membercenter from './pages/member/Membercenter';
import Login from './pages/member/Login';
import Member_register from './pages/member/Member_register';

// react router 錄影檔 7/19 14:33
function App() {
  // 設定會員登入狀態 錄影檔 7/19 14:55
  const [auth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />

      {/* 路由表 */}
      <Routes>
        {/* LoveYu的頁面 */}
        <Route path="ProductsYu" element={<ProductsYu />} />
        <Route path="Cart" element={<Cart />} />

        {/* Yu的頁面 */}
        <Route path="Login" element={<Login />} />
        <Route path="Membercenter" element={<Membercenter />} />
        <Route path="Member_register" element={<Member_register />} />
      </Routes>

      <Footer />
      <BackgroundWaveAnimation />
    </BrowserRouter>
  );
}

export default App;
