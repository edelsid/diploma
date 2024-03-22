import { useSelector, useDispatch } from "react-redux";
import { changeServices } from "../../store/order";
import List from "../../models/List"
import ServiceIcon from "./ServiceIcon";
import Column from "../../components/items/Column";
import Row from "../../components/items/Row";
import PriceRow from "../../components/items/PriceRow";
import { object, bool } from "prop-types";

export default function OverviewGrid({ vagon, back }) {
  const dispatch = useDispatch();
  const { coach, seats } = vagon;
  const allServices = useSelector (state => state.root.site.services);

  let availableSeats = {
    top: 0,
    bottom: 0,
    side: 0,
  };

  if (coach.class_type === "second" || coach.class_type === "third") {
    seats.forEach((seat) => {
      if (seat.index > 32) availableSeats.side += 1;
      else if (seat.index%2 === 0 && seat.available) availableSeats.top += 1;
      else if (seat.available) availableSeats.bottom += 1;
    });
  }
  
  const services = [{
    name: "cond",
    status: coach.have_air_conditioning,
    price: 0,
  }, {
    name: "wifi",
    status: coach.have_wifi,
    price: coach.wifi_price,
  }, {
    name: "bed",
    status: coach.is_linens_included,
    price: coach.linens_price,
  }];

  const addServiceInfo = (service) => {
    dispatch(changeServices({
      service: { 
        name: service.name,
        cost: service.price
      },
      back,
    }))
  };

  return (
    <div className="vagonSceme__grid">
      
      <Column name="Места" total={coach.available_seats}>
        {coach.class_type === "second" || coach.class_type === "third" ? 
        <>
          <Row name="Верхние" value={availableSeats.top}/>
          <Row name="Нижние" value={availableSeats.bottom}/>
          {coach.class_type === "third" && <Row name="Боковые" value={availableSeats.side}/>}
        </> : <></>}
      </Column>

      <Column name="Стоимость">
        {coach.class_type === "second" || coach.class_type === "third" ? 
        <>
          <PriceRow value={coach.top_price}/>
          <PriceRow value={coach.bottom_price}/>
          {coach.class_type === "third" && <PriceRow value={coach.side_price}/>}
        </> : <></>}
        {coach.class_type === "first" && <PriceRow value={coach.price}/>}
        {coach.class_type === "fourth" && <PriceRow value={coach.top_price}/>}
      </Column>

      <div className="grid__col flex">
        <div>
          <p className="px16 grey">Обслуживание</p>
          <p className="px16 lightgrey">ФПК</p>
        </div>
        <List className="vagonServices flex">
          {services.map((item) => <ServiceIcon key={services.indexOf(item)} service={item} allServices={allServices} addServiceInfo={addServiceInfo}/>)}
        </List>
      </div>
    </div>
  )
}

OverviewGrid.propTypes = {
  vagon: object,
  back: bool,
}