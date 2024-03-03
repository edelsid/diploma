import OffersHeader from "./OffersHeader"
import List from "../../models/List"
import Train from "../../components/items/Train";

export default function Offers({ data }) {
  if (data.items.length > 0) {
    console.log (data)
  } else console.log('nothing found')
  //выделить отдельные стили для кнопок и т.д.

  return (
    <div className="offers">
      <OffersHeader count={data.items.length}/>
      <List className="offers__list">
        {data.items.map((item) => <Train key={item.id} item={item} />)}
      </List>
    </div>
  )
}