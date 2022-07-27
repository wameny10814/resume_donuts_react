import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import './Membercenter.css';
function Membercenter() {

  const uploadavatar = () => {
    const fd = new FormData(document.form1);
    fetch('http://localhost:3600/try-upload', {
      method: 'POST',
      body: fd,
    })
      .then(r => r.json())
      .then(data => {
        console.log(data);
      })

  }

  return (
    <>
      <div className="h_full container yu_container">
        <header className="yu_header">
          <h2>會員中心</h2>
        </header>
        <nav className="yu_bar_nav">
          <div className="container yu_container">
            <ul className="yu_bar_ul">
              <li>
                <Link className="nav-link" to="/MemberHistory">
                  <i className="fa-solid fa-user"></i>歷史訂單
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/MemberPsdchange">
                  <i className="fa-solid fa-user"></i>密碼更新
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/PostMessage">
                  <i className="fa-solid fa-user"></i>發布評論
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="yu_profile">
          <div className="row-6 d-flex ">
            <div className="col">
              <div className="yu_avatar_upload">
                <figure className="d-flex yu_avatar_pic">
                  <img src="./images/anyahe.jpg" alt="" />
                </figure>
                {/* <form name="avatar_form" style="display: none">
                  <input type="file" multiple name="avatar" accept="images/jpeg,images/png" onChange={uploadavatar} />

                </form> */}
                <div className="d-flex justify-content-center yu_avatar_upload">
                  {/* <button className="className=" yu_avatar_btn onclick="document.avatar_form.avatar.click()">上傳照片</button> */}

                </div>
              </div>
            </div>
            <div className="col-6 yu_profile_editing">
              <div className="yu_member_title">
                <p>nickname 目前會員等級 xx</p>
              </div>
              <form className="yu_flex">
                <div className="yu_profile_form_group form-group">
                  <label htmlhtmlFor="birthday" className="col-3">
                    生日
                  </label>
                  <input
                    type="date"
                    className="birthday col-8"
                    id="birthday"
                    placeholder="birthday"
                  />
                  <p className="error">帳號錯誤</p>
                </div>
                <div className="yu_profile_form_group  form-group">
                  <label htmlFor="email" className="col-3">
                    電子郵件
                  </label>
                  <input
                    type="email"
                    className="email col-8"
                    id="email"
                    placeholder="email"
                  />
                  <p className="error">帳號錯誤</p>
                </div>
                <div className="yu_profile_form_group  form-group">
                  <label htmlFor="mobile" className="col-3">
                    連絡電話
                  </label>
                  <input
                    type="mobile"
                    className="mobile col-8"
                    id="mobile"
                    placeholder="mobile"
                  />
                  <p className="error">帳號錯誤ffffffffffffffffff</p>
                </div>
                <div className="yu_profile_form_group  form-group">
                  <label htmlFor="address" className="col-3">
                    地址
                  </label>
                  <input
                    type="address"
                    className="address col-8"
                    id="address"
                    placeholder="address"
                  />
                  <p className="error">帳號錯誤</p>
                </div>
                <div className="d-flex ">
                  <button type="submit" className=" mt-5 yu_profile-btn">
                    修改會員資料
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <header className="yu_header">
          <h2>里程碑</h2>
        </header>
        <div className="yu_milestone d-flex">
          <div className="step">
            <div className="stone">
              <div className="yu_stone_figure">
                <img src="../images/catpaw.svg" alt="" />
              </div>
              <p className="yu_milestone_text">完成資料修改</p>
            </div>
          </div>
          <div className="step">
            <div className="stone">
              <div className="yu_stone_figure">
                <img src="../images/catpaw.svg" alt="" />
              </div>
              <p className="yu_milestone_text">完成一筆訂單</p>
            </div>
          </div>
          <div className="step">
            <div className="stone">
              <div className="yu_stone_figure">
                <img src="../images/catpaw.svg" alt="" />
              </div>
              <p className="yu_milestone_text">完成五筆訂單</p>
            </div>
          </div>
          <div className="step">
            <div className="stone">
              <div className="yu_stone_figure">
                <img src="../images/catpaw.svg" alt="" />
              </div>
              <p className="yu_milestone_text">單筆訂單滿xxx元</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Membercenter;
