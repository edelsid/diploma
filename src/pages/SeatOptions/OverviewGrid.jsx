import { useSelector } from "react-redux";
import Div from "../../models/Div"
import Icon from "../../components/items/Icon";
import Column from "../../components/items/Column";
import Row from "../../components/items/Row";
import PriceRow from "../../components/items/PriceRow";

export default function OverviewGrid() {
  const allServices = useSelector (state => state.root.site.services);
  
  const services = [{
    name: "cond",
    status: true,
  }, {
    name: "wifi",
    status: true,
  }, {
    name: "bed",
    status: true,
  }, {
    name: "food",
    status: true,
  }];

  const seats = {
    high: {
      count: 3,
      price: 2920
    },
    low: {
      count: 8,
      price: 3530,
    }
  };

  return (
    <div className="vagonSceme__grid">
      <Column name="Места" total={seats.high.count + seats.low.count}>
        <Row name="Верхние" value={seats.high.count}/>
        <Row name="Нижние" value={seats.low.count}/>
      </Column>
      <Column name="Стоимость">
        <PriceRow value={seats.high.price}/>
        <PriceRow value={seats.low.price}/>
      </Column>
      <div className="grid__col flex">
        <div>
          <p className="px16 grey">Обслуживание</p>
          <p className="px16 grey">ФПК</p>
        </div>
        <Div className="serviceList flex">
          {services.map((item) => <Icon key={services.indexOf(item)} service={item} allServices={allServices} vagon={true}/>)}
        </Div>
      </div>
    </div>
  )
}