import { number } from "prop-types";

export default function OffersHeader({ count }) {
  const filters = [5, 10, 20];

  return (
    <div className="offers__header flex__standart">
      <p className="px16 grey">найдено {count}</p>
      <div className="filters flex__standart">
        <label className="select__time flex__standart px16 grey">сортировать по:
          <select className="header__select">
            <option value="time__filter">времени</option>
            <option value="price__filter">стоимости</option>
            <option value="length__filter">длительности</option>
          </select>
        </label>
        <label className="select__number flex__standart px16 grey">показывать по:
          {filters.map((item) => <p className="px16" key={item} id={item}>{item}</p>)}
        </label>
      </div>
    </div>
  )
}

OffersHeader.propTypes = {
  count: number,
}