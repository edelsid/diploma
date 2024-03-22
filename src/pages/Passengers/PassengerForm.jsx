import List from "../../models/List";
import { useState } from "react";

export default function PassengerForm() {
  const ages = [{
    id: "adult",
    name: "Взрослый",
  }, {
    id: "child",
    name: "Ребенок",
  }]

  const [open, setOpen] = useState(false);
  const [age, setAge] = useState(ages[0]);

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
  };

  return (
    <div className="passenger__form__wrapper border__btm">
      <form className="passenger__form flex">
        <label className="form__label px18">
          <div className="customSelect__form" onClick={dropdown}>
            <p>{age.name}</p>
            {open && <List className="customDropdown__form">
              {ages.map((item) => <li key={item.id} id={item.id} onClick={changeType} className="black">{item.name}</li>)}
            </List>}
          </div>
        </label>
        <div className="flex__standart">
          <label className="form__label px18">
            Фамилия
            <input className="passenger__input" id="surname"></input>
          </label>
          <label className="form__label px18">
            Имя
            <input className="passenger__input" id="name"></input>
          </label>
          <label className="form__label px18">
            Отчество
            <input className="passenger__input" id="patronym"></input>
          </label>
        </div>
        <div className="additions flex">
          <label className="form__label px18">
            Пол
            <div className="gender flex">
              <button type="toggle" className="passenger__input gender__male bold" id="male">М</button>
              <button type="toggle" className="passenger__input gender__female active bold" id="female">Ж</button>
            </div>
          </label>
          <label className="form__label px18">
            Дата рождения
            <input className="passenger__input" id="birthdate" placeholder="ДД/ММ/ГГ"></input>
          </label>
        </div>
        <div className="disability check">
          <label className="form__label px18">
            <input type="checkbox" className="checkmark" id="disability"></input>
            ограниченная подвижность
          </label>
        </div>
      </form>
    </div>
  )
}