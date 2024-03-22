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
  //const placeholder = {items: []};
  let prices = [];
  if (trains.data !== undefined) trains.data.items.forEach(item => {
    for (const [key, value] of Object.entries(item.departure.price_info)) {
      if (key === "first") prices.push(value.price)
      else {
        prices.push(value.top_price);
        prices.push(value.bottom_price);
      }
    }
  });

  return (
    <section className="table flex">
      <div className="column">
        <SideMenu prices={prices}/>
        <Latest />
      </div>
      <div className="column">
        {trains.data ? <Offers data={trains.data}/> : <></>}
      </div>
    </section>
  )
}