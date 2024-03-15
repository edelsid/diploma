import image from "../../assets/image.png"
import ListItem from '../../components/items/ListItem'
import { useSelector } from "react-redux"

export default function Rules() {
  const pros = useSelector(state => state.root.site.pros);

  return (
    <>
      <div id="rules" className="background aboutImg" style={{backgroundImage: `url(${image})`}}>
        <section className="block block__rules">
          <div className="rules__header flex__standart">
            <h2>Как это работает</h2>
            <button type="button" className="transp__button onBlack">Узнать больше</button>
          </div> 
          <ul className="prosList flex__standart">
            {pros.map((item) => <ListItem className="list__item flex__column" key={item.name}>
              <span className={`pro__item flex__center ${item.name}`}></span>
              <p className="text center">{item.text}</p>
            </ListItem>)}
          </ul>
        </section>
      </div>
    </>
  )
}