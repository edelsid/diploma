import List from "../../models/List"

export default function PaymentMethod() {
  const paymentOptions = ['Банковской картой', 'PayPal', 'Visa QIWI Wallet'];

  return (
    <>
      <div className="panel__standart border__btm flex__standart">
        <div className="flex__standart">
          <h4 className="medium">Способ оплаты</h4>
        </div>
      </div>
      <div className="form__wrapper__standart online border__btm">
        <form className="onlinePayment__form check">
          <label className="form__label px18">
            <input type="checkbox" className="checkmark" id="online__payment"></input>
            Онлайн
          </label>
          <List className="onlinePayment__options flex">
            {paymentOptions.map((item) => <li key={paymentOptions.indexOf(item)} className="px16 bold">{item}</li>)}
          </List>
        </form>
      </div>
      <div className="form__wrapper__standart cash check flex">
        <label className="form__label px18">
          <input type="checkbox" className="checkmark" id="cash__payment"></input>
          Наличными
        </label>
      </div>
    </>
  )
}