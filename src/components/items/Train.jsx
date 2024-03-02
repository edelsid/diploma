import Direction from "../../pages/TrainOptions/Direction";
import List from "../../models/List";
import VagonType from "./VagonType";

export default function Train({ item }) {
  const {number, travelsBack, fullWay, to, back, fullTime, services, vagons} = item;

  return (
    <li className="train">
      <div className="train__type">
        <div className="train__icon"></div>
        <p className="label bold train__number">{number}</p>
        <div className="direction__full">
          {fullWay.passed && <p className="small grey">{fullWay.passed} &rarr;</p>} 
          <p className="small auto">{fullWay.from} &rarr; {fullWay.to}</p>
        </div>
      </div>

      <div className="directions">
        <Direction arrow={<>&rarr;</>} to={to} back={back} fullTime={fullTime}></Direction>
        {travelsBack && 
        <Direction arrow={<>&larr;</>} to={to} back={back} fullTime={fullTime}></Direction>}
      </div>

      <div className="vagonTypes">
        <List className="vagons">
          {vagons.map((item) => <VagonType key={vagons.indexOf(item)} item={item}/>)}
        </List>
        <List className="serviceList right">
          {services.map((item) => <li className="icon" key={services.indexOf(item)}>{item}</li>)}
        </List>
        <button className="offer__btn bold big">Выбрать места</button>
      </div>
    </li>
  )
}
