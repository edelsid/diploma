import List from "../../../models/List"
import Service from "../../items/Service"
import { useSelector, useDispatch } from "react-redux";
import { changeFilters } from "../../../store/site";

export default function Services() {
  const dispatch = useDispatch();
  const services = useSelector(state => state.root.site.services);
  const sideServices = services.filter(item => item.name !== "cond" && item.name !== "food" && item.name !== "bed");

  const handleClick = (value) => {
    dispatch(changeFilters(value));
  };

  return (
    <aside className="parameters parameters__service"> 
      <List className={"services"}>
        {sideServices.map((item) => <Service key={services.indexOf(item)} item={item} handleClick={handleClick}/>)}
      </List>
    </aside>
  )
}
