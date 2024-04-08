import { object } from "prop-types"
import nounCheck from "../../utils/nounCheck";

export default function PassengerString({ item }) {
  const { count, name, price } = item;

  return (
    <li className="passengers flex__standart">
      <div className="passenger__type flex">
        <p className="px16">{count}</p>
        <p className="px16">{nounCheck(name, count)}</p>
      </div>
      <div className="price flex">
        <h4>{price}</h4>
        <h4 className="medium grey">&#x20bd;</h4>
      </div>
    </li>
  )
}

PassengerString.propTypes = {
  item: object,
}