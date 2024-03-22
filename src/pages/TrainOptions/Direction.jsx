import { object } from "prop-types";
import Destination from "../../components/items/Destination"

export default function Direction({ arrow, from, to, time }) {

  return (
    <div className="direction">
      <Destination item={from}/>
      <div className="additional flex__column">
        <p className="px16 grey">{time.hh + ' : ' + time.min}</p>
        <p className="arrow__to orange">{arrow}</p>
      </div>
      <Destination item={to}/>
    </div>
  )
}

Direction.propTypes = {
  arrow: object,
  to: object,
  from: object,
  time: object,
}