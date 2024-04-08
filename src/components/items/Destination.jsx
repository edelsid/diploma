import { bool, object } from "prop-types";
import stationCheck from "../../utils/stationName";

export default function Destination({ item, side, right, date }) {
  const {city, railway_station_name } = item;
  const { min, hh, dd, mm, yy } = date;

  return (
    <div className={`destination ${right && "toRigth"}`}>
      <p className="bold">{hh}:{min}</p>
      {side && <p className="px16 grey gap">{dd}.{mm}.{yy}</p>}
      <p className="px14 capital">{city.name}</p>
      <p className="px14 grey">{stationCheck(city.name, railway_station_name)}</p>
    </div>
  )
}

Destination.propTypes = {
  item: object,
  side: bool,
  right: bool,
  date: object,
}