function ImgOnClick() {
  const ImgWrap = document.querySelector('.Mars-cnt-imgwr');
  
  // if (ImgWrap.style.boxShadow = '' || ImgWrap.style.boxShadow = 'none') {
    ImgWrap.style = 'box-shadow: 0 5px 25px 0 rgb(0 0 0 / 10%);';
  // } else {
  //   ImgWrap.style = 'box-shadow: none;';
  // }
}

export default ImgOnClick;

// Plan A: eventListener hover out 後取消陰影