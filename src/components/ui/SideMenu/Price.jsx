import { useState } from "react"
import Slider from "../../items/Slider";
import { arrayOf, number } from "prop-types";

export default function Price({ prices }) {
  let minPrice = 0;
  let maxPrice = 0;
  if (prices && prices.length > 0) {
    minPrice = Math.min(...prices);
    maxPrice = Math.max(...prices);
  }
  
  const [price, setPrice] = useState(minPrice);


  const handleChange = (e) => {
    setPrice(parseInt(e.target.value));
  }

  return (
    <aside className="parameters parameters__price">
      <div className="slidecontainer">
        <h4 className="label medium">Стоимость</h4>
        <div className="range flex__standart px14">
          <p>от</p>
          <p>до</p>
        </div>
        <Slider 
          id="priceRange" 
          min={minPrice} 
          max={maxPrice} 
          step={(maxPrice - minPrice) / 5} 
          value={price} 
          handleChange={handleChange} 
          labels={[minPrice, maxPrice]}
        />
      </div>
    </aside>
  )
}

Price.propTypes = {
  prices: arrayOf(number),
}