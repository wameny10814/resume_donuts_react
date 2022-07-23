import React from 'react';
// import './Login.css';
import '../../components/Member/Eye.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  //設定密碼眼睛
  const [eye, setEye] = useState('password');
  const [pic, setPic] = useState('../../../images/EyeSlash.svg');
  const [cat, setCat] = useState('../../../images/logincat.svg');

  //設定登入資料
  const [myform, setMyform] = useState({
    account: '',
    password: '',
  });

  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    console.log({ id, val });
    setMyform({ ...myform, [id]: val });
    // setCat('../../../images/logincat_blind.svg');
  };
  //轉頁
  const navigate = useNavigate();
  const whenSubmit = (event) => {
    event.preventDefault();

    console.log(myform);
    // TODO: 欄位檢查-----------------------------------------------------------------
    
    fetch('http://localhost:3600/login-jwt', {
      method: 'POST',
      body: JSON.stringify(myform),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          //登入成功 寫進localstorage & 跳轉到首頁
          //登入成功需刷新才能更改navbar ??
          localStorage.setItem('auth', JSON.stringify(result.data));
          // navigate('/');
          alert('登入成功!');

        } else {
          alert('帳密錯誤');
        }
      });
  };

  const toggleEye = () => {
    if (eye === 'password') {
      setEye('text');
      setPic('../../../images/Eye.svg');
      setCat('../../../images/logincat_blind.svg');
    } else {
      setEye('password');
      setCat('../../../images/logincat_blind.svg');
      setPic('../../../images/EyeSlash.svg');
    }
  };

  const blurtexting = () => {
    setCat('../../../images/logincat.svg');
  };
  return (
    <>
      <div className="container yu_container">
        <header className="yu_header">
          <p>會員登入</p>
        </header>
        <div className="row">
          <div className="col">
            <div className="logincat d-flex justify-content-center">
              <img src={cat} alt="" />
              {/* <img src="../../../images/logincat_blind.svg" alt="" /> */}
            </div>
            <form action="" onSubmit={whenSubmit}>
              <div className="yu_logincard d-flex">
                <div className="yu_inputblock">
                  <label htmlFor="">帳號</label>
                  <input
                    id="account"
                    name="account"
                    type="text"
                    value={myform.account}
                    onChange={changeFields}
                  />
                </div>
                <div className="yu_inputblock ">
                  <label htmlFor="">密碼</label>
                  <input
                    id="password"
                    type={eye}
                    name="passwrod"
                    onChange={changeFields}
                    onBlur={blurtexting}
                    onClick={() => {
                      setCat('../../../images/logincat_blind.svg');
                    }}
                    value={myform.password}
                  />
                  <div className="yu_logineye_absolute">
                    <img
                      className="yu_logineye"
                      src={pic}
                      alt=""
                      onClick={toggleEye}
                      onFocus={() => {
                        setCat('../../../images/logincat_blind.svg');
                      }}
                      onMouseDown={() => {
                        setCat('../../../images/logincat_blind.svg');
                      }}
                    />
                  </div>
                  <a href="#/">忘記密碼</a>
                </div>
                <button>登入</button>
                <p>
                  第一次光臨嗎?
                  <Link to="/MemberRegister">點此註冊</Link>
                </p>
                <p>
                  <Link className="nav-link" to="/AdminLogin">
                    admin
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
