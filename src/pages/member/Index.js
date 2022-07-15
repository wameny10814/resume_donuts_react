import React from 'react';
import './Index.css';
function Index() {
  return (
    <>
      <div className="h_full container">
        <header>
          <h2>會員中心</h2>
        </header>
        <nav>
          <div className="container">
            <ul>
              <li>
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
        <div className="profile">
          <div className="rol-6 d-flex">
            <div className="col">
              <figure className="avatar">
                <img src="./images/anyahe.jpg" alt="" />
              </figure>
              <div className="d-flex">
                <button type="submit" className="btn avatar_btn">
                  上傳大頭貼
                </button>
              </div>
            </div>
            <div className="col-6">
              <div className="member_title">
                <h4>nickname 目前會員等級 xx</h4>
              </div>
              <form>
                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
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
                <button type="submit" className="btn profile-btn">
                  修改會員資料
                </button>
              </form>
            </div>
          </div>
        </div>
        <header>
          <h2>里程碑</h2>
        </header>
        <div className="milestone d-flex">
          <div className="step">
            <div className="stone">
              <div className="stone_figure">
                <img src="../images/catpaw.svg" alt="" />
              </div>
              <p className="milestone_text">完成資料修改</p>
            </div>
          </div>
          <div className="step">
            <div className="stone">
              <div className="stone_figure">
                <img src="../images/catpaw.svg" alt="" />
              </div>
              <p className="milestone_text">完成一筆訂單</p>
            </div>
          </div>
          <div className="step">
            <div className="stone">
              <div className="stone_figure">
                <img src="../images/catpaw.svg" alt="" />
              </div>
              <p className="milestone_text">完成五筆訂單</p>
            </div>
          </div>
          <div className="step">
            <div className="stone">
              <div className="stone_figure">
                <img src="../images/catpaw.svg" alt="" />
              </div>
              <p className="milestone_text">單筆訂單滿xxx元</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
