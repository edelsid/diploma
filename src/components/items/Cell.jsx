import { bool, func, number } from "prop-types";

export default function Cell({ prop, passed, active, callback }) {
  const chooseDay = () => {
    if (!passed) callback(prop);
  }

  return (
    <div className={`cell ${active ? 'active' : ''} ${passed ? 'passed' : ''}`} onClick={chooseDay}>{prop}</div>
  )
}

Cell.propTypes = {
  prop: number,
  active: bool,
  callback: func,
  passed: bool,
}