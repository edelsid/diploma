import { useState } from "react";
import List from "../../models/List";
import VagonScheme from "./VagonScheme";

export default function VagonOverview() {
  const [vagonOpen, setVagonOpen] = useState(false);
  const [vagonType, setVagonType] = useState('');
  const vagonTypes = [{
    name: 'Сидячий',
    className: 'fourth',
  }, {
    name: 'Плацкарт',
    className: 'third',
  }, {
    name: 'Купе',
    className: 'second',
  }, {
    name: 'Люкс',
    className: 'first',
  }];

  const showVagon = (className) => {
    console.log(className);
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
          {vagonTypes.map((item) => <div key={vagonTypes.indexOf(item)} className="seat__type__comfort" onClick={() => showVagon(item.className)}>
            <span className={`type__icon greyIcon ${item.className} ${vagonType === item.className ? "icon__active" : ""}`}></span>
            <p className="grey">{item.name}</p>
          </div>)}
        </List>
      </div>
      {vagonOpen && <VagonScheme type={vagonType}/>}
    </>
  )
}
