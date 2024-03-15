import { number } from "prop-types"

export default function PriceRow({ value }) {
  return (
    <div className="px22">
      <p className="bold">{ value }</p>
      <p className="grey">Р</p>
    </div>
  )
}

PriceRow.propTypes = {
  value: number,
}