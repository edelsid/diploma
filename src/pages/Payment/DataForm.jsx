import { useState, useEffect } from "react"
import composeClassName from "../../utils/composeClassName";
import { func, string } from "prop-types";

export default function DataForm({ gatherData, errorCause }) {
  const [state, setState] = useState({
    name: "",
    surname: "",
    patronym: "",
    phone: "",
    email: "",
  });

  const { name, surname, patronym, phone, email } = state;

  const inputChange = (e) => {
    const { id, value } = e.target;
    setState ((prevForm) => ({
      ...prevForm,
      surname: id === "surname" ? value : prevForm.surname,
      name: id === "name" ? value : prevForm.name,
      patronym: id === "patronym" ? value : prevForm.patronym,
      phone: id === "phone" ? value : prevForm.phone,
      email: id === "email" ? value : prevForm.email,
    }));
  };

  useEffect(() => {
    gatherData(state, "payer");
  }, [state]);

  return (
    <div className="passenger__form flex">
      <div className="fio flex__standart">
        <label className="form__label px18">
          Фамилия
          <input 
            className={composeClassName("surname", errorCause)} 
            id="surname" 
            value={surname} 
            onChange={inputChange} 
            required>
          </input>
        </label>
        <label className="form__label px18">
          Имя
          <input 
            className={composeClassName("name", errorCause)} 
            id="name" 
            value={name} 
            onChange={inputChange} 
            required>
          </input>
        </label>
        <label className="form__label px18">
          Отчество
          <input 
            className={composeClassName("patronym", errorCause)} 
            id="patronym" 
            value={patronym} 
            onChange={inputChange} 
            required>
          </input>
        </label>
      </div>
      <div className="phone flex__standart">
        <label className="form__label px18">
          Контактный телефон
          <input 
            className={composeClassName("phone", errorCause)} 
            id="phone" 
            value={phone} 
            onChange={inputChange} 
            required
            placeholder="+7___ ___ __ __"></input>
        </label>
      </div>
      <div className="email flex__standart">
        <label className="form__label px18">
          E-mail
          <input 
            className={composeClassName("email", errorCause)} 
            id="email" 
            value={email} 
            onChange={inputChange} 
            required
            placeholder="inbox@gmail.ru"></input>
        </label>
      </div>
    </div>
  )
}

DataForm.propTypes = {
  gatherData: func,
  errorCause: string,
}