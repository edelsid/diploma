import { useState } from "react";
import List from "../../models/List";
import VagonList from "./VagonList";
import { arrayOf, object, bool, string } from "prop-types";

export default function VagonOverview({ vagonTypes, seats, back, category }) {
  const [vagonOpen, setVagonOpen] = useState(false);
  const [vagonType, setVagonType] = useState('');

  const showVagon = (className) => {
    if (vagonOpen) {
      setVagonOpen(false);
      setVagonType('');
      return;
    }
    setVagonOpen(true);
    setVagonType(className);
  }

  return (
    <>
      <div className="seats__panel">
        <h3>Тип вагона</h3>
        <List className="type__list flex">
          {vagonTypes.map((item) => item.status &&
          <div key={vagonTypes.indexOf(item)} className="seat__type__comfort" onClick={() => showVagon(item.className)}>
            <span className={`type__icon greyIcon ${item.className} ${vagonType === item.className ? "icon__active" : ""}`}></span>
            <p className="grey">{item.name}</p>
          </div>)}
        </List>
      </div>
      {vagonOpen && <VagonList seats={seats.filter((item) => item.coach.class_type === vagonType)} back={back} category={category}/>}
    </>
  )
}

VagonOverview.propTypes = {
  vagonTypes: arrayOf(object),
  seats: arrayOf(object),
  back: bool,
  category: string,
}