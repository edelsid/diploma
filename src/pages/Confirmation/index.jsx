import "./confirmation.css"

export default function Confirmation() {
  return (
    <>
      <section className="block block__confirm">
        <h1 className="white">Благодарим Вас за заказ!</h1>
        <div className="confirm__panel">
          <div className="confirm__panel__header border__btm">
            <h3>Order number</h3>
            <p className="bold">Total sum</p>
          </div>

          <div className="overview__panel">
            Confirmation overview
          </div>

          <div className="confirm__panel__footer border__btm">
            <h3>Rate us please + + + + +</h3>
            <button className="back__button upper bold">Вернуться на главную</button>
          </div>
        </div>
      </section>
      <div className="space"></div>
    </>
  )
}
