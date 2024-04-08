import { bool, element, string } from "prop-types";
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { changeTimeRange } from "../../../store/site";
import Slider from "../../items/Slider";

export default function RideTime({ name, arrow, back }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState({
    from: 0,
    to: 24,
  });

  const handleClick = () => {
    if (open) setOpen(false);
    else setOpen(true);
  };

  const handleChange = (e) => {
    const {id, value} = e.target;
    const numValue = parseInt(value);
    setRange((prevForm) => ({
      ...prevForm,
      from: id === 'departRange' ? numValue : prevForm.from,
      to: id === 'arriveRange' ? numValue : prevForm.to,
    }));
  };

  useEffect(() => {
    dispatch(changeTimeRange({back, range,}));
  }, [range]);

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
      <div className="slideContainer">
        <h4 className="label medium opened">Время отбытия</h4>
        <Slider id="departRange" min={0} max={24} value={range.from} step={1} handleChange={handleChange} labels={["00:00", "24:00"]}/>
        <h4 className="label medium opened toRigth">Время прибытия</h4>
        <Slider id="arriveRange" min={0} max={24} value={range.to} step={1} handleChange={handleChange} labels={["00:00", "24:00"]}/>
      </div>}
    </aside>
  )
}

RideTime.propTypes = {
  name: string,
  arrow: element,
  back: bool,
}