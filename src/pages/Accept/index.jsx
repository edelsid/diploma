import SideMenu from "../../components/ui/SideMenu/SideMenu"
import ChosenTrain from "./ChosenTrain"
import ChosenPassengers from "./ChosenPassengers"
import ChosenPayment from "./ChosenPayment"
import { useSelector } from "react-redux"
import "./accept.css"

export default function Accept() {
  const route = useSelector(state => state.root.order.route);
  const seats = useSelector(state => state.root.order.places);
  const services = useSelector(state => state.root.order.services);
  const passengers = useSelector(state => state.root.order.passengers);
  const payment = useSelector(state => state.root.order.payment);

  const confirmOrder = (e) => {
    e.preventDefault();
    console.log('order confirmed');
  }

  return (
    <section className="table flex">
      <div className="column">
        <SideMenu route={route} seats={seats} services={services}/>
      </div>
      <div className="column offers">
        <ChosenTrain route={route}/>
        <ChosenPassengers passengers={passengers} seats={seats} services={services}/>
        <ChosenPayment payment={payment}/>
        <div className="btn__wrapper">
          <button className="button standart__white" onClick={confirmOrder}>Подтвердить</button>
        </div>
      </div>
    </section>
  )
}
