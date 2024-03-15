import SeatPanel from "./SeatPanel"
import List from "../../models/List"

export default function SeatChoice() {
  const data = [1, 2];

  return (
    <div className="offers__seats">
      <div className="seats__header">
        <h3 className="upper">Выбор мест</h3>
      </div>
      <List className="offers__list">
        {data.map((item) => <SeatPanel key={data.indexOf(item)} />)}
      </List>
      <div className="btn__wrapper">
        <button className="button standart__white">Далее</button>
      </div>
    </div>
  )
}
