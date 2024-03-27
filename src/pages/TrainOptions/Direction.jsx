import { object } from "prop-types";
import Destination from "../../components/items/Destination"
import reformatTime from "../../utils/reformatTime";

export default function Direction({ arrow, from, to, time }) {
  const fromTime = reformatTime(from.datetime);
  const toTime = reformatTime(to.datetime);

  return (
    <div className="direction">
      <Destination item={from} date={fromTime}/>
      <div className="additional flex__column">
        <p className="px16 grey">{time.hh} : {time.min}</p>
        <p className="arrow__to orange">{arrow}</p>
      </div>
      <Destination item={to} date={toTime}/>
    </div>
  )
}

Direction.propTypes = {
  arrow: object,
  to: object,
  from: object,
  time: object,
}