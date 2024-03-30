import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addPaymentInfo } from "../../store/order"
import { useNavigate } from "react-router-dom"
import SideMenu from "../../components/ui/SideMenu/SideMenu"
import PersonalData from "./PersonalData"
import PaymentMethod from "./PaymentMethod"
import checkNames from "../../utils/checkNames"
import "./payment.css"

export default function Payment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const route = useSelector(state => state.root.order.route);
  const seats = useSelector(state => state.root.order.places);
  const services = useSelector(state => state.root.order.services);
  const [error, setError] = useState({ message: "", cause: "" });
  const errLength = error.message.length;
  const [disabled, setDisabled] = useState(true);
  const [formData, setFormData] = useState({
    payer: {},
    payment: {},
  });

  const { payer, payment } = formData;

  const gatherData = (data, label) => {
    setFormData((prevForm) => ({
      ...prevForm,
      payer: label === "payer" ? data : prevForm.payer,
      payment: label === "payment" ? data : prevForm.payment,
    }));
  };

  useEffect(() => {
    if (payment.online || payment.cash) {
      setDisabled(false);
      return;
    } else if (disabled === false) setDisabled(true);
  }, [payment]);

  const validateForm = (e) => {
    e.preventDefault();
    try {
      checkNames([payer.surname, payer.name, payer.patronym]);
      checkPhone(payer.phone);
      checkEmail(payer.email);
      console.log('form passed');
      dispatch(addPaymentInfo({formData}));
      navigate("/accept");
    } catch (error) {
      setError({ message: error.message, cause: error.cause });
      console.log('form failed', error.cause);
    }
  };

  const checkPhone = (phone) => {
    const result = phone.match(/((\+7)|8)-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}/g);
    if (result === null) throw new Error ("Номер телефона введен некорректно. Пример: +7999-999-99-99", {cause: "phone"});
  }

  const checkEmail = (email) => {
    const result = email.match(/[\w\d]+@\w+\.[a-z]+/g);
    if (result === null) throw new Error ("Адрес электронной почты введен некорректно. Пример: demo@gmail.ru", {cause: "email"});
  }

  const acceptError = () => {
    setError({ message: "", cause: "" });
  };

  return (
    <section className="table flex">
      <div className="column">
        <SideMenu route={route} seats={seats} services={services}/>
      </div>
      <div className="column offers">
        <form className="panel__wrapper" id="payment__form" onSubmit={validateForm}>
          <PersonalData gatherData={gatherData} errorCause={error.cause}/>
          <PaymentMethod gatherData={gatherData}/>
          {errLength > 0 && <div className={`form__wrapper__standart flex__standart" ${errLength > 0 && "errorWindow"}`}>
            <div className="popup__message flex__standart">
              <span className="icon__error flex__center px18" onClick={acceptError}>&#x2716;</span>
              <p className="px14">{error.message}</p>
            </div>
          </div>}
        </form>
        <div className="btn__wrapper">
          <button 
            className="button standart__white" 
            disabled={disabled}
            type="submit"
            form="payment__form"
            >Купить билеты
          </button>
        </div>
      </div>
    </section>
  )
}
