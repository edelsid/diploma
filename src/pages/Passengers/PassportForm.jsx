export default function PassportForm() {
  return (
    <div className="passport__form__wrapper border__btm">
      <form className="passport__form">
        <div className="passport flex">
          <label className="form__label">
            Тип документа
            <select id="documentType">
              <option value="rfPassport">Паспорт РФ</option>
              <option value="birthSert">Свидетельство о рождении</option>
            </select>
          </label>
          <label className="form__label">
            Серия
            <input className="passenger__input" id="series" placeholder="_ _ _ _"></input>
          </label>
          <label className="form__label">
            Номер
            <input className="passenger__input" id="number" placeholder="_ _ _ _ _ _"></input>
          </label>
        </div>
      </form>
    </div>
  )
}
