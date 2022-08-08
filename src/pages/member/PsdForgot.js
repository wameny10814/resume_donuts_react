import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../member/components/AuthContext';
import cat from './images/logincat.svg';
import catHide from './images/logincat_blind.svg';
import eye from './images/Eye.svg';
import eyeSlash from './images/EyeSlash.svg';
import PsdForgot02 from './PsdForgot02';
import PsdForgot03 from './PsdForgot03';
import { display, style } from '@mui/system';

function PsdForgot(props) {
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

  //設定登入資料
  const [myform, setMyform] = useState({
    email: '',
  });
  const [confirmedEmail, setConfirmedEmail] = useState('');
  const [emailblock, setEmailblock] = useState('block');
  const [didConfirmed, setDidConfirmed] = useState(false);

  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    console.log({ id, val });
    setMyform({ ...myform, [id]: val });
  };
  //轉頁
  const navigate = useNavigate();

  const whenSubmit = (event) => {
    event.preventDefault();

    console.log(myform);
    if (myform.email === '') {
      return;
    }
    fetch('http://localhost:3600/member/checkmail', {
      method: 'POST',
      body: JSON.stringify(myform),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        // console.log('result', result[0].email);
        if (!result.success) {
          alert('查無此信箱!');
        } else {
          setDidConfirmed(true);
          setConfirmedEmail(result[0].email);
          setEmailblock('none');
        //   navigate('/PsdForgot02');
        }
      });
  };
  return (
    <>
      <div className="container yu_container" onClick={checkIfHide}>
        <header className="yu_header">
          <p>忘記密碼</p>
        </header>
        <div className="row">
          <div className="col">
            <div className="logincat d-flex justify-content-center">
              <img src={isCatHide ? catHide : cat} alt="" />
              {/* <img src="../../../images/logincat_blind.svg" alt="" /> */}
            </div>
            <form action="" onSubmit={whenSubmit}>
              <div className="yu_logincard d-flex">
                <div className="yu_inputblock">
                  <label htmlFor="">請輸入信箱</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={myform.email}
                    onChange={changeFields}
                  />
                </div>
                <div className="yu-psdforgot-btn-div">
                  <button
                    type="submit"
                    className="ProjectButton yu-psdforgot-btn"
                  >
                    送出
                  </button>
                </div>
              </div>
            </form>
            <PsdForgot02 userEmail={confirmedEmail}></PsdForgot02>
            <PsdForgot03 userEmail={confirmedEmail}></PsdForgot03>
          </div>
        </div>
      </div>
    </>
  );
}

export default PsdForgot;
