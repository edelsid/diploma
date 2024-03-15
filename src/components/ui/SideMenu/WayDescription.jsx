import { element, object } from "prop-types";
import Destination from "../../items/Destination"

export default function WayDescription({ train, arrow }) {
  const hh = new Date(train.fulltime).getHours().toString();
  const mm = new Date(train.fulltime).getMinutes().toString().padStart(2, '0');

  return (
    <div className="way__desc">
      <div className="line flex__standart">
        <p className="px16">№ Поезда</p>
        <p className="bold">{train.index}</p>
      </div>
      <div className="line flex__standart">
        <p className="px16">Название</p>
        <p className="px16 bold toRigth">{train.passed}<br/>{train.to.city.name}</p>
      </div>
      <p className="center px16">{hh} : {mm}</p>
      <div className="directions__side">
        <Destination item={train.from} side={true}/>
        <div className="additional flex__column">
          <p className="arrow__to orange">{arrow}</p>
        </div>
        <Destination item={train.to} side={true} right={true}/>
      </div>
    </div>
  )
}

WayDescription.propTypes = {
  train: object,
  arrow: element,
}