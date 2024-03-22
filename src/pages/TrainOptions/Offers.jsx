import { object } from "prop-types"
import OffersHeader from "./OffersHeader"
import List from "../../models/List"
import Train from "../../components/items/Train";

export default function Offers({ data }) {
  if (data.items.length === 0) {
    console.log ('nothing found')
  } 

  return (
    <div className="offers offers__trains">
      <OffersHeader count={data.items.length}/>
      {data.items.length > 0 ? <List className="offers__list">
        {data.items.map((item) => <Train key={item.id} item={item} />)}
      </List> : <div className="nothingFound">Извините, ничего не найдено</div>}
    </div>
  )
}

Offers.propTypes = {
  data: object,
}