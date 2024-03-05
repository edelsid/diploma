export default function PassengerChoice() {
  return (
    <div className="panel__wrapper psg">
      <div className="passenger__panel border__btm">
        <div className="passenger__panel__header">
          <button type="button" className="button__round">—</button>
          <h4 className="normal">Пассажир 1</h4>
        </div>
      </div>
      <div className="passenger__form border__btm">Passenger form</div>
      <div className="passport__form border__btm">Passport form</div>
      <div className="next__passenger">
        <button className="next__passanger__button bold">Следующий пассажир</button>
      </div>
    </div>
  )
}

