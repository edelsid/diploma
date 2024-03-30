import { object } from "prop-types"
import Train from "../../components/items/Train"

export default function ChosenTrain({ route }) {

  return (
    <div className="panel__wrapper seat">
      <div className="panel__standart border__btm flex__standart">
        <div className="flex__standart">
          <h4 className="medium">Поезд</h4>
        </div>
      </div>
      <Train item={route} final={true}/>
    </div>
  )
}

ChosenTrain.propTypes = {
  route: object,
}