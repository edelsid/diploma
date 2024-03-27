import { func, string } from "prop-types";
import List from "../../models/List";
import { useState, useEffect } from "react";

export default function PassengerForm({ gatherData, errorCause }) {
  const ages = [{
    id: "adult",
    name: "Взрослый",
  }, {
    id: "child",
    name: "Детский",
  }];
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState(ages[0]);
  const [state, setState] = useState({
    type: age.id,
    name: "",
    surname: "",
    patronym: "",
    gender: "male",
    birthdate: "",
    disabled: false,
  });

  const { name, surname, patronym, gender, birthdate, disabled } = state;

  const dropdown = () => {
    if (open) {
      setOpen(false);
      return;
    }
    setOpen(true);
  }

  const changeType = (e) => {
    ages.forEach((item) => {
      if (item.id === e.target.id) setAge(item);
    });
    inputChange(e);
  };

  const inputChange = (e) => {
    const {id, value} = e.target;
    id === "gender" && e.preventDefault();
    setState ((prevForm) => ({
      ...prevForm,
      type: ages.find((item) => item.id === id) ? id : prevForm.type,
      surname: id === "surname" ? value : prevForm.surname,
      name: id === "name" ? value : prevForm.name,
      patronym: id === "patronym" ? value : prevForm.patronym,
      gender: id === "gender" ? value : prevForm.gender,
      birthdate: id === "birthdate" ? value : prevForm.birthdate,
      disabled: id === "disability" ? !state.disabled : prevForm.disabled,
    }));
  };

  useEffect(() => {
    gatherData(state, "person");
  }, [state]);

  const composeClassName = (id) => {
    let className = "passenger__input";
    if (errorCause.includes(id)) className = className + " incorrect";
    return className;
  }

  return (
    <div className="passenger__form__wrapper border__btm">
      <div className="passenger__form flex">
        <label className="form__label px18">
          <div className="customSelect__form" id="type" onClick={dropdown}>
            <p>{age.name}</p>
            {open && <List className="customDropdown__form">
              {ages.map((item) => <li 
                key={item.id} 
                id={item.id}
                onClick={changeType} 
                className="black">{item.name}
              </li>)}
            </List>}
          </div>
        </label>
        <div className="flex__standart">
          <label className="form__label px18">
            Фамилия
            <input className={composeClassName("surname")} id="surname" value={surname} onChange={inputChange} required></input>
          </label>
          <label className="form__label px18">
            Имя
            <input className={composeClassName("name")} id="name" value={name} onChange={inputChange} required></input>
          </label>
          <label className="form__label px18">
            Отчество
            <input className={composeClassName("patronym")} id="patronym" value={patronym} onChange={inputChange} required></input>
          </label>
        </div>
        <div className="additions flex">
          <label className="form__label px18">
            Пол
            <div className="gender flex">
              <button 
                className={`passenger__input gender__male ${gender === "male" && "bold active"}`}
                id="gender" 
                value={"male"} 
                onClick={inputChange}>М</button>
              <button 
                className={`passenger__input gender__female ${gender === "female" && "bold active"}`}
                id="gender"
                value={"female"}
                onClick={inputChange}>Ж</button>
            </div>
          </label>
          <label className="form__label px18">
            Дата рождения
            <input 
              className={composeClassName("birthdate")} 
              id="birthdate"
              placeholder="ДД.ММ.ГГГГ" 
              maxLength="10"
              value={birthdate} 
              onChange={inputChange}
              required>
            </input>
          </label>
        </div>
        <div className="disability check">
          <label className="form__label px18">
            <input 
              type="checkbox" 
              className={`checkmark ${state.disabled && "checkmark__active flex__center"}`} 
              id="disability" 
              value={disabled} 
              onChange={inputChange}>
            </input>
            ограниченная подвижность
          </label>
        </div>
      </div>
    </div>
  )
}

PassengerForm.propTypes = {
  gatherData: func,
  errorCause: string,
}