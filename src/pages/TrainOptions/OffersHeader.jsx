import { number } from "prop-types";

export default function OffersHeader({ count }) {
  const filters = [5, 10, 20];

  return (
    <div className="offers__header">
      <p className="small grey">найдено {count}</p>
      <div className="filters">
        <label className="select__time small grey">сортировать по:
          <select>
            <option value="time__filter">времени</option>
            <option value="price__filter">стоимости</option>
            <option value="length__filter">длительности</option>
          </select>
        </label>
        <label className="select__number small grey">показывать по:
          {filters.map((item) => <p className="small" key={item} id={item}>{item}</p>)}
        </label>
      </div>
    </div>
  )
}

OffersHeader.propTypes = {
  count: number,
}