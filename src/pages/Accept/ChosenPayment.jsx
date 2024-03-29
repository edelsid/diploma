import { useState, useEffect } from "react"

export default function ChosenPayment({ payment }) {
  const [method, setMethod] = useState("Онлайн");

  useEffect(() => {
    if(payment.cash) setMethod("Наличными");
  }, []);

  const changeOptions = (e) => {
    e.preventDefault();
    console.log("goint back to payment stage, clear payment data");
  };

  return (
    <div className="panel__wrapper seat">
      <div className="panel__standart border__btm flex__standart">
        <div className="flex__standart">
          <h4 className="medium">Способы оплаты</h4>
        </div>
      </div>
      <div className="overview flex">
        <p className="chosen__option">{method}</p>
        <div className="changeback flex">
          <button className="button__transp narrow__black" onClick={changeOptions}>Изменить</button>
        </div>
      </div>
    </div>
  )
}
