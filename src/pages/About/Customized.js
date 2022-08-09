import { useState, useRef, useEffect } from 'react';
import H2 from '../../components/H2';

//patternName是可控表單 set後塞成patternimg.src的一部分

//patternimg是創造出來的圖片塞到Pattern
//再用ctx.drawImage把Pattern畫出來

function Customized() {
  const realRef = useRef();
  //挑選本體taste
  const [taste, setTaste] = useState('');
  const [tasteName, setTasteName] = useState('origin');
  const tasteNameOptions = ['origin', 'strawberry', 'matcha', 'Ponde'];
  //挑選配料
  const [ingredients1, setIngredients1] = useState('');
  const [ingredients1Name, setIngredients1Name] = useState('');
  const ingredients1NameOptions = ['chocolate', 'milk', 'sugar','rice'];

  const getImageFromPath = (path) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        resolve(img);
      };
    });
  };
  //背景
  const renderCanvas = async () => {
    const ctx = realRef.current.getContext('2d');
    const bg = await getImageFromPath('/images/Customized/bg.jpg');
    ctx.drawImage(bg, 0, 0);
    const tasteimg = await getImageFromPath(`/images/Customized/basic/${tasteName}.png`);
    ctx.drawImage(tasteimg, 0, 0);

    let i = 0;
    for (let item of ingredients1Name) {
      const img = await getImageFromPath(
        `/images/Customized/layer/${item}.png`
      );
      ctx.drawImage(img, 0, 0);
    }
  };

  useEffect(() => {
    renderCanvas();
  }, [tasteName, ingredients1Name]);

  return (
    <>
      <div className="container vh-100">
        <H2 title={'製作獨特的甜甜圈'} Entitle={'Customized'}></H2>
        <div className="d-flex">
          <div className="col-12 col-md-4 bingControl h-100">
            <h6>挑選甜甜圈口味(單選)</h6>
            {tasteNameOptions.map((v, i) => {
              return (
                <div key={i}>
                  <input
                    type="radio"
                    checked={tasteName === v}
                    value={v}
                    onChange={(e) => {
                      setTasteName(e.target.value);
                    }}
                  />
                  <label>{v}</label>
                </div>
              );
            })}
            <h6>挑選甜甜圈配料1</h6>
            <h1>核取方塊(群組)</h1>
            {ingredients1NameOptions.map((v, i) => {
              return (
                <div key={i}>
                  <input
                    type="checkbox"
                    checked={ingredients1Name.includes(v)}
                    value={v}
                    onChange={(e) => {
                      //先判斷是否有在likeList狀態陣列中
                      if (ingredients1Name.includes(e.target.value)) {
                        // if有 -> 移出陣列
                        const newIngredients1Name = ingredients1Name.filter(
                          (v, i) => {
                            return v !== e.target.value;
                          }
                        );
                        setIngredients1Name(newIngredients1Name);
                      } else {
                        // else -> 加入陣列
                        const newIngredients1Name = [
                          ...ingredients1Name,
                          e.target.value,
                        ];
                        setIngredients1Name(newIngredients1Name);
                      }
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
