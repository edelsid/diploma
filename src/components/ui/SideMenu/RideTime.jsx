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
      <div className="wayWrapper">
        <div className="nameWrapper">
          <button type="button" className="wayBtn">{arrow}</button>
          <h4 className="way">{name}</h4>
        </div>
        <button type="button" className="openBtn" onClick={handleClick}>{open ? "-" : "+"}</button>
      </div>
      {open && 
      <div className="slidecontainer">
        <h4 className="label normal opened">Время отбытия</h4>
        <input type="range" min="1" max="100" value="1" className="slider__large" id="myRange"></input>
        <div className="range">
          <p>00:00</p>
          <p>24:00</p>
        </div>
        <h4 className="label normal opened toRigth">Время прибытия</h4>
        <input type="range" min="1" max="100" value="1" className="slider__large" id="myRange"></input>
        <div className="range">
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