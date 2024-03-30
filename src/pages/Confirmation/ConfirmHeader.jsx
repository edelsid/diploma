import { number, string } from "prop-types"

export default function ConfirmHeader({ id, totalSum }) {
  return (
    <div className="confirm__panel__header border__btm flex__standart">
      <h3>№ Заказа {id}</h3>
      <div className="price flex">
        <h4 className="grey medium">сумма</h4>
        <h3>{totalSum}</h3>
        <h3 className="grey medium">&#x20BD;</h3>
      </div>
    </div>
  )
}

ConfirmHeader.propTypes = {
  id: string,
  totalSum: number,
}