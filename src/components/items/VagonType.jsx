export default function VagonType({ item, prices }) {
  let price;
  let name;
  const names = {
    first: 'Люкс',
    second: 'Купе',
    third: 'Плацкарт',
    fourth: 'Сидячий'
  };
  
  Object.entries(prices).forEach(([key, value]) => {
    if (key === item[0]) price = value.top_price;
  });
  Object.entries(names).forEach(([key, value]) => {
    if (key === item[0]) name = value;
  });

  return (
    <li className="vagon__desc">
      <p className="small">{name}</p>
      <p className="small orange">{item[1]}</p>
      <div className="price price__vagon">
        <p className="grey">от</p>
        <p className="bold big">{price}</p>
        <h3 className="grey normal big">Р</h3>
      </div>
    </li>
  )
}
