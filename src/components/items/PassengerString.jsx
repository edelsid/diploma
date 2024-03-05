import { object } from "prop-types"

export default function PassengerString({ item }) {
  return (
    <li className="passengers">
      <div className="passenger__type">
        <p className="small">{item.count}</p>
        <p className="small">{item.name}</p>
      </div>
      <div className="price">
        <h4>{item.price * item.count}</h4>
        <h4 className="normal grey">Р</h4>
      </div>
    </li>
  )
}

PassengerString.propTypes = {
  item: object,
}