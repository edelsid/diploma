import ContactForm from "./ContactForm"
import List from "../../../models/List"
import Div from "../../../models/Div"
import { useSelector } from "react-redux"
import { func } from "prop-types";

export default function Contacts({ callPopup }) {
  const socials = useSelector(state => state.root.site.socials);
  const contacts = useSelector(state => state.root.site.contacts);

  return (
    <section id="contacts" className="contacts flex">
      <div className="contactPanel">
        <h3>Свяжитесь с нами</h3>
        <List className="contactList">
          {Object.keys(contacts).map((key) => <li key={key} className="flex">
            <span className={`listItem ${key}`}></span>
            {contacts[key]}
          </li>)}
        </List>
      </div>
      <div className="subscribePanel">
        <h3>Подписка</h3>
        <ContactForm callPopup={callPopup}></ContactForm>
        <div className="iconList">
          <h3>Подписывайтесь на нас</h3>
          <Div className="subscribeList flex">
            {socials.map((item) => <img className={`footerIcon lightGreyIcon ${item.name}`} key={item.name} src={item.img}></img>)}
          </Div>
        </div>
      </div>
    </section>
  )
}

Contacts.propTypes = {
  callPopup: func,
}