import { useState } from "react"
import Calendar from "./Calendar";

export function HeaderForm() {
  const [calendar, setCalendar] = useState(false);
  const showCalendar = (e) => {
    e.preventDefault();
    if (calendar) {
      setCalendar(false);
    } else {
      setCalendar(true);
    }
  }

  return (
    <form className="headerForm">
      <label className="row__label">Направление</label>
      <div className="form__row">
        <input className="input from" placeholder="Откуда"></input>
        <span className="icon change"></span>
        <input className="input to" placeholder="Куда"></input>
      </div>
      <label className="row__label">Дата</label>
      <div className="form__row">
        <input className="input first" placeholder="ДД/ММ/ГГ" readOnly={true} onClick={showCalendar}></input>
        {calendar && <Calendar></Calendar>}
        <span className="icon change"></span>
        <input className="input second" placeholder="ДД/ММ/ГГ" readOnly={true} onClick={showCalendar}></input>
      </div>
      <button type="submit" className="form__submit">Найти билеты</button>
    </form>
  )
}
