import React from 'react';
// import './Membercenter.css';
function Membercenter() {
  return (
    <>
      <div className="h_full container yu_container">
        <header className="yu_header">
          <h2>會員中心</h2>
        </header>
        <nav className="yu_bar_nav">
          <div className="container yu_container">
            <ul className="yu_bar_ul">
              <li >
                <a href="#/">歷史訂單</a>
              </li>
              <li>
                <a href="#/">密碼更新</a>
              </li>
              <li>
                <a href="#/">發布文章</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="yu_profile">
          <div className="row-6 d-flex">
            <div className="col">
              <figure className="yu_avatar">
                <img src="./images/anyahe.jpg" alt="" />
              </figure>
              <div className="d-flex justify-content-center">
                <button type="submit" className="yu_avatar_btn">
                  上傳大頭貼
                </button>
              </div>
            </div>
            <div className="col-6 yu_profile_editing">
              <div className="yu_member_title">
                <h4>nickname 目前會員等級 xx</h4>
              </div>
              <form className="yu_flex">
                <div className="yu_profile_form_group form-group">
                  <label for="birthday" className="col-3">
                    生日
                  </label>
                  <input
                    type="birthday"
                    className="birthday col-8"
                    id="birthday"
                    placeholder="birthday"
                  />
                  <p className="col-3 error">帳號錯誤</p>
                </div>
                <div className="yu_profile_form_group  form-group">
                  <label for="email" className="col-3">
                    電子郵件
                  </label>
                  <input
                    type="email"
                    className="email col-8"
                    id="email"
                    placeholder="email"
                  />
                  <p className="col-3 error">帳號錯誤</p>
                </div>
                <div className="yu_profile_form_group  form-group">
                  <label for="mobile" className="col-3">
                    連絡電話
                  </label>
                  <input
                    type="mobile"
                    className="mobile col-8"
                    id="mobile"
                    placeholder="mobile"
                  />
                  <p className="col-3 error">帳號錯誤</p>
                </div>
                <div className="yu_profile_form_group  form-group">
                  <label for="address" className="col-3">
                    地址
                  </label>
                  <input
                    type="address"
                    className="address col-8"
                    id="address"
                    placeholder="address"
                  />
                  <p className="col-3 error">帳號錯誤</p>
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
