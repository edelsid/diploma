import IntroImg from "./IntroImg"
import ProgressBar from "./ProgressBar";
import { HeaderForm } from "./HeaderForm";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom"
import "./header.css"

export default function Header() {
  const menu = useSelector(state => state.site.menu);
  const location = useLocation();
  const locTable = {
    1: '/routes',
    2: '/seats',
    3: '/payment',
    4: '/confirm',
  };
  let currentPhase;
  Object.entries(locTable).forEach(([key, value]) => {
    if (value === location.pathname) {
      currentPhase = Number(key);
    }
  });

  return (
    <header>
      <IntroImg loc={location.pathname}>
        <div className="panelWrapper">
          <section className="logo">Лого</section>
          <div className="headerPanel">
            <section className="headerMenu">
              {menu.map((item) => <a key={item.name} className="menuItem" href={item.link}>{item.name}</a>)}
            </section>
          </div>
        </div>
        <section className="block block__intro">
          {location.pathname === '/' && <h1 className="slogan"><p className="thin">Вся жизнь - </p>путешествие!</h1>}              
          <HeaderForm loc={location.pathname} />
        </section>
      </IntroImg>
      {location.pathname !== '/' && <ProgressBar phase={currentPhase}/>}
    </header>
  )
}