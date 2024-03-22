import { number, object, bool, string } from "prop-types";
import OverviewGrid from "./OverviewGrid"
import SchemeGraphic from "./SchemeGraphic"

export default function VagonUnit({ vagon, choosingWithYou, back, category }) {
  const { coach, seats } = vagon;

  return (
    <>
      <div className="vagonList__general flex">
        <div className="vagon__number flex__column">
          <p>вагон</p>
          <h4>{coach.name}</h4>
        </div>
        <OverviewGrid vagon={vagon} back={back}/>
      </div>
      <div className="choosingWithYou px16 flex__end">
        <p>{choosingWithYou} человек выбирают места в этом поезде</p>
      </div>
      <SchemeGraphic coach={coach} seats={seats} back={back} category={category}/>
    </>
  )
}

VagonUnit.propTypes = {
  vagon: object,
  choosingWithYou: number,
  back: bool,
  category: string,
}
