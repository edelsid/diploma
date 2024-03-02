export default function VagonType({ item }) {
  const {type, count, price} = item;

  return (
    <li className="vagon__desc">
      <p className="city">{type}</p>
      <p className="city orange">{count}</p>
      <div className="price price__vagon">
        <p className="grey">от</p>
        <p className="bold big">{price}</p>
        <h3 className="grey normal big">Р</h3>
      </div>
    </li>
  )
}
