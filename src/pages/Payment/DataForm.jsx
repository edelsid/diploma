export default function DataForm() {
  return (
    <form className="passenger__form flex">
      <div className="fio flex__standart">
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
      <div className="phone flex__standart">
        <label className="form__label">
          Контактный телефон
          <input className="passenger__input" id="phone"></input>
        </label>
      </div>
      <div className="email flex__standart">
        <label className="form__label">
          E-mail
          <input className="passenger__input" id="email"></input>
        </label>
      </div>
    </form>
  )
}
