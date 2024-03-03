export default function Service({ item }) {
  return (
    <li className="service vagon">
      <p className={`name ${item.class}`}>{item.name}</p>
      <label className="switch">
        <input type="checkbox"></input>
        <span className="slider round"></span>
      </label>
    </li>
  )
}
