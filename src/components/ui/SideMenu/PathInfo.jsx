import { useState } from "react";
import { element, string, object } from "prop-types"
import WayDescription from "./WayDescription";
import reformatTime from "../../../utils/reformatTime";

export default function PathInfo({ name, arrow, data }) {
  const [open, setOpen] = useState(true);
  const rideDate = reformatTime(data.from.datetime);
  const backDate = reformatTime(data.to.datetime);
  const { dd, mm, yy } = rideDate;

  const openWindow = () => {
    setOpen(!open);
  }

  return (
    <aside className="parameters parameters__info">
      <div className="directionWrapper flex__standart">
        <div className="nameWrapper flex">
          <button type="button" className="button__way">{arrow}</button>
          <h4>{name}</h4>
          <p className="px16">{dd}.{mm}.{yy}</p>
        </div>
        <button 
          type="button" 
          className="openBtn flex__center" 
          onClick={openWindow}>
          {open ? "-" : "+"}
        </button>
      </div>
      <WayDescription route={data} arrow={arrow} date={rideDate} backDate={backDate} open={open}/>
    </aside>
  )
}

PathInfo.propTypes = {
  name: string,
  arrow: element,
  data: object
}