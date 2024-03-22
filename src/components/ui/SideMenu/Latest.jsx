import List from "../../../models/List"
import LatestRide from "../../items/LatestRide"
import { useFetch } from "../../../hooks/useFetch";

export default function Latest() {
  const rawURL = import.meta.env.VITE_API_URL;
  const latestTickets = useFetch(`${rawURL}/routes/last`);

  return (
    <div className="latestTickets">
      <h3 className="upper">Последние билеты</h3>
        <List className="ticketList">
          {latestTickets.data && latestTickets.data.map((item) => <LatestRide key={latestTickets.data.indexOf(item)} item={item}/>)}
        </List>
    </div>
  )
}
