import { bool, element, object } from "prop-types";
import reformatTime from "../../../utils/reformatTime";
import Destination from "../../items/Destination"

export default function WayDescription({ route, arrow, date, backDate, open }) {
  const { from, to, train, duration } = route;
  const rideDuration = reformatTime(duration);
  const { hh, min } = rideDuration;

  return (
    <div className={`way__desc ${!open ? "minimized" : ""}`}>
      <div className="line flex__standart">
        <p className="px16">№ Поезда</p>
        <p className="bold">{train.name}</p>
      </div>
      <div className="line flex__standart">
        <p className="px16">Название</p>
        <div className="px16 bold toRigth capital">
          <p>{from.city.name}</p>
          <p>{to.city.name}</p>
        </div>
        
      </div>
      <p className="center px16">{hh} : {min}</p>
      <div className="directions__side">
        <Destination item={from} side={true} date={date}/>
        <div className="additional flex__column">
          <p className="arrow__to orange">{arrow}</p>
        </div>
        <Destination item={to} side={true} right={true} date={backDate}/>
      </div>
    </div>
  )
}

WayDescription.propTypes = {
  route: object,
  arrow: element,
  date: object,
  backDate: object,
  open: bool,
}