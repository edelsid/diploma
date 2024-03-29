import IntroImg from "./IntroImg"
import ProgressBar from "./ProgressBar";
import { HeaderForm } from "./HeaderForm";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { clearAll } from "../../../store/order";
import "./header.css"

export default function Header() {
  const location = useLocation();
  const menu = useSelector(state => state.root.site.menu);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  let currentPhase = 1;
  const path = location.pathname;

  const toMain = () => {
    dispatch(clearAll());
    navigate('/');
  }

  return (
    <header>
      <IntroImg loc={path}>
        <div className="panelWrapper">
          <section className="logo" onClick={toMain}>Лого</section>
          <div className="headerPanel">
            <section className="headerMenu flex">
              {menu.map((item) => <a key={item.name} className="menuItem" href={path === "/" ? item.link : `/${item.link}`}>{item.name}</a>)}
            </section>
          </div>
        </div>
        <section className="block flex__standart">
          {path === '/' && <h1 className="slogan"><p className="thin">Вся жизнь - </p>путешествие!</h1>}
          {path !== '/confirm' && <HeaderForm loc={path} />}
        </section>
      </IntroImg>
      {path !== '/' && path !== '/confirm' ? <ProgressBar phase={currentPhase}/> : <></>}
    </header>
  )
}