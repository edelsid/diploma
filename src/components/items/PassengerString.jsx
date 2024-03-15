import { object } from "prop-types"

export default function PassengerString({ item }) {
  return (
    <li className="passengers flex__standart">
      <div className="passenger__type flex">
        <p className="px16">{item.count}</p>
        <p className="px16">{item.name}</p>
      </div>
      <div className="price flex">
        <h4>{item.price * item.count}</h4>
        <h4 className="medium grey">Р</h4>
      </div>
    </li>
  )
}

PassengerString.propTypes = {
  item: object,
}