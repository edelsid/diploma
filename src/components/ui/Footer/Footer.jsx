import Contacts from "./Contacts"
import "./footer.css"

export default function Footer() {
  const goToTop = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  }

  return (
    <footer>
      <div className="contactsWrapper">
        <Contacts></Contacts>
      </div>
      <section className="footerPanel">
        <p className="logo">Лого</p>
        <div className="toTop" onClick={goToTop}></div>
        <p>2018 WEB</p>
      </section>
    </footer>
  )
}
