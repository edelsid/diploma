import SideMenu from "../../components/ui/SideMenu/SideMenu"
import ChosenTrain from "./ChosenTrain"
import ChosenPassengers from "./ChosenPassengers"
import ChosenPayment from "./ChosenPayment"
import "./accept.css"

export default function Accept() {
  return (
    <section className="table flex">
      <div className="column">
        <SideMenu />
      </div>
      <div className="column offers">
        <ChosenTrain />
        <ChosenPassengers />
        <ChosenPayment />
        <div className="btn__wrapper">
          <button className="button standart__white">Подтвердить</button>
        </div>
      </div>
    </section>
  )
}
