import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navContainer">
      <nav className="navbar navbar-expand-lg navbar-light ml-3  ">
        <a className="navbar-brand" href="#/">
          <img src="./images/main-Logo.png" alt="" />
        </a>
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
              <a className="nav-link" href="#">
                關於我們<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                最新消息
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                品牌故事
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="Membercenter">
                <i className="fa-solid fa-user"></i>會員專區
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Cart">
                <i className="fa-solid fa-cart-shopping"></i>購物車
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="ProductsYu">
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
