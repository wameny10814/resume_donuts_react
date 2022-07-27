import React from 'react';
import '../../components/Member/Eye.js';
import { useState, useEffect } from 'react';
import cat from './images/logincat.svg';
import catHide from './images/logincat_blind.svg';
import eye from './images/Eye.svg';
import eyeSlash from './images/EyeSlash.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function MemberRegister() {
  // useEffect(() => {
  //   setUserData();
  // }, []);

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

            <div className="yu_regcard">
              <form
                name="register"
                className="yu_reg_form "
                onsubmit="sendForm(event)"
              >
                <div className="reg_form">
                  <div className="inputblock">
                    <label htmlFor="" required>
                      *帳號
                    </label>
                    <input type="text" name="account" />
                  </div>
                  <div className="inputblock">
                    <label htmlFor="" required>
                      *密碼
                    </label>
                    <input type="password" name="psd" />
                    <div className="reg_absolute">
                      <img className="reg_eye" src={eye} alt="" />
                    </div>
                  </div>
                  <div className="inputblock ">
                    <label htmlFor="" required>
                      *密碼確認
                    </label>
                    <input type="password" name="psdchek" />
                    <div className="reg_absolute">
                      <img className="reg_eye" src={eye} alt="" />
                    </div>
                  </div>
                  <div className="inputblock">
                    <label htmlFor="">生日</label>
                    <input type="date" name="birth" />
                  </div>
                  <div className="inputblock">
                    <label htmlFor="" required>
                      *電子信箱
                    </label>
                    <input type="email" name="email" />
                  </div>
                  <button
                  // onClick={() => {
                  //   setUserData = async () => {
                  //     const response = await axios.post(
                  //       'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
                  //     );
                  //     console.log(response);
                  //     // 設定到state
                  //   };
                  // }}
                  >
                    註冊
                  </button>
                </div>
              </form>

              <p>
                已擁有帳號
                <Link className="nav-link yu_reg_link_p" to="/Login">
                  點此登入
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberRegister;
