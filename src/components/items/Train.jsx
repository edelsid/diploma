import Direction from "../../pages/TrainOptions/Direction";
import List from "../../models/List";
import VagonType from "./VagonType";

export default function Train({ item }) {
  const {arrival, available_seats, available_seats_info, departure, have_air_conditioning, have_first_class, have_fourth_class,
  have_second_class, have_third_class, have_wifi, is_express, min_price} = item;
  const services = [
    {
      name: "wifi",
      status: have_wifi,
    }, {
      name: "express",
      status: is_express,
    }, {
    name: "air_cond",
    status: have_air_conditioning,
    },
  ];

  return (
    <li className="train">
      <div className="train__type">
        <div className="train__icon"></div>
        <p className="label bold train__number">{departure.train_name}</p>
        <div className="direction__full">
          {/* {fullWay.passed && <p className="small grey">{fullWay.passed} &rarr;</p>}  */}
          <p className="small auto capital">{departure.from.city.name} &rarr; {departure.to.city.name}</p>
        </div>
      </div>

      <div className="directions">
        <Direction arrow={<>&rarr;</>} to={departure.from} back={departure.to} fullTime={departure.duration}></Direction>
        {arrival && 
        <Direction arrow={<>&larr;</>} to={arrival.to} back={arrival.from} fullTime={arrival.duration}></Direction>}
      </div>

      <div className="vagonTypes">
        <List className="vagons">
          {Object.entries(departure.available_seats_info).map((item) => <VagonType key={item[0]} item={item} prices={departure.price_info}/>)}
        </List>
        <List className="serviceList right">
          {services.map((item) => item.status && <li className={`icon ${item.name}`} key={services.indexOf(item)}></li>)}
        </List>
        <button className="offer__btn bold big">Выбрать места</button>
      </div>
    </li>
  )
}
