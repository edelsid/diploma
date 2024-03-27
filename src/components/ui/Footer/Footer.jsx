import Contacts from "./Contacts"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAll } from "../../../store/order";
import "./footer.css"

export default function Footer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToTop = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  }

  const toMain = () => {
    dispatch(clearAll());
    navigate('/');
    window.scrollTo(0, 0);
  }

  return (
    <footer>
      <div className="contactsWrapper">
        <Contacts></Contacts>
      </div>
      <section className="footerPanel flex__standart">
        <p className="logo" onClick={toMain}>Лого</p>
        <div className="toTop flex__center" onClick={goToTop}></div>
        <p>2018 WEB</p>
      </section>
    </footer>
  )
}