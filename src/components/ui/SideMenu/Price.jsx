import { useState, useEffect } from "react"
import { arrayOf, number } from "prop-types";
import { useDispatch } from "react-redux";
import { changePriceRange } from "../../../store/site";

export default function Price({ prices }) {
  const dispatch = useDispatch();
  let minPrice = 0;
  let maxPrice = 0;
  if (prices && prices.length > 0) {
    minPrice = Math.min(...prices);
    maxPrice = Math.max(...prices);
  }

  const [range, setRange] = useState({
    min: minPrice,
    max: maxPrice,
  });

  useEffect(() => {
    setRange({min: minPrice, max: maxPrice});
    dispatch(changePriceRange(range));
  }, [prices]);

  const [percentRange, setPercentRange] = useState({
    left: 0,
    right: 100,
  });

  const handleChange = (e) => {
    const {id, value} = e.target;
    const numValue = parseInt(value);
    const percent = ((numValue - minPrice) / (maxPrice - minPrice)) * 100;
    if (id === "input_left" && numValue > range.max) return;
    if (id === "input_right" && numValue < range.min) return;
    setRange((prevForm) => ({
      ...prevForm,
      min: id === 'input_left' ? numValue : prevForm.min,
      max: id === 'input_right' ? numValue : prevForm.max,
    }));
    setPercentRange((prevForm) => ({
      ...prevForm,
      left: id === 'input_left' ? percent : prevForm.left,
      right: id === 'input_right' ? percent : prevForm.right,
    }));
  };

  useEffect(() => {
    dispatch(changePriceRange(range));
  }, [range]);

  return (
    <aside className="parameters parameters__price">
      <div className="slideContainer">
        <h4 className="label medium">Стоимость</h4>
        <div className="range flex__standart px14">
          <p>от</p>
          <p>до</p>
        </div>
        <div className="slider__multi">
          <input 
            type="range" 
            id="input_left"
            min={minPrice} 
            max={maxPrice} 
            value={range.min}
            step={(maxPrice - minPrice) / 10}
            onChange={handleChange}>
          </input>
          <input 
            type="range" 
            id="input_right"
            min={minPrice} 
            max={maxPrice} 
            value={range.max}
            step={(maxPrice - minPrice) / 10}
            onChange={handleChange}>
          </input>

          <div className="slider__multi__path">
            <div className="slider__track"></div>
            <div className="slider__range" style={{left: `${percentRange.left}%`, right: `${100 - percentRange.right}%`}}></div>
            <div className="thumb left" style={{left: `${percentRange.left}%`}}></div>
            <div className="thumb right" style={{right: `${100 - percentRange.right}%`}}></div>
          </div>
        </div>
        <div className="range flex__standart px14">
          <p>{minPrice}</p>
          <p>{maxPrice}</p>
        </div>
      </div>
    </aside>
  )
}

Price.propTypes = {
  prices: arrayOf(number),
}