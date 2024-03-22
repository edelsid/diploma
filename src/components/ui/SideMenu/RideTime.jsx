import { element, string } from "prop-types";
import { useState } from "react"
import Slider from "../../items/Slider";

export default function RideTime({ name, arrow }) {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState({
    departRange: 0,
    arriveRange: 0,
  });

  const handleClick = () => {
    if (open) setOpen(false);
    else setOpen(true);
  }

  const handleChange = (e) => {
    const {id, value} = e.target;
    setRange((prevForm) => ({
      ...prevForm,
      departRange: id === 'departRange' ? value : prevForm.departRange,
      arriveRange: id === 'arriveRange' ? value : prevForm.arriveRange,
    }));
  }

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
        <Slider id="departRange" min={0} max={24} value={range.departRange} step={1} handleChange={handleChange} labels={["00:00", "24:00"]}/>
        <h4 className="label medium opened toRigth">Время прибытия</h4>
        <Slider id="arriveRange" min={0} max={24} value={range.arriveRange} step={1} handleChange={handleChange} labels={["00:00", "24:00"]}/>
      </div>}
    </aside>
  )
}

RideTime.propTypes = {
  name: string,
  arrow: element,
}