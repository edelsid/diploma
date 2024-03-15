import { object } from "prop-types"
import Direction from "../TrainOptions/Direction"

export default function TrainDesc({ train }) {
  return (
    <div className="train__desc flex__standart">
      <div className="train__type__seats flex__standart">
        <div className="train__icon__seats" />
        <div className="train__info">
          <p className="label bold">{train.index}</p>
          <div className="direction__full__seats">
            <p className="px16 capital">{train.from.city.name} &rarr; {train.to.city.name}</p>
          </div>
        </div>
      </div>
      <Direction arrow={<>&#129050;</>} to={train.from} back={train.to} fullTime={train.fulltime} />
      <div className="timeOverview flex__standart">
        <div className="train__icon__time" />
        <p className="px16">{train.timeString.hour} часов<br/>{train.timeString.min} минуты</p>
      </div>
    </div>
  )
}

TrainDesc.propTypes = {
  train: object
}