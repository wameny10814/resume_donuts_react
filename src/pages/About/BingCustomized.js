import { useState, useRef, useEffect } from 'react';
import H2 from '../../components/H2';

function BingCustomized() {
  const realRef = useRef();
  //挑選donut
  const [donut, setDonut] = useState('origin');
  const [donutPrice, setDonutPrice] = useState(15);
  const donutPriceOptions = [15, 20, 20, 25];
  const donutOptions = ['origin', 'strawberry', 'Ponde', 'matcha'];
  //挑選糖霜
  const [layer, setLayer] = useState('');
  const [layerPrice, setLayerPrice] = useState(0);
  const layerPriceOptions = [5, 10, 10, 15, 20];
  const layerOptions = ['sugar', 'chocolate', 'strawberry', 'milk', 'dot'];
  //配料
  const [decoration, setDecoration] = useState('');
  const [decorationPrice, setDecorationPrice] = useState(0);
  const decorationPriceOptions = [5, 5, 10, 10, 15];
  const decorationOptions = [
    'rice',
    'sugarpowder',
    'cotton',
    'strawberry',
    'onion',
  ];

  const getImageFromPath = (path) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        resolve(img);
      };
    });
  };
  //畫圖
  const renderCanvas = async () => {
    const ctx = realRef.current.getContext('2d');
    const bg = await getImageFromPath('/images/Customized/bg.jpg');
    ctx.drawImage(bg, 0, 0);

    const donutImg = await getImageFromPath(
      `/images/Customized/basic/${donut}.png`
    );
    ctx.drawImage(donutImg, 0, 0);

    const layerImg = await getImageFromPath(
      `/images/Customized/layer/${layer}.png`
    );
    ctx.drawImage(layerImg, 0, 0);

    const decorationImg = await getImageFromPath(
      `/images/Customized/decoration/${decoration}.png`
    );
    ctx.drawImage(decorationImg, 0, 0);
    //多選寫法
    // for (let i of layer) {
    //   const layerImg = await getImageFromPath(
    //     `/images/Customized/layer/${i}.png`
    //   );
    //   ctx.drawImage(layerImg, 0, 0);
    // }
  };

  useEffect(() => {
    renderCanvas();
  }, [donut, layer, decoration]);

  return (
    <>
      <div className="container h-100">
        <H2 title={'製作獨特的甜甜圈'} Entitle={'Customized'}></H2>
        <div className="d-flex flex-wrap">
          <div className="col-12 col-md-4 h-100">
            <h6>挑選甜甜圈口味</h6>
            <div className="d-flex flex-wrap">
              {donutOptions.map((v, i) => {
                return (
                  <div key={i}>
                    <input
                      type="radio"
                      checked={donut === v}
                      value={v}
                      onChange={(e) => {
                        setDonut(e.target.value);
                        setDonutPrice(donutPriceOptions[i]);
                      }}
                    />
                    <div>
                      <img
                        src={`/images/Customized/basic/${v}Icon.png`}
                        alt=""
                      />
                      <p className="text-center bingText-16">
                        {donutPriceOptions[i]}元
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <h6>挑選糖霜</h6>
            <div className="d-flex flex-wrap">
              {layerOptions.map((v, i) => {
                return (
                  <div key={i}>
                    <input
                      type="radio"
                      checked={layer === v}
                      value={v}
                      onChange={(e) => {
                        setLayer(e.target.value);
                        setLayerPrice(layerPriceOptions[i]);
                      }}
                    />
                    <div>
                      <img
                        src={`/images/Customized/layer/${v}Icon.png`}
                        alt=""
                      />
                      <p className="text-center bingText-16">
                        {layerPriceOptions[i]}元
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <h6>挑選配料</h6>
            <div className="d-flex flex-wrap">
              {decorationOptions.map((v, i) => {
                return (
                  <div key={i}>
                    <input
                      type="radio"
                      checked={decoration === v}
                      value={v}
                      onChange={(e) => {
                        setDecoration(e.target.value);
                        setDecorationPrice(decorationPriceOptions[i]);
                      }}
                    />
                    <div>
                      <img
                        className=""
                        src={`/images/Customized/decoration/${v}Icon.png`}
                        alt=""
                      />
                      <p className="text-center bingText-16">
                        {decorationPriceOptions[i]}元
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="d-flex flex-wrap">
              <canvas ref={realRef} width={800} height={600} />
              <div className="w-75">
                <p className="bingH6 d-flex justify-content-between">
                  donut：<span>+{donutPrice}元</span>
                </p>
                <p className="bingH6 d-flex justify-content-between">
                  layer：<span>+{layerPrice}元</span>
                </p>
                <p className="bingH6 d-flex justify-content-between">
                  decoration：<span>+{decorationPrice}元</span>
                </p>
                <hr />
                <p className="text-center bingH5">
                  目前價錢{donutPrice + layerPrice + decorationPrice}元
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BingCustomized;

//多選寫法

// <h6>挑選甜甜圈糖霜</h6>
//             {layerOptions.map((v, i) => {
//               return (
//                 <div key={i}>
//                   <input
//                     type="checkbox"
//                     checked={layer.includes(v)}
//                     value={v}
//                     onChange={(e) => {
//                       //先判斷是否有在likeList狀態陣列中
//                       if (layer.includes(e.target.value)) {
//                         // if有 -> 移出陣列
//                         const newLayer = layer.filter((v, i) => {
//                           return v !== e.target.value;
//                         });
//                         setLayer(newLayer);
//                       } else {
//                         // else -> 加入陣列
//                         const newLayer = [...layer, e.target.value];
//                         setLayer(newLayer);
//                       }
//                     }}
//                   />
//                   <label>{v}</label>
//                 </div>
//               );
//             })}
