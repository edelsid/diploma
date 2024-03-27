import PassengerString from "../../items/PassengerString"
import List from "../../../models/List"
import { object } from "prop-types";

export default function PassengerInfo({ seats }) {
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
    name: "Дети",
    count: getCount("child").length,
    price: getSum("child"),
  }, {
    name: `Дети "без места"`,
    count: getCount("noseat").length,
    price: getSum("noseat"),
  }];

  return (
    <aside className="parameters parameters__passengers">
      <div className="directionWrapper flex__standart">
        <div className="nameWrapper flex">
          <span className="icon">+</span>
          <h4>Пассажиры</h4>
        </div>
        <button type="button" className="openBtn flex__center">-</button>
      </div>
      <List className="passenger__desc">
        {passengers.map((item) => item.count > 0 && <PassengerString key={item.name} item={item}/>)}
      </List>
    </aside>
  )
}

PassengerInfo.propTypes = {
  seats: object,
}