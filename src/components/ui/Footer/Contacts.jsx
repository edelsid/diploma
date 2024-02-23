import ContactForm from "./ContactForm"
import { useSelector } from "react-redux"

export default function Contacts() {
  const socials = useSelector(state => state.site.socials);
  const contacts = useSelector(state => state.site.contacts);

  return (
    <section id="contacts" className="contacts">
      <div className="contactPanel">
        <h3>Свяжитесь с нами</h3>
        <ul className="contactList">
          {Object.keys(contacts).map((key) => <li key={key} className={`listItem ${key}`}>{contacts[key]}</li>)}
        </ul>
      </div>
      <div className="subscribePanel">
        <h3>Подписка</h3>
        <ContactForm></ContactForm>
        <div className="iconList">
          <h3>Подписывайтесь на нас</h3>
          <ul className="sbList">
            {socials.map((item) => <li className={item} key={item}></li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
