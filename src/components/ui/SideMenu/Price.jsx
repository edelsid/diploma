export default function Price() {
  return (
    <aside className="parameters parameters__price">
      <div className="slidecontainer">
        <h4 className="label normal">Стоимость</h4>
        <div className="range">
          <p>от</p>
          <p>до</p>
        </div>
        <input type="range" min="1" max="100" value="1" className="slider__large" id="myRange"></input>
        <div className="range">
          <p>1920</p>
          <p>7000</p>
        </div>
      </div>
    </aside>
  )
}
