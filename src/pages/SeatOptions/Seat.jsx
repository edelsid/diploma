import { bool, number, object, func, string } from "prop-types";
import { useState, useEffect } from "react";

export default function Seat({ item, free, alreadyChosen, props, thirdRow }) {
  const { type, chooseSeat } = props;
  const [chosen, setChosen] = useState(false);

  const seatCheck = (item) => {
    if (free) {
      const costType = determineCost(item);
      chooseSeat(item, costType);
      setChosen(!chosen);
      return;
    }
    alert ('Выберите свободное место');
  };

  const determineCost = (item) => {
    let result = "single_seat";
    if (type === "second" || type === "third") {
      switch (item % 2) {
        case 0: 
          result = "top_seat";
          break;
        default: result = "bottom_seat";
      }
    }
    return result; 
  }

  useEffect(() => {
    setChosen(alreadyChosen);
  }, []);

  let seatType = "singleSeat flex__center";
  switch (type) {
    case "first": 
      seatType = "singleSeat firstSeat flex"
      break;
    case "third": if (thirdRow) 
      seatType = "singleSeat thirdSeat flex__center"
      break;
    case "fourth": 
      seatType = "fourthSeat flex__center"
      break;
  }

  return (
    <div 
      className={`${seatType} ${free ? "free" : ""} ${chosen ? "chosenSeat" : ""}`}
      onClick={() => seatCheck(item)}>{item}
    </div>
  )
}

Seat.propTypes = {
  item: number,
  free: bool,
  alreadyChosen: object,
  props: object,
  thirdRow: bool,
  type: string,
  chooseSeat: func,
}