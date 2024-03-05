import SideMenu from "../../components/ui/SideMenu/SideMenu"
import PassengerChoice from "../../components/items/PassengerChoice"
import List from "../../models/List"
import "./passengers.css"

export default function Passengers() {
  return (
    <section className="table">
      <div className="column">
        <SideMenu />
      </div>
      <div className="column offers">
        <List className="offers__passengers">
          <PassengerChoice />
        </List>
        <div className="panel__wrapper psg add__passenger">
          <div className="passenger__panel__header">
            <h4 className="normal">Добавить пассажира</h4>
            <button type="button" className="add__passenger__btn">+</button>
          </div>
        </div>
        <div className="btn__wrapper">
          <button className="offer__btn next bold upper">Далее</button>
        </div>
      </div>
    </section>
  )
}
