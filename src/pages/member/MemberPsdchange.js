import React, { useState, useContext, useEffect, useRef } from 'react';
import cat from './images/logincat.svg';
import catHide from './images/logincat_blind.svg';
import eye from './images/Eye.svg';
import eyeSlash from './images/EyeSlash.svg';

function MemberPsdchange() {
  const [isCatHide, setIsCatHide] = useState(false);
  const [isHide, setIsHide] = useState(true);

  const checkIfHide = (e) => {
    console.log('hi', e.target.tagName);
    if (e.target.tagName === 'INPUT' && e.type === 'focus') {
      setIsCatHide(isHide);
    } else if (e.target.tagName === 'INPUT' && e.type === 'blur') {
      setIsCatHide(false);
    } else if (e.target.tagName === 'DIV') {
      setIsCatHide(false);
    } else if (e.target.tagName === 'IMG') {
      const nowHide = !isHide;
      setIsCatHide(nowHide);
      setIsHide(nowHide);
    }
  };

  const whenSubmit = () => {
    console.log('表單送出');
  };
  return (
    <>
      <div className="container">
        <header className="yu_header">
          <p>密碼更新</p>
        </header>
        <div className="row">
          <div className="col">
            <div className="logincat d-flex justify-content-center">
              <img src={isCatHide ? catHide : cat} alt="" />
            </div>
            <form action="" onSubmit={whenSubmit}>
              <div className="yu_logincard d-flex">
                <div className="yu_inputblock ">
                  <label htmlFor="">請輸入舊密碼</label>
                  <input
                    id="password"
                    type={isHide ? 'password' : 'text'}
                    name="passwrod"
                    onFocus={checkIfHide}
                    onBlur={checkIfHide}
                  />
                  <div className="yu_psdchange_eye_relative">
                    <img
                      className="yu_psdchange_eye"
                      src={isHide ? eyeSlash : eye}
                      alt=""
                    />
                  </div>
                  <span>舊密碼錯誤</span>
                </div>
                <div className="yu_inputblock ">
                  <label htmlFor="">請輸入新密碼</label>
                  <input
                    id="password"
                    type={isHide ? 'password' : 'text'}
                    name="passwrod"
                    onFocus={checkIfHide}
                    onBlur={checkIfHide}
                  />
                  <div className="yu_psdchange_eye_relative">
                    <img
                      className="yu_logineye"
                      src={isHide ? eyeSlash : eye}
                      alt=""
                    />
                  </div>
                  <span>新密碼需輸入相同</span>
                </div>
                <div className="yu_inputblock ">
                  <label htmlFor="">請再次輸入新密碼</label>
                  <input
                    id="password"
                    type={isHide ? 'password' : 'text'}
                    name="passwrod"
                    onFocus={checkIfHide}
                    onBlur={checkIfHide}
                  />
                  <div className="yu_psdchange_eye_relative">
                    <img
                      className="yu_logineye"
                      src={isHide ? eyeSlash : eye}
                      alt=""
                    />
                  </div>
                  <span>新密碼需輸入相同</span>
                </div>
                <button className="ProjectButton">密碼確認更新</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberPsdchange;
