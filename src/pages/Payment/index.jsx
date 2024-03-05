import SideMenu from "../../components/ui/SideMenu/SideMenu"
import PersonalData from "./PersonalData"
import PaymentMethod from "./PaymentMethod"
import "./payment.css"

export default function Payment() {
  return (
    <section className="table">
      <div className="column">
        <SideMenu />
      </div>
      <div className="column offers">
        <div className="panel__wrapper">
          <PersonalData />
          <PaymentMethod />
        </div>
        <div className="btn__wrapper">
          <button className="form__submit bold white">Купить билеты</button>
        </div>
      </div>
    </section>
  )
}
