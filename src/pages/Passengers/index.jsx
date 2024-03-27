import SideMenu from "../../components/ui/SideMenu/SideMenu"
import PassengerChoice from "./PassengerChoice"
import List from "../../models/List"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { clearPassenger } from "../../store/order"
import "./passengers.css"

export default function Passengers() {
  const [disabled, setDisabled] = useState(true);
  const route = useSelector(state => state.root.order.route);
  const passengers = useSelector(state => state.root.order.passengers);
  const seats = useSelector(state => state.root.order.places);
  const services = useSelector(state => state.root.order.services);

  const passengerCount = Math.max(...(Object.values(seats).map(item => item.length)));
  const dispatch = useDispatch();
  const items = Array(passengerCount).fill().map(() => ({
    id: crypto.randomUUID(),
  }));

  const [passengerArr, setPassengerArr] = useState(items);

  const forward = (e) => {
    e.preventDefault();
    if (!disabled) {
      console.log(passengers);
      console.log("i'm saving this and moving forward");
    }
  };

  const deletePassenger = (id) => {
    const newItems = passengerArr.filter((item) => item.id !== id);
    setPassengerArr(newItems);
    dispatch(clearPassenger({id}));
  };

  const addPassengerForm = () => {
    const newForm = {id: crypto.randomUUID()};
    setPassengerArr(passengerArr => [...passengerArr, newForm]);
  };

  useEffect(() => {
    if (passengers.length >= passengerCount) {
      setDisabled(false);
      return;
    } else if (disabled === false) setDisabled(true);
  }, [passengers]);

  return (
    <section className="table flex">
      <div className="column">
        <SideMenu route={route} seats={seats} services={services}/>
      </div>
      <div className="column offers">
        <List className="offers__passengers">
          {passengerArr.map((item) => <PassengerChoice key={item.id} id={item.id} num={passengerArr.indexOf(item)+1} deletePassenger={deletePassenger}/>)}
        </List>
        <div className="panel__wrapper psg add__passenger">
          <div className="flex__standart">
            <h4 className="medium">Добавить пассажира</h4>
            <button type="button" className="add__passenger__btn" onClick={addPassengerForm}>+</button>
          </div>
        </div>
        <div className="btn__wrapper">
          <button className="button standart__white" disabled={disabled} onClick={forward}>Далее</button>
        </div>
      </div>
    </section>
  )
}
