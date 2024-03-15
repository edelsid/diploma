import { element, string } from "prop-types";
import { useState } from "react"

export default function RideTime({ name, arrow }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (open) setOpen(false);
    else setOpen(true);
  }

  //слайдеры в отдельный компонент
  return (
    <aside className="parameters parameters__way">
      <div className="directionWrapper flex__standart">
        <div className="nameWrapper flex">
          <button type="button" className="button__way">{arrow}</button>
          <h4>{name}</h4>
        </div>
        <button type="button" className="openBtn flex__center" onClick={handleClick}>{open ? "-" : "+"}</button>
      </div>
      {open && 
      <div className="slidecontainer">
        <h4 className="label medium opened">Время отбытия</h4>
        <input type="range" min="1" max="100" value="1" className="slider__large" id="myRange"></input>
        <div className="range flex__standart px14">
          <p>00:00</p>
          <p>24:00</p>
        </div>
        <h4 className="label medium opened toRigth">Время прибытия</h4>
        <input type="range" min="1" max="100" value="1" className="slider__large" id="myRange"></input>
        <div className="range flex__standart px14">
          <p>00:00</p>
          <p>24:00</p>
        </div>
      </div>}
    </aside>
  )
}

RideTime.propTypes = {
  name: string,
  arrow: element,
}