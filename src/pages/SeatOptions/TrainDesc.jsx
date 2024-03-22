import { object } from "prop-types"
import reformatTime from "../../utils/reformatTime"
import Direction from "../TrainOptions/Direction"

export default function TrainDesc({ route }) {
  const time = reformatTime(route.duration);

  return (
    <div className="train__desc flex">
      <div className="train__type__seats flex__standart">
        <div className="train__icon__seats" />
        <div className="train__info">
          <div className="direction__full__seats">
            <p className="px16 capital">{route.from.city.name} &rarr; {route.to.city.name}</p>
          </div>
        </div>
      </div>
      <Direction arrow={<>&#129050;</>} from={route.from} to={route.to} time={time} />
      <div className="timeOverview flex__standart">
        <div className="train__icon__time" />
        <p className="px16">{`${time.hh} часов`}<br/>{`${time.min} минут`}</p>
      </div>
    </div>
  )
}

TrainDesc.propTypes = {
  route: object
}