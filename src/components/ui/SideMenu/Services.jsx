import List from "../../../models/List"
import Service from "../../items/Service"

export default function Services() {
  const services = [{
    name: 'Купе',
    class: 'sec_class'
  }, {
    name: 'Плацкарт',
    class: 'trd_class',
  }, {
    name: 'Сидящий',
    class: 'frth_class',
  }, {
    name: 'Люкс',
    class: 'frst_class',
  }, {
    name: 'Wi-Fi',
    class: 'wifi'
  }, {
    name: 'Экспресс',
    class: 'express'
  }];

  return (
    <aside className="parameters parameters__service"> 
      <List className={"services"}>
        {services.map((item) => <Service key={services.indexOf(item)} item={item} />)}
      </List>
    </aside>
  )
}
