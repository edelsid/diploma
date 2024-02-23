import IntroImg from "./IntroImg"
import "./header.css"
import { HeaderForm } from "./HeaderForm";
import { useSelector } from "react-redux";

export default function Header() {
  const menu = useSelector(state => state.site.menu);

  return (
    <header>
      <IntroImg>
        <div className="panelWrapper">
          <section className="logo">Лого</section>
          <div className="headerPanel">
            <section className="headerMenu">
              {menu.map((item) => <a key={item.name} className="menuItem" href={item.link}>{item.name}</a>)}
            </section>
          </div>
        </div>
        <section className="block block__intro">
          <h1 className="slogan"><p className="thin">Вся жизнь - </p>путешествие!</h1>
          <HeaderForm></HeaderForm>
        </section>
      </IntroImg>
    </header>
  )
}
