import VagonUnit from "./VagonUnit"
import Div from "../../models/Div"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react";
import { arrayOf, bool, object, string } from "prop-types";

export default function VagonList({ seats, back, category }) {
  const choosingWithYou = useSelector(state => state.root.trainSettings.choosingWithYou);
  const [sum, setSum] = useState(0);
  const allSeatsInfo = useSelector(state => state.root.order.places);
  const allChosenServices = useSelector(state => state.root.order.services);

  let seatsInfo;
  let chosenServices;

  if (back) {
    seatsInfo = allSeatsInfo.back;
    chosenServices = allChosenServices.back;
  } else {
    seatsInfo = allSeatsInfo.to;
    chosenServices = allChosenServices.to;
  }

  useEffect(() => {
    if (seatsInfo.length > 0) {
      const costs = seatsInfo.map((item) => item.cost);
      const serviceCosts = chosenServices.map((item) => item.cost);
      setSum((costs.reduce((a, b) => a + b, 0)) + (serviceCosts.reduce((a, b) => a + b, 0)));
    } else setSum(0);
  }, [seatsInfo, chosenServices]);

  return (
    <div className="vagonList">
      <div className="vagonList__header flex__standart">
        <Div className="vagon__numbers flex__standart">
          <p className="px16">Вагоны</p>
          {seats.map((item) => <p key={item.coach.name} className="bold px18">{item.coach.name}</p>)}
        </Div>
        <p className="px16">Нумерация вагонов начинает с головы состава</p>
      </div>
      {seats.map((item) => <VagonUnit key={seats.indexOf(item)} vagon={item} choosingWithYou={choosingWithYou} back={back} category={category}/>)}
      {sum > 0 && <div className="ticketCost flex__end">
        <div className="price flex">
          <h4 className="orange">{sum}</h4>
          <h4 className="medium grey">&#x20BD;</h4>
        </div>
      </div>}
    </div>
  )
}

VagonList.propTypes = {
  seats: arrayOf(object),
  back: bool,
  category: string,
}