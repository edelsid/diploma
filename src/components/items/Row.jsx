import { number, string } from "prop-types"

export default function Row({ name, value }) {
  return (
    <div className="px22">
      <p>{name}</p>
      <p className="bold">{value}</p>
    </div>
  )
}

Row.propTypes = {
  name: string,
  value: number,
}