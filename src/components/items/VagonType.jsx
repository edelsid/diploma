import { object, array } from "prop-types";

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
      <p className="px16">{name}</p>
      <p className="px16 orange">{item[1]}</p>
      <div className="price price__vagon flex__standart">
        <p className="grey">от</p>
        <h4>{price}</h4>
        <h4 className="grey medium">Р</h4>
      </div>
    </li>
  )
}

VagonType.propTypes = {
  item: array,
  prices: object,
}