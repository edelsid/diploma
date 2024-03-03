import SideMenu from "../../components/ui/SideMenu/SideMenu"
import Latest from "../../components/ui/SideMenu/Latest"
import { useLocation } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import Offers from "./Offers"
import "./options.css"

export default function TrainOptions() {
  const rawURL = import.meta.env.VITE_API_URL;
  const location = useLocation();
  const trains = useFetch(`${rawURL + location.pathname + location.search}`);

  return (
    <section className="table">
      <div className="column">
        <SideMenu />
        <Latest />
      </div>
      <div className="column">
        {trains.data ? <Offers data={trains.data}/> : <></>}
      </div>
    </section>
  )
}