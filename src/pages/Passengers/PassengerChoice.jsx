import PassportForm from "./PassportForm"
import PassengerForm from "./PassengerForm"

export default function PassengerChoice() {
  return (
    <div className="panel__wrapper psg">
      <div className="panel__standart border__btm flex__standart">
        <div className="flex__standart">
          <button type="button" className="button__round flex__center">—</button>
          <h4 className="medium">Пассажир 1</h4>
        </div>
        <span>&#x2716;</span>
      </div>
      <PassengerForm />
      <PassportForm />
      <div className="form__wrapper__standart flex__end">
        <button className="button__transp compact narrow__black">Следующий пассажир</button>
      </div>
    </div>
  )
}