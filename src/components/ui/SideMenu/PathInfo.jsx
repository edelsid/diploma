import { element, string } from "prop-types"

export default function PathInfo({ name, arrow, date }) {

  return (
    <aside className="parameters parameters__info">
      <div className="wayWrapper">
        <div className="nameWrapper">
          <button type="button" className="wayBtn">{arrow}</button>
          <h4 className="way">{name}</h4>
          <p className="small">{date}</p>
        </div>
        <button type="button" className="openBtn">-</button>
      </div>
      <div className="way__desc">Description</div>
    </aside>
  )
}

PathInfo.propTypes = {
  name: string,
  arrow: element,
  date: string
}