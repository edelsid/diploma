import IntroImg from "./IntroImg"
import ProgressBar from "./ProgressBar";
import { HeaderForm } from "./HeaderForm";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom"
import "./header.css"

export default function Header() {
  const menu = useSelector(state => state.root.site.menu);
  const location = useLocation();
  const path = location.pathname;
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
    if (item.loc === path) currentPhase = item.count;
  });

  return (
    <header>
      <IntroImg loc={path}>
        <div className="panelWrapper">
          <section className="logo">Лого</section>
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
      {path !== '/' && path !== '/confirm' && <ProgressBar phase={currentPhase}/>}
    </header>
  )
}