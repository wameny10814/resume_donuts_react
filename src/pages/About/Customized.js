import { useState, useRef, useEffect } from 'react';
import H2 from '../../components/H2';

function Customized() {
  const realRef = useRef();
  //挑選donut
  const [donut, setDonut] = useState('origin');
  const donutOptions = ['origin', 'strawberry', 'matcha', 'Ponde'];
  //挑選糖霜
  const [layer, setLayer] = useState('');
  const layerOptions = ['chocolate', 'strawberry', 'milk', 'sugar', 'dot'];
  //配料
  const [decoration, setDecoration] = useState('');
  const decorationOptions = [
    'cotton',
    'rice',
    'strawberry',
    'sugarpowder',
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
      <div className="container vh-100">
        <H2 title={'製作獨特的甜甜圈'} Entitle={'Customized'}></H2>
        <div className="d-flex">
          <div className="col-12 col-md-4 bingControl h-100">
            <h6>挑選甜甜圈口味(單選)</h6>
            {donutOptions.map((v, i) => {
              return (
                <div key={i}>
                  <input
                    type="radio"
                    checked={donut === v}
                    value={v}
                    onChange={(e) => {
                      setDonut(e.target.value);
                    }}
                  />
                  <label>{v}</label>
                </div>
              );
            })}
            <h6>挑選糖霜(單選)</h6>
            {layerOptions.map((v, i) => {
              return (
                <div key={i}>
                  <input
                    type="radio"
                    checked={layer === v}
                    value={v}
                    onChange={(e) => {
                      setLayer(e.target.value);
                    }}
                  />
                  <label>{v}</label>
                </div>
              );
            })}
            <h6>挑選配料(單選)</h6>
            {decorationOptions.map((v, i) => {
              return (
                <div key={i}>
                  <input
                    type="radio"
                    checked={decoration === v}
                    value={v}
                    onChange={(e) => {
                      setDecoration(e.target.value);
                    }}
                  />
                  <label>{v}</label>
                </div>
              );
            })}
          </div>

          <div className="col-12 col-md-8">
            <canvas ref={realRef} width={800} height={600} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Customized;

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
