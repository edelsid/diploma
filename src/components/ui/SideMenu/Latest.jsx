import List from "../../../models/List"
import LatestRide from "../../items/LatestRide"

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
    services: [{
      name: "wifi",
      status: true,
    }, {
      name: "express",
      status: true,
    }, {
      name: "air_cond",
      status: true,
    }],
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
