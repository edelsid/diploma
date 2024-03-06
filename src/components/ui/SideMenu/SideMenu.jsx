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

export default function SideMenu() {
  const location = useLocation();

  //Сделать функционал для большого слайдера
  return (
    <>
      {location.pathname !== '/routes' && location.pathname !== '/seats' ? 
      <>
        <SideHeader />
        <PathInfo name={'Туда'} arrow={<>&rarr;</>} date='20.08.2018'/>
        <PathInfo name={'Обратно'} arrow={<>&larr;</>} date='09.09.2018'/>
        <PassengerInfo />
        <Total />
      </> :
      <>
        <Paths />
        <Services />
        <Price />
        <RideTime name={'Туда'} arrow={<>&#129050;</>}/>
        <RideTime name={'Обратно'} arrow={<>&#129048;</>}/>
      </>
      }
    </>
  )
}
