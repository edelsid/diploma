import { useLocation } from "react-router-dom"
import SideHeader from "./SideHeader"
import PathInfo from "./PathInfo"
import PassengerInfo from "./PassengerInfo"
import Total from "./Total"
import Paths from "./Paths"
import Services from "./Services"
import Price from "./Price"
import RideTime from "./RideTime"
import "./sideMenu.css"
import { arrayOf, number, object } from "prop-types"

export default function SideMenu({ prices, route, seats, services }) {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes("/routes") ? 
      <>
        <SideHeader />
        <PathInfo name={'Туда'} arrow={<>&#129050;</>} data={route.departure}/>
        <PassengerInfo seats={seats.to}/>
        {route.arrival && <>
          <PathInfo name={'Обратно'} arrow={<>&#129048;</>} data={route.arrival}/>
          <PassengerInfo seats={seats.back}/>
        </>}
        <Total seats={seats} services={services}/>
      </> :
      <>
        <Paths />
        <Services />
        <Price prices={prices}/>
        <RideTime name={'Туда'} arrow={<>&#129050;</>}/>
        <RideTime name={'Обратно'} arrow={<>&#129048;</>}/>
      </>}
    </>
  )
}

SideMenu.propTypes = {
  prices: arrayOf(number),
  route: object,
  seats: arrayOf(object),
  services: arrayOf(object),
}