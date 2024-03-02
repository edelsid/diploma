import List from "../../../models/List"
import Service from "../../items/Service"

export default function Services() {
  const services = ['Купе', 'Плацкарт', 'Сидящий', 'Люкс', 'Wi-Fi', 'Экспресс'];

  return (
    <aside className="parameters parameters__service"> 
      <List className={"services"}>
        {services.map((item) => <Service key={services.indexOf(item)} name={item} />)}
      </List>
    </aside>
  )
}
