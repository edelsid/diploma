import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSearchParams, clearAllSeats } from "../../../store/order";
import Calendar from "../Calendar"

export default function Paths() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchParams = useSelector(state => state.root.order.searchParams);
  const [calendarTo, setCalendarTo] = useState(false);
  const [calendarBack, setCalendarBack] = useState(false);
  const [departDate, setDepartDate] = useState({dateMillisec: 0, date: '', codedDate: ''});
  const [arriveDate, setArriveDate] = useState({dateMillisec: 0, date: '', codedDate: ''});

  const showCalendar = (e) => {
    e.preventDefault();
    const {name} = e.target;
    switch(name) {
      case "depart": {
        if (calendarTo) setCalendarTo(false);
        else {
          setCalendarTo(true);
          setCalendarBack(false);
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

  const showDate = (dateMillisec, date, name, codedDate) => {
    name === "depart" && 
      setDepartDate({dateMillisec, date, codedDate});
      setCalendarTo(false);
    name === "arrive" &&
      setArriveDate({dateMillisec, date, codedDate});
      setCalendarBack(false);
  };

  const submitParams = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      setCalendarBack(false);
      setCalendarTo(false);
      const newParamsArr = searchParams.search.split("&");
      departDate.codedDate ? newParamsArr[2] = `date_start=${departDate.codedDate}` : newParamsArr[2] = "";
      arriveDate.codedDate ? newParamsArr[3] = `date_end=${arriveDate.codedDate}` : newParamsArr[3] = "";
      const newParams = {
        pathname: '/routes',
        search: newParamsArr.join("&"),
      };
  
      dispatch(addSearchParams(newParams));
      dispatch(clearAllSeats());
      navigate(newParams);
    }
  };

  const clearInput = (e) => {
    e.target.id === "depart" && 
      setDepartDate({dateMillisec: 0, date: '', codedDate: ''});
    e.target.id === "arrive" &&
      setArriveDate({dateMillisec: 0, date: '', codedDate: ''});
  };

  return (
    <aside className="parameters parameters__path">
      <form className="form__side" onKeyDown={submitParams} id="side_calendar">
        <h4 className="label medium">Дата поездки</h4>
        <div className="inputWrapper inputWrapper__side">
          <input 
            form="side_calendar"
            className="input input__side" 
            placeholder="ДД/ММ/ГГ" 
            onClick={showCalendar} 
            name="depart"
            value={departDate.date}
            readOnly>
          </input>
          <span className="clearup__icon__side lightgrey" id="depart" onClick={clearInput}>&#10006;</span>
          {calendarTo && <Calendar chosenDate={departDate.dateMillisec} showDate={showDate} name="depart"/>}
        </div>
        <h4 className="label medium">Дата возвращения</h4>
        <div className="inputWrapper inputWrapper__side">
          <input
            form="side_calendar"
            className="input input__side" 
            placeholder="ДД/ММ/ГГ" 
            onClick={showCalendar} 
            name="arrive"
            value={arriveDate.date}
            readOnly>
          </input>
          <span className="clearup__icon__side lightgrey" id="depart" onClick={clearInput}>&#10006;</span>
          {calendarBack && <Calendar chosenDate={arriveDate.dateMillisec} showDate={showDate} name="arrive"/>}
        </div>
      </form>
    </aside>
  )
}