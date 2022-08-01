function ImgOnClick(params) {
  const ImgWrap = document.querySelector('.Mars-cnt-imgwr');
  ImgWrap.style = 'box-shadow: 0 5px 25px 0 rgb(0 0 0 / 10%);';
}

export default ImgOnClick;

// Plan A: eventListener hover out 後取消陰影