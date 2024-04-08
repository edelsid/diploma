import { arrayOf, object } from "prop-types";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearAllPassengers, clearPaymentInfo } from "../../store/order";
import List from "../../models/List"
import countSum from "../../utils/countSum";
import Passenger from "./Passenger"

export default function ChosenPassengers({ passengers, seats, services }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalSum = useMemo(() => {
    return countSum(seats) + countSum(services)
  }, [seats, services]);

  const changeOptions = (e) => {
    e.preventDefault();
    dispatch(clearPaymentInfo());
    dispatch(clearAllPassengers());
    navigate("/passengers");
  };

  return (
    <div className="panel__wrapper seat">
      <div className="panel__standart border__btm flex__standart">
        <div className="flex__standart">
          <h4 className="medium">Пассажиры</h4>
        </div>
      </div>
      <div className="overview flex">
        <List className="all__passengers flex">
          {passengers.map((item) => <Passenger key={passengers.indexOf(item)} passenger={item}/>)}
        </List>
        <div className="changeback flex">
          <div className="totalsum price flex__standart">
            <h3 className="medium">Всего</h3>
            <div className="flex sum">
              <h3>{totalSum}</h3>
              <h3 className="medium grey">&#x20bd;</h3>
            </div>
          </div>
          <button className="button__transp narrow__black" onClick={changeOptions}>Изменить</button>
        </div>
      </div>
    </div>
  )
}

ChosenPassengers.propTypes = {
  passengers: arrayOf(object),
  seats: object,
  services: object,
}