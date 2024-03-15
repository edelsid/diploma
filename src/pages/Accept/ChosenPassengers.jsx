import List from "../../models/List"
import Passenger from "./Passenger"

export default function ChosenPassengers() {
  return (
    <div className="panel__wrapper seat">
      <div className="panel__standart border__btm flex__standart">
        <div className="flex__standart">
          <h4 className="medium">Пассажиры</h4>
        </div>
      </div>
      <div className="overview flex">
        <List className="all__passengers flex">
          <Passenger />
          <Passenger />
          <Passenger />
        </List>
        <div className="changeback flex">
          <div className="totalsum price flex__standart">
            <h3 className="medium">Всего</h3>
            <div className="flex sum">
              <h3>7 760</h3>
              <h3 className="medium grey">Р</h3>
            </div>
          </div>
          <button className="button__transp narrow__black">Изменить</button>
        </div>
      </div>
    </div>
  )
}
