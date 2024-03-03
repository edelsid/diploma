import List from "../../models/List";

export default function LatestRide({ item }) {
  const {from, back, services, price} = item;
  return (
    <li className="ticket">
      <div className="pathways">
        <div className="pathway pathway__to">
          <p className="small">{from.city}</p>
          <p className="small grey">{from.station}</p>
        </div>
        <div className="pathway pathway__from">
          <p className="small">{back.city}</p>
          <p className="small grey">{back.station}</p>
        </div>
        </div>
        <div className="information">
        <List className="serviceList">
          {services.map((item) => <li className={`icon ${item.name}`} key={services.indexOf(item)}></li>)}
        </List>
        <div className="price">
          <p>от</p>
          <h3 className="orange">{price}</h3>
          <h3 className="normal">Р</h3>
        </div>
      </div>
    </li>
  )
}
