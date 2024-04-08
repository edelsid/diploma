import person from "../../../assets/icons/person.svg"
import PassengerString from "../../items/PassengerString"
import List from "../../../models/List"
import { useState } from "react";
import { object, arrayOf, oneOfType } from "prop-types";

export default function PassengerInfo({ seats }) {
  const [open, setOpen] = useState(true);
  const getCount = (category) => {
    return seats.filter((item) => item.category === category);
  };

  const getSum = (category) => {
    const byCategory = getCount(category);
    let sum = 0;
    byCategory.forEach(item => sum = sum + item.cost);
    return sum;
  };

  const passengers = [{
    name: "Взрослых",
    count: getCount("adult").length,
    price: getSum("adult"),
  }, {
    name: "Детских",
    count: getCount("children").length,
    price: getSum("children"),
  }, {
    name: `Дети "без места"`,
    count: getCount("noseat").length,
    price: getSum("noseat"),
  }];

  const openWindow = () => {
    setOpen(!open);
  }

  return (
    <aside className="parameters parameters__passengers">
      <div className="directionWrapper flex__standart">
        <div className="nameWrapper flex__standart">
          <img className="icon" src={person}></img>
          <h4>Пассажиры</h4>
        </div>
        <button 
          type="button" 
          className="openBtn flex__center"
          onClick={openWindow}>
          {open ? "-" : "+"}
          </button>
      </div>
      <List className={`passenger__desc ${!open ? "minimized" : ""}`}>
        {passengers.map((item) => item.count > 0 && <PassengerString key={item.name} item={item}/>)}
      </List>
    </aside>
  )
}

PassengerInfo.propTypes = {
  seats: oneOfType([
    arrayOf(object),
    object,
  ])
}