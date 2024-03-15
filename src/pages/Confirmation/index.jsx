import ConfirmHeader from "./ConfirmHeader"
import ConfirmMessage from "./ConfirmMessage"
import ConfirmFooter from "./ConfirmFooter"
import "./confirmation.css"

export default function Confirmation() {
  return (
    <>
      <section className="block block__confirm">
        <h1 className="white">Благодарим Вас за заказ!</h1>
        <div className="confirm__panel">
          <ConfirmHeader />
          <ConfirmMessage />
          <ConfirmFooter />
        </div>
      </section>
      <div className="space"></div>
    </>
  )
}
