import List from "../../models/List"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"

export default function PaymentMethod({ gatherData }) {
  const paymentOptions = useSelector(state => state.root.site.paymentOptions);
  const [state, setState] = useState({
    online: false,
    cash: false,
  });

  const inputChange = (e) => {
    const { id } = e.target;
    setState ((prevForm) => ({
      ...prevForm,
      online: id === "online__payment" ? !state.online : false,
      cash: id === "cash__payment" ? !state.cash : false,
    }));
  };

  useEffect(() => {
    gatherData(state, "payment");
  }, [state]);

  return (
    <>
      <div className="panel__standart border__btm flex__standart">
        <div className="flex__standart">
          <h4 className="medium">Способ оплаты</h4>
        </div>
      </div>
      <div className="form__wrapper__standart online border__btm">
        <div className="onlinePayment__form check">
          <label className="form__label px18">
            <input 
              type="checkbox" 
              className={`checkmark ${state.online ? "checkmark__active flex__center": ""}`} 
              id="online__payment"
              onChange={inputChange}>
            </input>
            Онлайн
          </label>
          <List className="onlinePayment__options flex">
            {paymentOptions.map((item) => <li key={paymentOptions.indexOf(item)} className="px16 bold">{item}</li>)}
          </List>
        </div>
      </div>
      <div className="form__wrapper__standart cash check flex">
        <label className="form__label px18">
          <input 
            type="checkbox" 
            className={`checkmark ${state.cash ? "checkmark__active flex__center": ""}`}
            id="cash__payment"
            onChange={inputChange}>
          </input>
          Наличными
        </label>
      </div>
    </>
  )
}