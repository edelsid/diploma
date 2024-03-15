import { object } from "prop-types";
import { useSelector } from "react-redux";
import Div from "../../models/Div";
import Icon from "./Icon";

export default function LatestRide({ item }) {
  const {from, back, services, price} = item;
  const allServices = useSelector (state => state.root.site.services);

  return (
    <li className="ticket">
      <div className="pathways flex">
        <div className="pathway">
          <p className="px16">{from.city}</p>
          <p className="px16 grey">{from.station}</p>
        </div>
        <div className="pathway toRigth">
          <p className="px16">{back.city}</p>
          <p className="px16 grey">{back.station}</p>
        </div>
        </div>
        <div className="flex__standart">
        <Div className="serviceList flex">
          {services.map((item) => <Icon key={services.indexOf(item)} service={item} allServices={allServices}/>)}
        </Div>
        <div className="price flex">
          <p>от</p>
          <h3 className="orange">{price}</h3>
          <h3 className="medium">Р</h3>
        </div>
      </div>
    </li>
  )
}

LatestRide.propTypes = {
  item: object,
}