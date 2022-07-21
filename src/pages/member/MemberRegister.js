import React from 'react';
import '../../components/Member/Eye.js';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function MemberRegister() {
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
      <div className="container yu_container">
        <header className="yu_header">
          <p>會員註冊</p>
        </header>
        <div className="row">
          <div className="col">
            <div className="yu_regCat d-flex justify-content-center">
              <img src={cat} alt="" />
              {/* <img src="../../../images/logincat_blind.svg" alt="" /> */}
            </div>
            <div className="yu_regCard d-flex  align-items-center ">
              <div className="yu_inputblock">
                <input type="text" name="account" placeholder="帳號" />
              </div>
              <div className="yu_inputblock">
                <input
                  type={eye}
                  name="psd"
                  onChange={textingCat}
                  onBlur={blurtexting}
                  placeholder="密碼"
                />
                <div className="regEye_absolute">
                  <img
                    className="regEye"
                    src={pic}
                    alt=""
                    onClick={toggleEye}
                  />
                </div>
              </div>
              <div className="yu_inputblock ">
                <input
                  type={eye}
                  name="psdchek"
                  onChange={textingCat}
                  onBlur={blurtexting}
                  placeholder="密碼確認"
                />
                <div className="regEye_absolute">
                  <img
                    className="regEye"
                    src={pic}
                    alt=""
                    onClick={toggleEye}
                  />
                </div>
              </div>
              <div className="yu_inputblock">
                <input type="email" name="email" placeholder="電子信箱" />
              </div>
              <div className="yu_inputblock">
                <input type="date" name="birth" placeholder="出生日期" />
              </div>
              <div className="reg_btn_box">
                <button className="reg_btn">註冊</button>
              </div>
              <p className="reg_loginbtn">
                已擁有帳號
                <Link className="reg_loginbtn_link" to="/Login">點此登入</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberRegister;
