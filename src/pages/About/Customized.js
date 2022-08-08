import { useState, useRef, useEffect } from 'react';
import H2 from '../../components/H2';

//patternName是可控表單 set後塞成patternimg.src的一部分

//patternimg是創造出來的圖片塞到Pattern
//再用ctx.drawImage把Pattern畫出來

function Customized() {
  const cuscanvas = useRef(null);
  //挑選本體taste
  const [taste, setTaste] = useState('');
  const [tasteName, setTasteName] = useState('origin');
  const tasteNameOptions = ['', 'origin', 'strawberry', 'matcha', 'Ponde'];
  //挑選配料

  const [ingredients1, setIngredients1] = useState('');
  const [ingredients1Name, setIngredients1Name] = useState('sugar');
  const ingredients1NameOptions = ['', 'sugar', 'cotton', 'chocolate2'];

  useEffect(() => {
    const tasteImg = new Image();
    tasteImg.src = `/images/Customized/${tasteName}.png`;
    const ingredients1Img = new Image();

    ingredients1Img.src = `/images/Customized/${ingredients1Name}.jpg`;

    console.log(ingredients1Img.src);

    tasteImg.onload = () => {
      setTaste(tasteImg);
      setIngredients1(ingredients1Img);
    };
  }, [tasteName, ingredients1Name]);

  useEffect(() => {
    if (taste && cuscanvas) {
      const ctx = cuscanvas.current.getContext('2d');

      ctx.drawImage(taste, 0, 0, 200, 200);
      ctx.drawImage(ingredients1, 0, 0, 200, 200);
    }
  }, [cuscanvas, taste, ingredients1]);

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
            {ingredients1NameOptions.map((v, i) => {
              return (
                <div key={i}>
                  <input
                    type="radio"
                    checked={ingredients1Name === v}
                    value={v}
                    onChange={(e) => {
                      setIngredients1Name(e.target.value);
                    }}
                  />
                  <label>{v}</label>
                </div>
              );
            })}
          </div>

          <div className="col-12 col-md-8">
            <canvas ref={cuscanvas} width={800} height={600} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Customized;
