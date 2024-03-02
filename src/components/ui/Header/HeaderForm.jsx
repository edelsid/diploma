import { useState } from "react"
import Calendar from "./Calendar";

export function HeaderForm({ loc }) {
  const [calendarTo, setCalendarTo] = useState(false);
  const [calendarBack, setCalendarBack] = useState(false);
  const [inputFrom, setInputFrom] = useState('');
  const [inputTo, setInputTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [arrivetDate, setArrivetDate] = useState('');
  const [focus, setFocus] = useState(false);

  const showCalendar = (e) => {
    e.preventDefault();
    const {name} = e.target;
    switch(name) {
      case "depart": {
        if (calendarTo) setCalendarTo(false);
        else {
          setCalendarTo(true);
          setCalendarBack(false)
        }
        break;
      }
      case "arrive": {
        if(calendarBack) setCalendarBack(false);
        else {
          setCalendarBack(true);
          setCalendarTo(false);
        }
        break;
      };
    };
  };

  const changeInput = (e) => {
    const {name, value} = e.target;
    switch(name) {
      case "from": setInputFrom(value);
      break;
      case "to": setInputTo(value);
      break;
    };
  };
  
  const submitForm = (e) => {
    e.preventDefault();
    console.log(inputFrom, inputTo, departDate, arrivetDate);
  };

  const showDate = (date, name) => {
    switch(name) {
      case "depart": {
        setDepartDate(date);
        setCalendarTo(false);
        break;
      }
      case "arrive": {
        setArrivetDate(date);
        setCalendarBack(false);
        break;
      }
    };
  }

  return (
    <form onSubmit={submitForm} className={`headerForm ${loc === "/" ? "headerForm__normal" : "headerForm__slim"}`}>
      <div className={`forwWrapper ${loc === "/" ? "forwWrapper__normal" : "formWrapper__slim"}`}>
        <div>
          <label className="row__label">Направление</label>
          <div className="form__row">
            <div className="inputWrapper">
              <input 
                className="input from" 
                placeholder="Откуда"
                name="from"
                value={inputFrom}
                onChange={changeInput}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}>
              </input>
              {focus && inputFrom && <div className="cityOptions">ff</div>}
            </div>
            <span className="icon change"></span>
            <div className="inputWrapper">
              <input 
                className="input to" 
                placeholder="Куда"
                name="to"
                value={inputTo}
                onChange={changeInput}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}>
              </input>
              {focus && inputTo && <div className="cityOptions">ff</div>}
            </div>
          </div>
        </div>
        <div>
          <label className="row__label">Дата</label>
          <div className={`form__row ${loc === "/" ? "" : "form__row__slim"}`}>
            <div className="inputWrapper">
              <input
                className="input first" 
                placeholder="ДД/ММ/ГГ" 
                readOnly={true} 
                onClick={showCalendar} 
                name="depart"
                value={departDate}>
              </input>
              {calendarTo && <Calendar showDate={showDate} name="depart"/>}
            </div>
            <div className="inputWrapper">
              <input 
                className="input second" 
                placeholder="ДД/ММ/ГГ" 
                readOnly={true} 
                onClick={showCalendar} 
                name="arrive"
                value={arrivetDate}>
              </input>
              {calendarBack && <Calendar showDate={showDate} name="arrive"/>}
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="form__submit">Найти билеты</button>
    </form>
  )
}