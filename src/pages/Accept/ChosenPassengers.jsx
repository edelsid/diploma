import List from "../../models/List"

export default function ChosenPassengers() {
  return (
    <div className="panel__wrapper seat">
      <div className="passenger__panel border__btm">
        <div className="passenger__panel__header">
          <h4 className="normal">Пассажиры</h4>
        </div>
      </div>
      <div className="passenger__overview">
        <List className="all__passengers">
          <p className="passenger__item">Passenger</p>
          <p className="passenger__item">Passenger</p>
          <p className="passenger__item">Passenger</p>
        </List>
        <div className="changeback">
          <p className="totalsum">Total Sum</p>
          <button className="back__button bold">Изменить</button>
        </div>
      </div>
    </div>
  )
}
