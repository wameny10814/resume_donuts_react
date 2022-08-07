import { useState, useRef, useEffect } from 'react';
import H2 from '../../components/H2';

function Customized() {
  const cuscanvas = useRef(null);
  //挑選本體
  const [tasteImg, setTasteImg] = useState('');

  const [tasteName, setTasteName] = useState(['origin']);
  const tasteNameOptions = ['origin', 'strawberry', 'matcha', 'chocolate'];
  //挑選配料
  const [ingredientsName, setIngredientsName] = useState(['']);
  const ingredientsNameOptions = ['sugar', 'cotton', 'chocolate2'];

  useEffect(() => {
    const backimg = new Image();
    backimg.src = `/imgs/Customized/${tasteName}.png`;
    // backimg.src = '/imgs/Customized/style_01.png';

    backimg.onload = () => {
      setTasteImg(backimg);
    };
  }, [tasteName]);

  useEffect(() => {
    if (tasteImg && cuscanvas) {
      const ctx = cuscanvas.current.getContext('2d');
      ctx.drawImage(tasteImg, 0, 0, 0, 0);
    }
  }, [tasteImg, cuscanvas]);

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
            <canvas ref={cuscanvas} width={100} height={500} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Customized;
