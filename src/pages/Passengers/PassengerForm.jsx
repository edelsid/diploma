export default function PassengerForm() {
  return (
    <div className="passenger__form__wrapper border__btm">
      <form className="passenger__form flex">
        <label className="form__label">
          <select id="age">
            <option value="adult">Взрослый</option>
            <option value="children">Ребенок</option>
          </select>
        </label>
        <div className="flex__standart">
          <label className="form__label">
            Фамилия
            <input className="passenger__input" id="surname"></input>
          </label>
          <label className="form__label">
            Имя
            <input className="passenger__input" id="name"></input>
          </label>
          <label className="form__label">
            Отчество
            <input className="passenger__input" id="patronym"></input>
          </label>
        </div>
        <div className="additions flex">
          <label className="form__label">
            Пол
            <div className="gender flex">
              <button type="toggle" className="passenger__input gender__male bold" id="male">М</button>
              <button type="toggle" className="passenger__input gender__female active bold" id="female">Ж</button>
            </div>
          </label>
          <label className="form__label">
            Дата рождения
            <input className="passenger__input" id="birthdate" placeholder="ДД/ММ/ГГ"></input>
          </label>
        </div>
        <div className="disability check">
          <label className="form__label">
            <input type="checkbox" className="checkmark" id="disability"></input>
            ограниченная подвижность
          </label>
        </div>
      </form>
    </div>
  )
}