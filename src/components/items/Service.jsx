export default function Service({ name }) {
  return (
    <li className="service vagon">
      <p className="name">{name}</p>
      <label className="switch">
        <input type="checkbox"></input>
        <span className="slider round"></span>
      </label>
    </li>
  )
}
