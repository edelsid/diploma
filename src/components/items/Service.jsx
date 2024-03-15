import { object } from "prop-types"

export default function Service({ item }) {
  return (
    <li className="service flex__standart vagon">
      <div className="name">
        <img className="icon lightGreyIcon" src={item.img}></img>
        <p>{item.displayName}</p>
      </div>
      <label className="switch">
        <input type="checkbox"></input>
        <span className="slider round"></span>
      </label>
    </li>
  )
}

Service.propTypes = {
  item: object,
}