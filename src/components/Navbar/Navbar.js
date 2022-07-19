import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light  ">
        <a class="navbar-brand" href="#">
          <img src="./images/main-Logo.png" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                關於我們<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                最新消息
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                品牌故事
              </a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="Membercenter">
                <i class="fa-solid fa-user"></i>會員專區
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="Cart">
                <i class="fa-solid fa-cart-shopping"></i>購物車
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="ProductsYu">
                <i class="fa-solid fa-shop"></i>商品一覽
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
