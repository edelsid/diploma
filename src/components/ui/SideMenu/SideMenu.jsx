import Paths from "./Paths"
import Services from "./Services"
import Price from "./Price"
import RideTime from "./RideTime"
import "./sideMenu.css"

export default function SideMenu() {

  //Сделать функционал для большого слайдера и добавить раскрытие окон туда и обратно
  //причесать цсс
  return (
    <>
      <Paths />
      <Services />
      <Price />
      <RideTime name={'Туда'} arrow={<>&rarr;</>}/>
      <RideTime name={'Обратно'} arrow={<>&larr;</>}/>
    </>
  )
}
