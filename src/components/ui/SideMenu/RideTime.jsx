export default function RideTime({ name, arrow }) {
  return (
    <aside className="parameters parameters__way">
      <div className="wayWrapper">
        <div className="nameWrapper">
          <button type="button" className="wayBtn">{arrow}</button>
          <h4 className="way">{name}</h4>
        </div>
        <button type="button" className="openBtn">+</button>
      </div>
    </aside>
  )
}
