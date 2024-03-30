import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearAllSeats } from "../../store/order";
import List from "../../models/List";
import TrainDesc from "./TrainDesc"
import SeatType from "./SeatType";
import VagonOverview from "./VagonOverview";
import { arrayOf, bool, object } from "prop-types";

export default function SeatPanel({ back, seats, route }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const seatsByCategory = {
    to: useSelector(state => state.root.order.seats),
    back: useSelector(state => state.root.order.seatsBack),
  };
  let seatsByDirection;

  if (back) seatsByDirection = seatsByCategory.back;
  else seatsByDirection = seatsByCategory.to;

  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');

  const vagonTypes = [{
    name: 'Сидячий',
    className: 'fourth',
    status: route.have_fourth_class,
  }, {
    name: 'Плацкарт',
    className: 'third',
    status: route.have_third_class,
  }, {
    name: 'Купе',
    className: 'second',
    status: route.have_second_class,
  }, {
    name: 'Люкс',
    className: 'first',
    status: route.have_first_class,
  }];

  const showSeats = (value) => {
    if (open) {
      setOpen(false);
      setCategory('');
      return;
    }
    setOpen(true);
    setCategory(value);
  }

  const moveBack = (e) => {
    e.preventDefault();
    dispatch(clearAllSeats());
    navigate(-1);
  }

  return (
    <div className="panel__wrapper seat" id={back ? "back" : "to"}>
      <div className={`seats__panel`}>
        <div className="seats__panel__header flex">
          <button className="sign bold">{back ? <>&#129048;</> : <>&#129050;</>}</button>
          <button 
            className="button__transp compact narrow__black"
            onClick={moveBack}>
            Выбрать другой поезд
          </button>
        </div>
        <TrainDesc route={route}/>
        <div className="seat__types age">
          <h3>Количество билетов</h3>
          <List className="type__list flex">
            {seatsByDirection.map((item) => <SeatType 
              key={item.name} 
              item={item} 
              showSeats={showSeats} 
              className={item.codename}
              category={category}/>)}
          </List>
        </div>
      </div>
      {open && <VagonOverview vagonTypes={vagonTypes} seats={seats} back={back} category={category}/>}
    </div>
  )
}

SeatPanel.propTypes = {
  back: bool,
  seats: arrayOf(object),
  route: object,
}