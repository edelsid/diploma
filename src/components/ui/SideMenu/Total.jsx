import { object } from "prop-types";
import { useMemo } from "react";
import countSum from "../../../utils/countSum";

export default function Total({ seats, services }) {
  const totalSum = useMemo(() => {
    return countSum(seats) + countSum(services)
  }, [seats, services]);

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