import { useState, useRef, useEffect } from 'react';
import H2 from '../../components/H2';

//patternName是可控表單 set後塞成patternimg.src的一部分

//patternimg是創造出來的圖片塞到Pattern
//再用ctx.drawImage把Pattern畫出來

function Customized() {
  const cuscanvas = useRef(null);
  //挑選本體taste
  const [taste, setTaste] = useState('');
  const [tasteName, setTasteName] = useState(['origin']);
  const tasteNameOptions = ['origin', 'strawberry', 'matcha', 'chocolate'];
  //挑選配料

  const [ingredients, setIngredients] = useState(['']);
  const [ingredientsName, setIngredientsName] = useState(['sugar']);
  const ingredientsNameOptions = ['sugar', 'cotton', 'chocolate2'];

  useEffect(() => {
    const tasteImg = new Image();
    tasteImg.src = `/images/Customized/${tasteName}.jpg`;
    const ingredientsImg = new Image();
    //尚未完成條件
    if (ingredientsName.length > 1) {
      ingredientsImg.src = `/images/Customized/${ingredientsName}.jpg`;
    }
    ingredientsImg.src = `/images/Customized/${ingredientsName}.jpg`;

    console.log(ingredientsName);

    tasteImg.onload = () => {
      setTaste(tasteImg);
      setIngredients(ingredientsImg);
    };
  }, [tasteName, ingredientsName]);

  useEffect(() => {
    if (taste && cuscanvas) {
      const ctx = cuscanvas.current.getContext('2d');

      ctx.drawImage(taste, 100, 100, 200, 200);
      ctx.drawImage(ingredients, 100, 100, 200, 200);
    }
  }, [cuscanvas, taste, ingredients]);

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
            <h6>挑選甜甜圈口味(多選)</h6>
            {ingredientsNameOptions.map((v, i) => {
              return (
                <div key={i}>
                  <input
                    type="checkbox"
                    checked={ingredientsName.includes(v)}
                    value={v}
                    onChange={(e) => {
                      if (ingredientsName.includes(e.target.value)) {
                        const newIngredients = ingredientsName.filter(
                          (v, i) => {
                            return v !== e.target.value;
                          }
                        );
                        setIngredientsName(newIngredients);
                      } else {
                        const newIngredients = [
                          ...ingredientsName,
                          e.target.value,
                        ];
                        setIngredientsName(newIngredients);
                      }
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
