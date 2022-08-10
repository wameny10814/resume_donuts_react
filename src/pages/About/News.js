import ProjectButton from '../../components/ProjectButton/ProjectButton';
import H2 from '../../components/H2';

import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import axios from 'axios';

function News() {
  const [newsData, setNewsData] = useState([]);
  const [control, setControl] = useState(0);

  const getNewsData = async () => {
    const response = await axios.get(
      `http://localhost:3600/willownews/showalldata`
    );
    const resdata = response.data;
    setNewsData(resdata);
  };

  useEffect(() => {
    getNewsData();
  }, []);

  // finishtime: "2022-09-27"
  // news_at: "2022-08-05T05:22:04.000Z"
  // newsid: 27
  // newsimg: "e6080e13-2e83-4cee-a440-492d5d9d898d.jpg"
  // newsstyle: 2
  // newstitle: "蕙蕙蕙123"
  // starttime: "2022-08-09"
  // userid: 0
  // words: "qweqweqweqweqweqewqweqwe"

  return (
    <>
      {console.log(newsData)}
      <H2 title="最新消息" Entitle="NEWS" />
      <Swiper loop={true} autoplay={true} className="mySwiper">
        {newsData.map((v, i) => {
          return (
            <SwiperSlide key={v.newsid}>
              <div className="container d-flex my-5">
                <div className="col-12 col-md-6">
                  <img
                    className="w-100 h-auto"
                    src="./images/News-img-1.svg"
                    alt=""
                  />
                </div>
                <div className="col-12 col-md-6 h-100">
                  <p className="bingH4 mx-auto px-5">{v.newstitle}</p>
                  <p className="bingText-16 mx-auto px-5">{v.words}</p>
                  <div className="text-center my-5">
                    <ProjectButton text="MORE" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default News;
