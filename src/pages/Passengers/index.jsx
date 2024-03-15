import SideMenu from "../../components/ui/SideMenu/SideMenu"
import PassengerChoice from "./PassengerChoice"
import List from "../../models/List"
import "./passengers.css"

export default function Passengers() {
  return (
    <section className="table flex">
      <div className="column">
        <SideMenu />
      </div>
      <div className="column offers">
        <List className="offers__passengers">
          <PassengerChoice />
        </List>
        <div className="panel__wrapper psg add__passenger">
          <div className="flex__standart">
            <h4 className="medium">Добавить пассажира</h4>
            <button type="button" className="add__passenger__btn">+</button>
          </div>
        </div>
        <div className="btn__wrapper">
          <button className="button standart__white">Далее</button>
        </div>
      </div>
    </section>
  )
}
