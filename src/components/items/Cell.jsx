export default function Cell({ prop, active, callback }) {
  const chooseDay = () => {
    callback(prop);
  }

  return (
    <div className={`cell ${active ? 'active' : ''}`} onClick={chooseDay}>{prop}</div>
  )
}