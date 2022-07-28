import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AuthContext from '../../pages/member/components/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import './Membercenter.css';
function Membercenter() {
  const { authorized, token, account, level, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  //如未登入轉出至首頁
  if (authorized === false) {
    navigate('/');
  }

  // 第一次記錄伺服器的原始資料用
  const [usersRaw, setUsersRaw] = useState([]);
  // 呈現資料用
  const [usersDisplay, setUsersDisplay] = useState([]);

  const [pickedAvatar, setPickedAvatar] = useState(false);

  const [avatarName, setAvatarName] = useState('');

  const getdata = async () => {
    const response = await axios.get('http://localhost:3600/member/userdata', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('res!!', response.data);
    const r = response.data;
    console.log('r!!', r[0].account);
    // 設定到state

    setUsersRaw(r[0]);
    console.log('state', usersRaw);
    setUsersDisplay(r[0]);
  };

  useEffect(() => {
    getdata();
  }, []);

  //to do 模擬點擊???????-----------------------------------------------
  const imgclick = () => {
  const [pickedAvatar, setPickedAvatar] = useState(false);
  const [avatarName, setAvatarName] = useState('');
  
  const imgonclick = () => {
    // const file = e.target;
    // console.log(file)
    // const file = e.target.files[0];
    console.log('123');
    // avatar.onChange(avatarchange());
  };
  //大頭貼上傳至後端資料夾
  //to do 大頭貼寫入資料庫--------------------------------------------
    
    // avatar.onChange(avatarchange());
  };

  const avatarchange = () => {
    //files 會是個nodelist
    // const file = e.target.files[0];
    // console.log(file);
    // if (file) {
    //   setPickedAvatar(true);
    //   setAvatarName(file.name);
    // }
    const fd = new FormData(document.avatar_form);
    fetch('http://localhost:3600/yu-upload', {
      method: 'POST',
      body: fd,
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        console.log('data', data.filename);
        setAvatarName(data.filename);
        const a = Date.parse(usersDisplay.birthday);
        console.log('birthday', a);
      });
  };

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
                <Link className="nav-link" to="/MemberPsdchange">
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
<<<<<<< HEAD
                <figure className="d-flex yu_avatar_pic">
                  <img
                    src={`http://localhost:3600/yuimgs/${avatarName}`}
                    alt=""
                    onClick={imgclick}
=======
                <figure className="d-flex yu_avatar_pic ">
                  <img
                    src={`http://localhost:3600/yuimgs/${avatarName}`}
                    alt=""
                    onClick={imgonclick}
                  
>>>>>>> 13de53f4e3f40c82bf9b0c9e6b29a8a4e0560031
                  />
                </figure>
                {/* <form name="avatar_form">

                  <input type="file" multiple name="avatar" accept="images/jpeg,images/png" onChange={avatarchange} />

                </form> */}
                <div className="d-flex justify-content-center yu_avatar_upload">
                  <button className="yu_avatar_btn">上傳照片</button>
                  <form name="avatar_form">
                    <input
                      type="file"
                      multiple
<<<<<<< HEAD
                      name="avatar"
                      accept="images/jpeg,images/png"
                      onChange={avatarchange}
=======
                      
                
                      name="avatar"
                      accept="images/jpeg,images/png"
                      onChange={avatarchange}
                

>>>>>>> 13de53f4e3f40c82bf9b0c9e6b29a8a4e0560031
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-6 yu_profile_editing">
              <div className="yu_member_title">
                <p>
                  {usersDisplay.account} 目前會員等級 {usersDisplay.level}
                </p>
              </div>
              <form className="yu_flex">
                <div className="yu_profile_form_group form-group">
                  <label htmlFor="birthday" className="col-3">
                    生日
                  </label>
                  <input
                    type="date"
                    className="birthday col-8"
                    id="birthday"
                    placeholder="birthday"
                    value="2022-07-21"
                  />
                  <p className="error">生日錯誤</p>
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
                    value={usersDisplay.email}
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
                  <button
                    type="submit"
                    className=" mt-5 yu_profile-btn"
                    onClick={getdata}
                  >
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
