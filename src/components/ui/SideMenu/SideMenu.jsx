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
import { arrayOf, number } from "prop-types"

export default function SideMenu({ prices }) {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes("/routes") ? 
      <>
        <SideHeader />
        <PathInfo name={'Туда'} arrow={<>&#129050;</>} date='20.08.2018'/>
        <PathInfo name={'Обратно'} arrow={<>&#129048;</>} date='09.09.2018'/>
        <PassengerInfo />
        <Total />
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
}
