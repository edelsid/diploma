import ConfirmHeader from "./ConfirmHeader"
import ConfirmMessage from "./ConfirmMessage"
import ConfirmFooter from "./ConfirmFooter"
import { useSelector } from "react-redux"
import { useEffect, useRef, useMemo } from "react"
import countSum from "../../utils/countSum"
import "./confirmation.css"

export default function Confirmation() {
  const ref = useRef(null);
  const id = useSelector(state => state.root.order.id);
  const seats = useSelector(state => state.root.order.places);
  const services = useSelector(state => state.root.order.services);
  const paymentInfo = useSelector(state => state.root.order.payment);

  const totalSum = useMemo(() => {
    return countSum(seats) + countSum(services)
  }, [seats, services]);

  useEffect(() => {
    ref.current.scrollIntoView();
  }, []);

  return (
    <>
      <section className="block block__confirm">
        <h1 ref={ref} className="white">Благодарим Вас за заказ!</h1>
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
