import Destination from "../../components/items/Destination"

export default function Direction({ arrow, to, back, fullTime }) {
  return (
    <div className="direction">
      <Destination item={to}/>
      <div className="additional">
        <p className="city grey">{fullTime}</p>
        <p className="arrow__to orange">{arrow}</p>
      </div>
      <Destination item={back}/>
    </div>
  )
}
