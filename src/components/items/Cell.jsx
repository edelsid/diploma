import { bool, func, number } from "prop-types";

export default function Cell({ prop, active, callback }) {
  const chooseDay = () => {
    callback(prop);
  }

  return (
    <div className={`cell ${active ? 'active' : ''}`} onClick={chooseDay}>{prop}</div>
  )
}

Cell.propTypes = {
  prop: number,
  active: bool,
  callback: func,
}