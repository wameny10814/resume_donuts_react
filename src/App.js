import React from 'react';
import './App.css';
// import Membercenter from './pages/member/Membercenter';
import Navbar from './components/Navbar';
import BackgroundWaveAnimation from './components/BackgroundWaveAnimation';
import Login from './pages/member/Login';
import Eye from './components/Member/Eye'

function App() {
  return (
    <>
      <BackgroundWaveAnimation />
      <Navbar />
      <Login />
    </>
  );
}

export default App;
