import SideMenu from "../../components/ui/SideMenu/SideMenu"
import Latest from "../../components/ui/SideMenu/Latest"
import { useLocation } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import Offers from "./Offers"
import { useMemo } from "react"
import getPrices from "../../utils/getPrices"
import "./options.css"

export default function TrainOptions() {
  const rawURL = import.meta.env.VITE_API_URL;
  const location = useLocation();
  const trains = useFetch(`${rawURL + location.pathname + location.search}`);
  //const placeholder = {items: []};
  const isBack = (trains.data !== undefined && trains.data.items.find((item) => item.arrival) !== undefined);
  const prices = useMemo(() => {
    let priceArr = [];
    if (trains.data !== undefined) {
      trains.data.items.forEach((item) => priceArr = getPrices(item, priceArr));
    } 
    return priceArr;
  }, [trains.data]);
  const itemsWithRanges = useMemo(() => {
    let itemArr = [];
    if (trains.data !== undefined) {
      trains.data.items.forEach((item) => {
        let prices = [];
        prices = getPrices(item, prices);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
  
        const itemWithRange = {
          route: item,
          minPrice,
          maxPrice,
          timeRange: {
            from: new Date(item.departure.from.datetime).getHours(),
            to: new Date(item.departure.to.datetime).getHours(),
          },
          ...isBack && {timeRangeBack: {
            from: new Date(item.arrival.from.datetime).getHours(),
            to: new Date(item.arrival.to.datetime).getHours(),
          }}
        };
        itemArr.push(itemWithRange);
      });
    }
    return itemArr;
  }, [trains.data]);
    
  return (
    <section className="table flex">
      <div className="column">
        <SideMenu prices={prices} back={isBack}/>
        <Latest />
      </div>
      <div className="column">
        {trains.data ? <Offers data={itemsWithRanges} back={isBack}/> : <></>}
      </div>
    </section>
  )
}