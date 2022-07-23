import React from 'react';
import '../../components/Member/Eye.js';
// import { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function MemberRegister() {
  const getUserData = async () => {
    // 第一次記錄伺服器的原始資料用
    const [usersRaw, setUsersRaw] = useState([]);
    // 呈現資料用
    const [usersDisplay, setUsersDisplay] = useState([]);

    const response = await axios.get(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    );
    console.log(response)
    // 設定到state

    setUsersRaw(response.data);

    const pageArray = chunk(response.data, perPage);

    if (pageArray.length > 0) {
      setPageTotal(pageArray.length);
      setUsersDisplay(pageArray);
    }
  };

  didMount
  useEffect(() => {
    getUserData();
  }, []);

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

            <div className="logincard d-flex">
              <form name="register" onsubmit="sendForm(event)">
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
                <button onClick={() => {}}>註冊</button>
              </form>

              <p>
                已擁有帳號
                <Link class="nav-link" to="/Login">
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
