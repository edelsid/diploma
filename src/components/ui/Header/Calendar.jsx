import { endOfMonth, startOfMonth, differenceInDays, subMonths, addMonths, format, getDate, setDate } from "date-fns";
import { ru } from "date-fns/locale";
import { useSelector } from "react-redux";
import { useState } from "react";
import Cell from "../../items/Cell";

export default function Calendar({ showDate, name }) {
  const date = useSelector(state => state.site.date);
  const [currentDate, setCurrentDate] = useState(date);
  const [chosenDay, setChosenDay] = useState(getDate(currentDate));
  
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1)); 
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const fullMonth = differenceInDays(end, start) + 1;
  let dayOfTheWeek = start.getDay() - 1;
  if (dayOfTheWeek === -1) dayOfTheWeek = 6;
  const daysAfterEnd = 7 - end.getDay();

  const callback = (day) => {
    const newDate = setDate(currentDate, day);
    setCurrentDate(newDate);
    setChosenDay(day);
    showDate(format(newDate, 'dd.LL.yyyy'), name);
  }

  return (
    <div className="calendarWrapper">
      <div className="calendarArrow"></div>
      <div className="calendar">
        <p>{format(currentDate, 'dd.LL.yyyy', {locale: ru})}</p>
        <div className="calendarHeader">
          <p onClick={prevMonth}>{'<'}</p>
          {format(currentDate, 'LLLL', {locale: ru})}
          <p onClick={nextMonth}>{'>'}</p>
        </div>
        <div className="calendarGrid">
          {Array.from({length:dayOfTheWeek}).map((_, day) => <Cell key={day} />)}
          {Array.from({length:fullMonth}).map((_, day) => {
            const correctDay = day + 1;
            return <Cell key={correctDay} active={chosenDay === correctDay} prop={correctDay} callback={callback}/>
          })}
          {daysAfterEnd !== 7 && Array.from({length:daysAfterEnd}).map((_, day) => <Cell key={day}/>)}
        </div>
      </div>
    </div>
  )
}
