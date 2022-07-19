import React from 'react';
import '../../components/Member/Eye.js';
import { useState } from 'react';

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
          <h2>會員註冊</h2>
        </header>
        <div className="row">
          <div className="col">
            <div className="logincat d-flex justify-content-center">
              <img src={cat} alt="" />
              {/* <img src="../../../images/logincat_blind.svg" alt="" /> */}
            </div>
            <div className="logincard d-flex">
              <div className="inputblock">
                <label htmlFor="" required>
                  帳號
                </label>
                <input type="text" name="account" />
              </div>
              <div className="inputblock">
                <label htmlFor="" required>
                  密碼
                </label>
                <input
                  type={eye}
                  name="psd"
                  onChange={textingCat}
                  onBlur={blurtexting}
                />
                <div className="absolute">
                  <img
                    className="logineye"
                    src={pic}
                    alt=""
                    onClick={toggleEye}
                  />
                </div>
              </div>
              <div className="inputblock ">
                <label htmlFor="" required>
                  密碼確認
                </label>
                <input
                  type={eye}
                  name="psdchek"
                  onChange={textingCat}
                  onBlur={blurtexting}
                />
                <div className="absolute">
                  <img
                    className="logineye"
                    src={pic}
                    alt=""
                    onClick={toggleEye}
                  />
                </div>
              </div>
              <div className="inputblock">
                <label htmlFor="" required>
                  電子信箱
                </label>
                <input type="email" name="email" />
              </div>
              <div className="inputblock">
                <label htmlFor="">生日</label>
                <input type="date" name="birth" />
              </div>
              <button>註冊</button>
              <p>
                已擁有帳號
                <a href="#/">點此登入</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberRegister;
