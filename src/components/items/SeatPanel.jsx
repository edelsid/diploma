import List from "../../models/List";

export default function SeatPanel() {
  const seatTypes = [{
    name: "Взрослых",
    count: 2,
  }, {
    name: "Детских",
    count: 1,
  }, {
    name: `Детских "без места"`,
    count: 0,
  }];

  const vagonTypes = ['Сидячий', 'Плацкарт', 'Купе', 'Люкс'];

  return (
    <div className="panel__wrapper seat">
      <div className="seats__panel">
        <div className="seats__panel__header">
          <button className="sign bold">&rarr;</button>
          <button className="back__button">Выбрать другой поезд</button>
        </div>
        <div className="train__desc">Train description</div>
        <div className="seat__types age">
          <h3>Количество билетов</h3>
          <List className="type__list">
            {seatTypes.map((item) => <div key={item.count} className="seat__type">
              <p>{item.name}</p>
              <p>{item.count}</p>
            </div>)}
          </List>
        </div>
      </div>
      <div className="border"></div>
      <div className="seats__panel">
        <h3>Тип вагона</h3>
        <List className="type__list">
          {vagonTypes.map((item) => <div key={vagonTypes.indexOf(item)} className="seat__type">
            <span className="type__icon">+</span>
            <p>{item}</p>
          </div>)}
        </List>
      </div>
    </div>
  )
}
