import { object } from "prop-types";

export default function Total({ seats, services }) {
  const getTotal = (sum, values) => {
    Object.values(values).forEach((value) => {
      value.forEach(item => sum = sum + item.cost);
    });
    return sum;
  };

  const totalSum = getTotal(0, seats) + getTotal(0, services);

  return (
    <aside className="parameters parameters__total">
      <div className="flex__standart">
        <h3 className="upper">Итог</h3>
        <div className="price flex">
          <h2 className="orange bold">{totalSum}</h2>
          <h2 className="medium grey">&#x20bd;</h2>
        </div>
      </div>
    </aside>
  )
}

Total.propTypes = {
  seats: object,
  services: object,
}