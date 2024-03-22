import { string } from "prop-types"
import { useState } from "react"
import { useFetch } from "../../../hooks/useFetch";
import { useNavigate, createSearchParams } from "react-router-dom";
import Calendar from "./Calendar";

export function HeaderForm({ loc }) {
  const navigate = useNavigate();
  const rawURL = import.meta.env.VITE_API_URL;
  const [adress, setAdress] = useState(`${rawURL}/routes/cities`);
  const cities = useFetch(adress);
  const [calendarTo, setCalendarTo] = useState(false);
  const [calendarBack, setCalendarBack] = useState(false);
  const [inputFrom, setInputFrom] = useState({});
  const [inputTo, setInputTo] = useState({});
  const [departDate, setDepartDate] = useState({});
  const [arriveDate, setArriveDate] = useState({});
  const [focusFrom, setFocusFrom] = useState(false);
  const [focusTo, setFocusTo] = useState(false);

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
      }
    }
  };

  const changeInput = (e) => {
    const {name, value} = e.target;
    name === "from" && setInputFrom({id: '', name: value});
    name === "to" && setInputTo({id: '', name: value});
    setAdress(`${rawURL}/routes/cities?name=${value}`);
  };

  const fillFromList = (city, name) => {
    name === "from" && setInputFrom({id: city._id, name: city.name});
    name === "to" && setInputTo({id: city._id, name: city.name});
    setFocusFrom(false);
    setFocusTo(false);
  };
  
  const submitForm = (e) => {
    e.preventDefault();
    if (arriveDate.dateMillisec < departDate.dateMillisec) {
      alert ('Ошибка! Дата прибытия должна следовать за датой отправления');
      return;
    }

    navigate({
      pathname: '/routes',
      search: createSearchParams ({
        from_city_id: inputFrom.id,
        to_city_id: inputTo.id,
        ...(departDate.codedDate && {date_start: departDate.codedDate}),
        ...(arriveDate.codedDate && {date_end: departDate.codedDate}),
      }).toString()
    });
  };

  const showDate = (dateMillisec, date, name, codedDate) => {
    name === "depart" && 
      setDepartDate({dateMillisec, date, codedDate});
      setCalendarTo(false);
    name === "arrive" &&
      setArriveDate({dateMillisec, date, codedDate});
      setCalendarBack(false);
  };

  //инпут врапперы вынести в отдельный компонент?
  //выправить хук, чтобы не было 100500 запросов на сервер
  return (
    <form onSubmit={submitForm} className={`headerForm flex__column ${loc === "/" ? "headerForm__normal" : "headerForm__slim"}`}>
      <div className={`forwWrapper ${loc === "/" ? "forwWrapper__normal" : "formWrapper__slim flex"}`}>
        <div className="row__first">
          <label className="row__label">Направление</label>
          <div className="form__row flex__standart">
            <div className="inputWrapper">
              <input 
                required={true}
                className="input from capital" 
                placeholder="Откуда"
                name="from"
                value={inputFrom.name}
                onChange={changeInput}
                onFocus={() => setFocusFrom(true)}>
              </input>
              {focusFrom && inputFrom.name && cities.data.length > 0 && <div className="cityOptions">
                {cities.data.map((city) => <p className="city" key={city._id} onClick={() => fillFromList(city, "from")}>{city.name}</p>)}
              </div>}
            </div>
            <span className="icon change"></span>
            <div className="inputWrapper">
              <input
                required={true}
                className="input to capital" 
                placeholder="Куда"
                name="to"
                value={inputTo.name}
                onChange={changeInput}
                onFocus={() => setFocusTo(true)}>
              </input>
              {focusTo && inputTo.name && cities.data.length > 0 && <div className="cityOptions">
                {cities.data.map((city) => <p className="capital" key={city._id} onClick={() => fillFromList(city, "to")}>{city.name}</p>)}
              </div>}
            </div>
          </div>
        </div>
        <div className="row__second">
          <label className="row__label">Дата</label>
          <div className={`form__row flex__standart ${loc === "/" ? "" : "form__row__slim"}`}>
            <div className="inputWrapper">
              <input
                className="input first" 
                placeholder="ДД/ММ/ГГ" 
                readOnly={true} 
                onClick={showCalendar} 
                name="depart"
                value={departDate.date}>
              </input>
              {calendarTo && <Calendar chosenDate={departDate.dateMillisec} showDate={showDate} name="depart"/>}
            </div>
            <div className="inputWrapper">
              <input 
                className="input second" 
                placeholder="ДД/ММ/ГГ" 
                readOnly={true} 
                onClick={showCalendar} 
                name="arrive"
                value={arriveDate.date}>
              </input>
              {calendarBack && <Calendar chosenDate={arriveDate.dateMillisec} showDate={showDate} name="arrive"/>}
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="button standart form__submit medium">Найти билеты</button>
    </form>
  )
}

HeaderForm.propTypes = {
  loc: string,
}