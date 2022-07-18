import React from 'react';
import './Login.css';
import '../../components/Member/Eye.js';
import { useState } from 'react';

function Login() {
  //設定密碼眼睛
  const [eye, setEye] = useState('password');
  const [pic, setPic] = useState('../../../images/EyeSlash.svg');
  const [cat, setCat] = useState('../../../images/logincat.svg');

  const toggleEye = () => {
    if (eye === 'password') {
      setEye('text');
      setPic('../../../images/EyeSlash.svg');
    } else {
      setEye('password');
      setPic('../../../images/Eye.svg');
    }
  };
  const textingCat = () => {
    setCat('../../../images/logincat_blind.svg');
  };
  const blurtexting = () => {
    setCat('../../../images/logincat.svg');
  };
  return (
    <>
      <div className="container">
        <header>
          <h2>會員登入</h2>
        </header>
        <div className="row">
          <div className="col">
            <div className="logincat d-flex justify-content-center">
              <img src={cat} alt="" />
              {/* <img src="../../../images/logincat_blind.svg" alt="" /> */}
            </div>
            <div className="logincard d-flex">
              <div className="inputblock">
                <label htmlFor="">帳號</label>
                <input type="text" />
              </div>
              <div className="inputblock ">
                <label htmlFor="">密碼</label>
                <input type={eye} onChange={textingCat} onBlur={blurtexting} />
                <div className="absolute">
                  <img
                    className="logineye"
                    src={pic}
                    alt=""
                    onClick={toggleEye}
                  />
                </div>

                <a href="#/">忘記密碼</a>
              </div>
              <button>登入</button>
              <p>
                第一次光臨嗎?
                <a href="#/">點此註冊</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
