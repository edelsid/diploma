import SideMenu from "../../components/ui/SideMenu/SideMenu"
import ChosenTrain from "./ChosenTrain"
import ChosenPassengers from "./ChosenPassengers"
import ChosenPayment from "./ChosenPayment"
import { useState, useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./accept.css"

export default function Accept() {
  const navigate = useNavigate();
  const [ body, setBody ] = useState(null);
  const [ adress, setAdress ] = useState(null);
  const rawURL = import.meta.env.VITE_API_URL;
  const { data } = useFetch(adress, body);
  const route = useSelector(state => state.root.order.route);
  const seats = useSelector(state => state.root.order.places);
  const services = useSelector(state => state.root.order.services);
  const passengers = useSelector(state => state.root.order.passengers);
  const paymentInfo = useSelector(state => state.root.order.payment);

  const { payment, payer } = paymentInfo;
  const { arrival, departure } = route;  

  const confirmOrder = (e) => {
    e.preventDefault();
    const reqBody = {
      user: {
        first_name: payer.name,
        last_name: payer.surname,
        patronymic: payer.patronym,
        phone: payer.phone,
        email: payer.email,
        payment_method: "online",
      },
      departure: {
        route_direction_id: departure._id,
        seats: countPassengers("to"),
      }
    };
    if (payment.cash) reqBody.user.payment_method = "cash";
    if (route.arrival) reqBody.arrival = {
      route_direction_id: arrival._id,
      seats: countPassengers("back"),
    };
    setBody(reqBody);
    setAdress(`${rawURL}/order`);
  };

  useEffect(() => {
    if (data && data.status) {
      console.log(data);
      console.log('order confirmed');
      navigate('/confirm');
    }
  }, [data])

  const countPassengers = (way) => {
    const result = [];
    let direction = departure;
    if (way === "back") direction = arrival;

    for (let i = 0; i < seats[way].length; i+=1) {
      const newPassenger = {
        coach_id: direction.train._id,
        seat_number: seats[way][i].item,
        is_child: false,
        include_children_seat: true,
      };
      if (seats[way][i].type === "child") newPassenger.is_child = true;
      if (newPassenger.is_child === true) newPassenger.include_children_seat = false;

      newPassenger.person_info = {
        is_adult: true,
        first_name: passengers[i].person.name,
        last_name: passengers[i].person.surname,
        patronymic: passengers[i].person.patronym,
        gender: true,
        birthday: passengers[i].person.birthdate,
        document_type: passengers[i].doc.docType,
        document_data: passengers[i].doc.number,
      };

      if (passengers[i].person.type === "child") newPassenger.person_info.is_adult = false;
      if (passengers[i].person.gender === "female") newPassenger.person_info.gender = false;
      if (passengers[i].doc.docType === "passport") newPassenger.person_info.document_data = passengers[i].doc.series + passengers[i].doc.number;

      result.push(newPassenger);
    }
    return result;
  };

  return (
    <section className="table flex">
      <div className="column">
        <SideMenu route={route} seats={seats} services={services}/>
      </div>
      <div className="column offers">
        <ChosenTrain route={route}/>
        <ChosenPassengers passengers={passengers} seats={seats} services={services}/>
        <ChosenPayment payment={paymentInfo}/>
        <div className="btn__wrapper">
          <button className="button standart__white" onClick={confirmOrder}>Подтвердить</button>
        </div>
      </div>
    </section>
  )
}