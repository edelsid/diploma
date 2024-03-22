import { func, number, oneOfType, string, arrayOf } from "prop-types";

export default function Slider({ id, min, max, step, value, handleChange, labels }) {
  const percentage = (value - min) * 100 / (max - min);

  const sliderChange = (e) => {
    handleChange(e);
  }

  return (
    <>
      <input type="range" 
        id={id}
        min={min} 
        max={max} 
        value={value} 
        step={step} 
        className="slider__large" 
        onChange={sliderChange}
        style={{background: `linear-gradient(90deg, #FFA800 ${percentage}%, #3e3c41 ${percentage}%)`}}></input>
      <div className="range flex__standart px14">
        <p>{labels[0]}</p>
        <p>{labels[1]}</p>
      </div>
    </>
  )
}

Slider.propTypes = {
  id: string,
  min: number,
  max: number,
  step: number,
  value: number,
  handleChange: func,
  labels: oneOfType([
    arrayOf(number),
    arrayOf(string),
  ])
}
