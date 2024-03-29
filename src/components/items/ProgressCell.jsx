import { string, number } from "prop-types";
import { useState, useEffect } from "react";

export default function ProgressCell({ item, phase, count, length }) {
  const [active, setActive] = useState(false);
  const [prevActive, setPrevActive] = useState(false);

  useEffect(() => {
    if (count === phase) setActive(true);
    if (count < phase) setPrevActive(true);
  }, [phase]);

  return (
    <div className="flex__end" style={{width: `calc(100% / ${length}`, backgroundColor: `${prevActive && '#FFA800'}`}}>
      <div className="progressCell" style={{backgroundColor: `${active && '#FFA800'}`}}>
      <div className="cellText flex">
        <div className="cellNumber flex__center">{count}</div>
        <p className="cellName">{item}</p>
      </div>
      </div>
      {count < length && 
      <div className="arrowWrapper">
        <div className="progressArrow" style={{backgroundColor: `${active && '#FFA800'}`}}></div>
      </div>}
    </div>
  )
}

ProgressCell.propTypes = {
  item: string,
  phase: number,
  count: number,
  length: number,
}