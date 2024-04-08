import { object } from "prop-types";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearPaymentInfo } from "../../store/order";

export default function ChosenPayment({ payment }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [method, setMethod] = useState("Онлайн");

  useEffect(() => {
    if(payment.cash) setMethod("Наличными");
  }, []);

  const changeOptions = (e) => {
    e.preventDefault();
    dispatch(clearPaymentInfo());
    navigate("/payment");
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

ChosenPayment.propTypes = {
  payment: object,
}