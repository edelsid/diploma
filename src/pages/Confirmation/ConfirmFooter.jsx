import List from "../../models/List"

export default function ConfirmFooter() {
  const stars = Array.from({length: 5}, (_, i) => i+1);

  return (
    <div className="confirm__panel__footer flex__standart">
      <div className="rating flex__standart">
        <p>Оценить сервис</p>
        <List className="rating__symbols">
          {stars.map((item) => <span key={stars.indexOf(item)}>&#10032;</span>)}
        </List>
      </div>
      <button className="button__transp narrow__black">Вернуться на главную</button>
    </div>
  )
}
