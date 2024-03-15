import Direction from "../../pages/TrainOptions/Direction";
import List from "../../models/List";
import Icon from "./Icon";
import VagonType from "./VagonType";
import { object } from "prop-types";
import { useSelector } from "react-redux";

export default function Train({ item }) {
  const {arrival, departure, have_air_conditioning, have_wifi, is_express } = item;
  const allServices = useSelector (state => state.root.site.services);
  const services = [
    {
      name: "wifi",
      status: have_wifi,
    }, {
      name: "express",
      status: is_express,
    }, {
      name: "cond",
      status: have_air_conditioning,
    },
  ];

  return (
    <li className="train">
      <div className="train__type">
        <div className="train__icon flex__center"></div>
        <div className="direction__full">
          <p className="px16 capital">{departure.from.city.name} &rarr; {departure.to.city.name}</p>
        </div>
      </div>

      <div className="directions">
        <Direction arrow={<>&#129050;</>} to={departure.from} back={departure.to} fullTime={departure.duration}></Direction>
        {arrival && 
        <Direction arrow={<>&#129048;</>} to={arrival.to} back={arrival.from} fullTime={arrival.duration}></Direction>}
      </div>

      <div className="vagonTypes flex">
        <List className="vagons">
          {Object.entries(departure.available_seats_info).map((item) => <VagonType key={item[0]} item={item} prices={departure.price_info}/>)}
        </List>
        <List className="serviceList flex right">
          {services.map((item) => <Icon key={services.indexOf(item)} service={item} allServices={allServices}/>)}
        </List>
        <button className="button narrow">Выбрать места</button>
      </div>
    </li>
  )
}

Train.propTypes = {
  item: object,
}