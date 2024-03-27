import Div from "../../models/Div"
import Seat from "./Seat";
import { useDispatch, useSelector } from "react-redux";
import { changeSeats } from "../../store/order";
import { arrayOf, object, bool, string } from "prop-types";

export default function SeatGraphic({ coach, seats, back, category }) {
  const dispatch = useDispatch();
  const alreadyChosen = useSelector(state => state.root.order.places);
  const type = coach.class_type;
  let chosenByDirection;

  if (back) chosenByDirection = alreadyChosen.back;
  else chosenByDirection = alreadyChosen.to;

  const seatNumbers = useSelector(state => state.root.trainSettings.seatNumbers);
  const { highSeats, lowSeats, sideSeats, firstClassSeats, sittingSeats, remainingSittingSeats } = seatNumbers;

  let freeSeats = [];
  seats.forEach((seat) => {
    if (seat.available) freeSeats.push(seat.index);
  });

  const chooseSeat = (item, costType) => {
    dispatch(changeSeats({
      data: {
        item, 
        vagon: coach.name,
        category,
        type,
        costType,
        cost: getPrice(costType),
      },
      back,
    }));
  };

  const getPrice = (costType) => {
    let result = coach.price;
    if (type === "fourth") result = coach.top_price;
    switch (costType) {
      case "top_seat": result = coach.top_price;
        break;
      case "bottom_seat": result = coach.bottom_price;
        break;
    }
    return result;
  }

  const gatherProps = (item) => {
    const props = {
      item, 
      type,
      free: freeSeats.includes(item),
      alreadyChosen: chosenByDirection.find(e => e.item === item && e.vagon === coach.name),
      chooseSeat,
    };
    return props;
  }

  return (
    <div className={`seats ${type === "fourth" && "smallSeats"}`}>
      <Div className="seatRow flex__standart">
        {type !== "first" ? 
        highSeats.map((item) => <Seat
          props={gatherProps(item)} 
          key={item}/>) : 
        firstClassSeats.map((item) => <Seat 
          props={gatherProps(item)} 
          key={item}/>)}
      </Div>

      {type !=="first" && 
      <Div className="seatRow flex__standart">
        {lowSeats.map((item) => <Seat 
          props={gatherProps(item)} 
          key={item}/>)}
      </Div>}

      {type === "third" || type === "fourth" ? 
      <Div className={`seatRow flex__standart ${type === "fourth" ? "thinRow" : "sideRow"}`}>
        {type === "third" && sideSeats.map((item) => <Seat 
          props={gatherProps(item)} 
          key={item}
          thirdRow={true}/>)}
        {type === "fourth" && sittingSeats.map((item) => <Seat 
          props={gatherProps(item)} 
          key={item}/>)}
      </Div> : <></>}

      {type === "fourth" && 
      <Div className="seatRow flex__standart">
        {remainingSittingSeats.map((item) => <Seat 
          props={gatherProps(item)} 
          key={item}/>)}
      </Div>}
    </div>
  )
}

SeatGraphic.propTypes = {
  coach: object,
  seats: arrayOf(object),
  back: bool,
  category: string,
}