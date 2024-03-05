import PassengerString from "../../items/PassengerString"
import List from "../../../models/List"

export default function PassengerInfo() {
  const passengers = [{
    name: 'Взрослых',
    count: 2,
    price: 2920,
  }, {
    name: 'Дети',
    count: 1,
    price: 1920,
  }]

  return (
    <aside className="parameters parameters__passengers">
      <div className="wayWrapper">
        <div className="nameWrapper">
          <span className="icon">+</span>
          <h4 className="way">Пассажиры</h4>
        </div>
        <button type="button" className="openBtn">-</button>
      </div>
      <List className="passenger__desc">
        {passengers.map((item) => <PassengerString key={item.name} item={item}/>)}
      </List>
    </aside>
  )
}
