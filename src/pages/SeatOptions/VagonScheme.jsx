import OverviewGrid from "./OverviewGrid"

export default function VagonScheme() {

  return (
    <div className="vagonScheme">
      <div className="vagonScheme__header flex__standart">
        <div className="vagon__numbers flex__standart">
          <p className="px16">Вагоны</p>
          <p className="bold">07</p>
          <p className="bold">09</p>
        </div>
        <p className="px16">Нумерация вагонов начинает с головы состава</p>
      </div>
      <div className="vagonScheme__general flex">
        <div className="vagon__number flex__column">
          <h1>07</h1>
          <p>вагон</p>
        </div>
        <OverviewGrid />
      </div>
      <div className="choosingWithYou px16 flex__end">
        <p>11 человек выбирают места в этом поезде</p>
      </div>
    </div>
  )
}