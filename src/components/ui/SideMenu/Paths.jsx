//добавить календарь

export default function Paths() {
  return (
    <aside className="parameters parameters__path">
      <form className="form__side">
        <h4 className="label medium">Дата поездки</h4>
        <div className="inputWrapper inputWrapper__side">
          <input className="input input__side" placeholder="ДД/ММ/ГГ" readOnly={true}></input>
        </div>
        <h4 className="label medium">Дата возвращения</h4>
        <div className="inputWrapper inputWrapper__side">
          <input className="input input__side" placeholder="ДД/ММ/ГГ" readOnly={true}></input>
        </div>
      </form>
    </aside>
  )
}
