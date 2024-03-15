import List from "../../../models/List"
import Service from "../../items/Service"
import { useSelector } from "react-redux";

export default function Services() {
  const services = useSelector(state => state.root.site.services);
  const sideServices = services.filter(item => item.name !== "cond" && item.name !== "food" && item.name !== "bed");

  return (
    <aside className="parameters parameters__service"> 
      <List className={"services"}>
        {sideServices.map((item) => <Service key={services.indexOf(item)} item={item}/>)}
      </List>
    </aside>
  )
}
