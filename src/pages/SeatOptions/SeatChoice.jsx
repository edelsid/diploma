import SeatPanel from "./SeatPanel"
import List from "../../models/List"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react";
import { object, bool, arrayOf } from "prop-types";

export default function SeatChoice({ back, seatsTo, seatsBack }) {
  const routeData = useSelector(state => state.root.order.route);
  const chosenSeats = useSelector(state => state.root.order.places);
  const chosenServices = useSelector(state => state.root.order.services);
  const [disabled, sedDisabled] = useState(true);

  useEffect(() => {
    if (back && chosenSeats.to.length > 0 && chosenSeats.back.length > 0) {
      sedDisabled(false);
      return;
    } else if (!back && chosenSeats.to.length > 0) {
      sedDisabled(false);
      return;
    } else if (disabled === false) sedDisabled(true);
  }, [chosenSeats]);

  const forward = () => {
    console.log(chosenSeats);
    console.log(chosenServices);
    console.log('im saving this and moving forward');
  }

  return (
    <div className="offers__seats">
      <div className="seats__header">
        <h3 className="upper">Выбор мест</h3>
      </div>
      <List className="offers__list">
        <SeatPanel seats={seatsTo} route={routeData.departure}/>
        {back && <SeatPanel back={back} seats={seatsBack} route={routeData.arrival}/>}
      </List>
      <div className="btn__wrapper">
        <button className="button standart__white" disabled={disabled} onClick={forward}>Далее</button>
      </div>
    </div>
  )
}

SeatChoice.propTypes = {
  seatsTo: arrayOf(object),
  seatsBack: arrayOf(object),
  back: bool,
}