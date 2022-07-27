import { React, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../pages/member/components/AuthContext';

function Navbar(props) {

  const { authorized, account, logout } = useContext(AuthContext);

  return (
    <div className="navContainer">
      <nav className="navbar navbar-expand-lg navbar-light ml-3  ">
        <Link className="navbar-brand" to="/">
          <img src="./images/main-Logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#/">
                關於我們<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                最新消息
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                品牌故事
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">

            {authorized ? (
              <>

                <li className="nav-item">
                  <Link className="nav-link" to="Membercenter">
                    <i className="fa-solid fa-user"></i>會員專區
                  </Link>
                </li>
                <div className="nav-item">
                <li className="nav-link yu_pointer" onClick={() => logout()} >
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  登出
                </li>
                </div>

              </>
              
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="Login">
                  <i className="fa-solid fa-user"></i>會員登入
                </Link>
              </li>

            )}


            <li className="nav-item">
              <Link className="nav-link" to="Cart">
                <i className="fa-solid fa-cart-shopping"></i>購物車
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Product">
                <i className="fa-solid fa-shop"></i>商品一覽
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
