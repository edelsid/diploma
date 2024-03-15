import { number, object } from "prop-types";
import Destination from "../../components/items/Destination"

export default function Direction({ arrow, to, back, fullTime }) {
  const date = new Date(fullTime);
  const hh = date.getHours().toString();
  const min = date.getMinutes().toString().padStart(2, '0');

  return (
    <div className="direction">
      <Destination item={to}/>
      <div className="additional flex__column">
        <p className="px16 grey">{hh + ' : ' + min}</p>
        <p className="arrow__to orange">{arrow}</p>
      </div>
      <Destination item={back}/>
    </div>
  )
}

Direction.propTypes = {
  arrow: object,
  to: object,
  back: object,
  fullTime: number,
}