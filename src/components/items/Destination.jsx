import { bool, object } from "prop-types";

export default function Destination({ item, side, right }) {
  const {city, railway_station_name, datetime} = item;
  const date = new Date(datetime);
  const hh = date.getHours().toString().padStart(2, '0');
  const min = date.getMinutes().toString().padStart(2, '0');
  const dd = date.getDay().toString().padStart(2, '0');
  const mm = date.getMonth().toString().padStart(2, '0');
  const yy = date.getFullYear().toString();

  return (
    <div className={`destination ${right && "toRigth"}`}>
      <p className="bold">{hh+':'+min}</p>
      {side && <p className="px16 grey gap">{dd}.{mm}.{yy}</p>}
      <p className="px14 capital">{city.name}</p>
      <p className="px14 grey">{railway_station_name + ' вокзал'}</p>
    </div>
  )
}

Destination.propTypes = {
  item: object,
  side: bool,
  right: bool,
}