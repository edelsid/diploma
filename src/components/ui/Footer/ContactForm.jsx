export default function ContactForm() {
  return (
    <form className="subscribeForm">
      <label>Будьте в курсе событий</label>
      <div className="formInput flex">
        <input className="subscribeInput"></input>
        <button type="submit" className="transp__button onBlack__small">Отправить</button>
      </div>
    </form>
  )
}
