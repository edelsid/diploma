import { endOfMonth, startOfMonth, differenceInDays, subMonths, addMonths, format, getDate, setDate, getISODay, getMonth } from "date-fns";
import { ru } from "date-fns/locale";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Cell from "../../items/Cell";
import { func, number, string } from "prop-types";

export default function Calendar({ chosenDate, showDate, name }) {
  const date = useSelector(state => state.site.date);
  const today = getDate(new Date(date));
  const currentMonth = getMonth(new Date(date));
  const [currentDate, setCurrentDate] = useState(date);
  const [chosenDay, setChosenDay] = useState(getDate(currentDate));
  const passedMonth = currentMonth > getMonth(new Date(currentDate));
  const equalMonth = currentMonth === getMonth(new Date(currentDate));
  
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1)); 
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const fullMonth = differenceInDays(end, start) + 1;
  let dayOfTheWeek = getISODay(start);
  const daysAfterEnd = 7 - getISODay(end);

  const callback = (day) => {
    const newDate = setDate(currentDate, day);
    setCurrentDate(Date.parse(newDate));
    setChosenDay(day);
    showDate(Date.parse(newDate), format(newDate, 'dd.LL.yyyy'), name, format(newDate, 'yyyy-LL-dd'));
  }

  useEffect(() => {
    if (chosenDate) {
      setChosenDay(getDate(chosenDate));
    }
  }, []);

  return (
    <div className="calendarWrapper">
      <div className="calendarArrow"></div>
      <div className="calendar">
        <div className="calendarHeader">
          <p onClick={prevMonth} className="changeMonth">&#129168;</p>
          <p className="month">{format(currentDate, 'LLLL', {locale: ru})}</p>
          <p onClick={nextMonth} className="changeMonth">&#129170;</p>
        </div>
        <div className="calendarGrid">
          {Array.from({length:dayOfTheWeek - 1}).map((_, day) => <Cell key={day} />)}

          {Array.from({length:fullMonth}).map((_, day) => {
            const correctDay = day + 1;
            return <Cell key={correctDay} passed={(correctDay < today && equalMonth) || passedMonth} active={chosenDay === correctDay} prop={correctDay} callback={callback}/>
          })}

          {daysAfterEnd !== 7 && Array.from({length:daysAfterEnd}).map((_, day) => <Cell key={day}/>)}
        </div>
      </div>
    </div>
  )
}

Calendar.propTypes = {
  name: string,
  showDate: func,
  chosenDate: number,
}