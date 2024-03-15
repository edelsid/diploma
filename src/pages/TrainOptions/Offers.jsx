import { object } from "prop-types"
import OffersHeader from "./OffersHeader"
import List from "../../models/List"
import Train from "../../components/items/Train";

export default function Offers({ data }) {
  if (data.items.length > 0) {
    console.log (data)
  } else console.log('nothing found')

  return (
    <div className="offers offers__trains">
      <OffersHeader count={data.items.length}/>
      <List className="offers__list">
        {data.items.map((item) => <Train key={item.id} item={item} />)}
      </List>
    </div>
  )
}

Offers.propTypes = {
  data: object,
}