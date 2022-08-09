import React from 'react';
import '../../components/Member/Eye.js';
import { useState, useEffect } from 'react';
import cat from './images/logincat.svg';
import catHide from './images/logincat_blind.svg';
import eye from './images/Eye.svg';
import eyeSlash from './images/EyeSlash.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function MemberRegister() {
  const [regForm, setRegForm] = useState({
    account: '',
    pass_hash: '',
    password_check: '',
    birthday: '',
    email: '',
  });

  const [regFormError, setRegFormError] = useState({
    account: '',
    pass_hash: '',
    password_check: '',
    birthday: '',
    email: '',
  });

  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    console.log({ id, val });
    setRegForm({ ...regForm, [id]: val });
  };
  const navigate = useNavigate();
  const whenSubmit = (event) => {
    //預設行為:送給自己
    event.preventDefault();

    console.log(regForm);

    if (regForm.pass_hash !== regForm.password_check) {
      setRegFormError({
        ...regFormError,
        pass_hash: '密碼需與密碼確認欄位相同',
        password_check: '密碼需與密碼確認欄位相同',
      });

      return;
    }

    fetch('http://localhost:3600/member/add', {
      method: 'POST',
      body: JSON.stringify(regForm),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        console.log(result);
        alert('註冊成功!請嘗試登入。');
        navigate('/Login');
      });
  };

  // 表單用，有不合法的驗証出現時會觸發
  const handleInvalid = (e) => {
    // 先阻擋預設行為-泡泡訊息
    e.preventDefault();

    // 錯誤訊息
    // console.log(e.target.validationMessage);

    // 填入錯誤訊息
    setRegFormError({
      ...regFormError,
      [e.target.name]: e.target.validationMessage,
    });
  };

  //給表單用,使用者回來修正錯誤,使用onchange錯誤訊息更新
  const errorCheck = (e) => {
    setRegFormError({
      ...regFormError,
      [e.target.name]: '',
    });
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
            </div>

            <div className="yu_regcard">
              <form
                name="register"
                className="yu_reg_form "
                onSubmit={whenSubmit}
                onInvalid={handleInvalid}
                onChange={errorCheck}
              >
                <div className="reg_form">
                  <div className="inputblock">
                    <label htmlFor="" required>
                      *帳號
                    </label>
                    <div className="yu_eye_rela">
                      <input
                        id="account"
                        type="text"
                        name="account"
                        value={regForm.account}
                        onChange={changeFields}
                        required
                      />
                    </div>

                    <p className="reg_error">{regFormError.account}</p>
                  </div>
                  <div className="inputblock">
                    <label htmlFor="" required>
                      *密碼
                    </label>
                    <input
                      id="pass_hash"
                      type="password"
                      name="pass_hash"
                      value={regForm.pass_hash}
                      onChange={changeFields}
                      minLength={6}
                      required
                    />
                    <p className="reg_error">{regFormError.pass_hash}</p>
                    <div className="reg_absolute">
                      <img className="reg_eye" src={eye} alt="" />
                    </div>
                  </div>
                  <div className="inputblock ">
                    <label htmlFor="" required>
                      *密碼確認
                    </label>
                    <input
                      id="password_check"
                      type="password"
                      name="password_check"
                      value={regForm.password_check}
                      onChange={changeFields}
                      required
                    />
                    <p className="reg_error">{regFormError.password_check}</p>
                    <div className="reg_absolute">
                      <img className="reg_eye" src={eye} alt="" />
                    </div>
                  </div>
                  <div className="inputblock">
                    <label htmlFor="">生日</label>
                    <input
                      id="birthday"
                      type="date"
                      name="birthday"
                      value={regForm.birthday}
                      onChange={changeFields}
                    />
                  </div>
                  <div className="inputblock">
                    <label htmlFor="" required>
                      *電子信箱
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={regForm.email}
                      onChange={changeFields}
                      required
                    />
                    <p className="reg_error"> {regFormError.email}</p>
                  </div>
                  <button type="submit" className="ProjectButton">
                    註冊
                  </button>
                  <button
                    className="ProjectButton"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('fill');
                      setRegForm({
                        ...regForm,
                        account: 'yuchen',
                        pass_hash: 'yuchen123',
                        password_check: 'yuchen123',
                        birthday: '2012-12-12',
                        email: 'yuchen@mail.com',
                      });
                    }}
                  >
                    自動
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
