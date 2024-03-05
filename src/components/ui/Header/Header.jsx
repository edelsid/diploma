import IntroImg from "./IntroImg"
import ProgressBar from "./ProgressBar";
import { HeaderForm } from "./HeaderForm";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom"
import "./header.css"

export default function Header() {
  const menu = useSelector(state => state.site.menu);
  const location = useLocation();
  const locTable = [{
    count: 1,
    loc: '/routes',
  }, {
    count: 1,
    loc: '/seats',
  }, {
    count: 2,
    loc: '/passengers',
  }, {
    count: 3,
    loc: '/payment',
  }, {
    count: 4,
    loc: '/accept',
  }];

  let currentPhase;
  locTable.forEach((item) => {
    if (item.loc === location.pathname) currentPhase = item.count;
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
          {location.pathname !== '/confirm' && <HeaderForm loc={location.pathname} />}
        </section>
      </IntroImg>
      {location.pathname !== '/' && location.pathname !== '/confirm' && <ProgressBar phase={currentPhase}/>}
    </header>
  )
}