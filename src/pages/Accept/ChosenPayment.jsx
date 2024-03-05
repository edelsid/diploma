export default function ChosenPayment() {
  return (
    <div className="panel__wrapper seat">
      <div className="passenger__panel border__btm">
        <div className="passenger__panel__header">
          <h4 className="normal">Способы оплаты</h4>
        </div>
      </div>
      <div className="passenger__overview">
        <p>Payment Option Chosen</p>
        <div className="changeback">
          <p className="totalsum">Total Sum</p>
          <button className="back__button bold">Изменить</button>
        </div>
      </div>

    </div>
  )
}
