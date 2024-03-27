import { object } from "prop-types"

export default function PassengerString({ item }) {
  const { count, name, price } = item;

  return (
    <li className="passengers flex__standart">
      <div className="passenger__type flex">
        <p className="px16">{count}</p>
        <p className="px16">{name}</p>
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