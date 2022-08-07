import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BackgroundWaveAnimation from './components/BackgroundWaveAnimation/BackgroundWaveAnimation';
import './App.css';

import Cart from './pages/Cart/Cart';
import ProductsYu from './pages/Cart/Products-Yu/Products-Yu';
import CartOrderInfo from './pages/CartOrderInfo/CartOrderInfo';
import CartOrderCompleted from './pages/CartOrderCompleted/CartOrderCompleted';
import CartOrderCheck from './pages/CartOrderCheck/CartOrderCheck';
import Customized from './pages/Customized/Customized';

import Membercenter from './pages/member/Membercenter';
import Login from './pages/member/Login';
import MemberRegister from './pages/member/MemberRegister';
import MemberHistory from './pages/member/MemberHistory';
import MemberPsdchange from './pages/member/MemberPsdchange';
import Cat from './pages/member/Cat';

// Mars
import Product from './pages/Product/Product';
import Content from './pages/Product/Content';

// Willow

import WillowAdminLogin from './pages/Admin-Willow/AdminLogin';
import WillowAdminPlace from './pages/Admin-Willow/AdminPlace';

import WillowNews from './pages/Admin-Willow/NewsAll/WillowNews';
import WillowHavegoodPrice from './pages/Admin-Willow/NewsAll/WillowHavegoodPrice';
import WillowGoodWritings from './pages/Admin-Willow/NewsAll/WillowGoodWritings';

import WillowReport from './pages/Admin-Willow/Report/WillowReport';
// 首頁
import AbingIndex from './pages/About/AbingIndex';

//context
import AuthContextProvider from '../src/pages/member/components/AuthConextProvider';

// willow context
import AdminAuthConextProvider from '../src/pages/Admin-Willow/admin_components/Admin_AuthConextProvider';

// react router 錄影檔 7/19 14:33
function App() {
  // 設定會員登入狀態 錄影檔 7/19 14:55
  // const [auth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AdminAuthConextProvider>
          <Navbar />

          {/* 路由表 */}
          <Routes>
            {/* bing的頁面 */}
            <Route path="/" element={<AbingIndex />} />

            {/* Yu的頁面 */}
            <Route path="Login" element={<Login />} />
            <Route path="Membercenter" element={<Membercenter />} />
            <Route path="MemberRegister" element={<MemberRegister />} />
            <Route path="MemberHistory" element={<MemberHistory />} />
            <Route path="MemberPsdchange" element={<MemberPsdchange />} />
            <Route path="Cat" element={<Cat />} />

            {/* LoveYu的頁面 */}
            <Route path="ProductsYu" element={<ProductsYu />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="CartOrderCheck" element={<CartOrderCheck />} />
            <Route path="CartOrderCompleted" element={<CartOrderCompleted />} />
            <Route path="Cart/CartOrderInfo" element={<CartOrderInfo />} />
            <Route path="Customized" element={<Customized />} />

            {/* 莊惟的頁面 */}
            <Route path="Product" element={<Product />} />
            <Route path="Content" element={<Content />} />

            {/* willow的頁面 */}

            <Route path="adminlogin" element={<WillowAdminLogin />} />

            <Route path="adminplace" element={<WillowAdminPlace />} />
            <Route path="willownews" element={<WillowNews />} />
            <Route
              path="willowhavegoodprice"
              element={<WillowHavegoodPrice />}
            />
            <Route path="willowgoodwritings" element={<WillowGoodWritings />} />
            <Route path="willowreport" element={<WillowReport />} />
          </Routes>

          <Footer />
        </AdminAuthConextProvider>
      </AuthContextProvider>
      <BackgroundWaveAnimation />
    </BrowserRouter>
  );
}

export default App;
