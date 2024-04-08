import { object } from "prop-types";
import { useSelector } from "react-redux";
import stationCheck from "../../utils/stationName";
import Div from "../../models/Div";
import Icon from "./Icon";

export default function LatestRide({ item }) {
  const {departure, min_price} = item;
  const {from, to} = departure;
  const allServices = useSelector (state => state.root.site.services);
  const services = [{
    name: "wifi",
    status: departure.have_wifi,
    }, {
    name: "express",
    status: departure.is_express,
    }, {
    name: "cond",
    status: departure.have_air_conditioning,
  }];

  return (
    <li className="ticket">
      <div className="pathways flex">
        <div className="pathway">
          <p className="px16 capital">{from.city.name}</p>
          <p className="px16 grey">{stationCheck(from.city.name, from.railway_station_name)}</p>
        </div>
        <div className="pathway toRigth">
          <p className="px16 capital">{to.city.name}</p>
          <p className="px16 grey">{stationCheck(to.city.name, to.railway_station_name)}</p>
        </div>
        </div>
        <div className="flex__standart">
        <Div className="serviceList flex">
          {services.map((item) => <Icon key={services.indexOf(item)} service={item} allServices={allServices}/>)}
        </Div>
        <div className="price flex">
          <p>от</p>
          <h3 className="orange">{min_price}</h3>
          <h3 className="medium">&#x20BD;</h3>
        </div>
      </div>
    </li>
  )
}

LatestRide.propTypes = {
  item: object,
}