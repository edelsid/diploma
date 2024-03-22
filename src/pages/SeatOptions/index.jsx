import SideMenu from "../../components/ui/SideMenu/SideMenu"
import Latest from "../../components/ui/SideMenu/Latest"
import SeatChoice from "./SeatChoice"
import { useSelector } from "react-redux"
import { useFetch } from "../../hooks/useFetch"
import "./options.css"

export default function SeatOptions() {
  const data = useSelector(state => state.root.order.route);
  const rawURL = import.meta.env.VITE_API_URL;
  let back = false;
  const seatsTo = useFetch(`${rawURL}/routes/${data.departure._id}/seats`);
  const seatsBack = useFetch(`${rawURL}/routes/${data.arrival ? data.arrival._id : 0}/seats`);
  if (data.arrival) back = true

  return (
    <section className="table flex">
      <div className="column">
        <SideMenu />
        <Latest />
      </div>
      <div className="column offers">
        {seatsTo.data ? <SeatChoice back={back} seatsTo={seatsTo.data} seatsBack={seatsBack.data}/> : <></>}
      </div>
    </section>
  )
}
