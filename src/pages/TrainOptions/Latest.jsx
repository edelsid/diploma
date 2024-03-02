import List from "../../models/List"
import LatestRide from "../../components/items/LatestRide"

export default function Latest() {
  const latestTickets = [{
    from: {
      city: 'Санкт-Петербург',
      station: 'Курский вокзал',
    },
    back: {
      city: 'Самара',
      station: 'Московский вокзал',
    },
    services: ['1', '2', '3'],
    price: '2 500',
  }];

  //css причесать и сравнить с фигмой
  return (
    <div className="latestTickets">
      <h3 className="title">Последние билеты</h3>
      <List className="ticketList">
        {latestTickets.map((item) => <LatestRide key={latestTickets.indexOf(item)} item={item}/>)}
      </List>
    </div>
  )
}
