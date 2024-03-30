import ConfirmHeader from "./ConfirmHeader"
import ConfirmMessage from "./ConfirmMessage"
import ConfirmFooter from "./ConfirmFooter"
import { useSelector } from "react-redux"
import countSum from "../../utils/countSum"
import "./confirmation.css"

export default function Confirmation() {
  const id = useSelector(state => state.root.order.id);
  const seats = useSelector(state => state.root.order.places);
  const services = useSelector(state => state.root.order.services);
  const paymentInfo = useSelector(state => state.root.order.payment);

  const totalSum = countSum(seats) + countSum(services);

  return (
    <>
      <section className="block block__confirm">
        <h1 className="white">Благодарим Вас за заказ!</h1>
        <div className="confirm__panel">
          <ConfirmHeader id={id} totalSum={totalSum}/>
          <ConfirmMessage payer={paymentInfo.payer}/>
          <ConfirmFooter />
        </div>
      </section>
      <div className="space"></div>
    </>
  )
}
