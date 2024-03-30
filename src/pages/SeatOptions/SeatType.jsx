import { useState, useEffect } from "react";
import { func, object, string } from "prop-types";

export default function SeatType({ item, showSeats, className, category}) {
  const [ active, setActive ] = useState(false);
  let text = '';

  useEffect(() => {
    if (className === category) setActive(true)
    else setActive(false);
  }, [category])

  //от чего это зависит?
  const texts = {
    adult: `Можно добавить еще 4 пассажиров.`,
    children: `Можно добавить еще 4 детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-60%`
  }
  Object.entries(texts).forEach(([key, value]) => {
    if (key === item.codename) text = value;
  });

  return (
    <div className={`seat__type ${active ? "seat__type__active" : ""}`}>
      <p className="seat__type__panel px16" onClick={() => showSeats(item.codename)}>
        {item.name} — {item.count}
      </p>
      <p className="px16 explanation">{text}</p>
    </div>
  )
}

SeatType.propTypes = {
  item: object,
  showSeats: func,
  className: string,
  category: string,
}