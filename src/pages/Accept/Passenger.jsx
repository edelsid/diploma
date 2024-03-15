import person from "../../assets/icons/person.png"

export default function Passenger() {
  return (
    <li className="passenger flex">
      <div className="passenger__icon__wrapper flex__column">
        <img className="passenger__icon" src={person} />
        <p className="px18">Взрослый</p>
      </div>
      <div className="passenger__info__wrapper flex">
        <p className="px18">Фамилия Имя Отчество</p>
        <p className="px18 grey">Пол женский</p>
        <p className="px18 grey">Дата рождения 17.02.1995</p>
        <p className="px18 grey">Паспорт РФ 0000 000000</p>
      </div>
    </li>
  )
}
