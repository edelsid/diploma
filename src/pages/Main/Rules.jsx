import image from "../../assets/image.png"
import ListItem from '../../components/items/ListItem'
import { useSelector } from "react-redux"

export default function Rules() {
  const pros = useSelector(state => state.site.pros);

  return (
    <>
      <div id="rules" className="background aboutImg" style={{backgroundImage: `url(${image})`}}>
        <section className="block block__rules">
          <div className="rules__header">
            <h2>Как это работает</h2>
            <button type="button" className="moreButton transparent">Узнать больше</button>
          </div> 
          <ul className="prosList">
            {pros.map((item) => <ListItem className={'list__item'} key={item.name}>
              <span className={`pro__item ${item.name}`}></span>
              <p className="text center">{item.text}</p>
            </ListItem>)}
          </ul>
        </section>
      </div>
    </>
  )
}
