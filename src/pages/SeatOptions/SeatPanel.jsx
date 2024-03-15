import { useState } from "react";
import List from "../../models/List";
import TrainDesc from "./TrainDesc"
import SeatType from "./SeatType";
import VagonOverview from "./VagonOverview";

export default function SeatPanel() {
  const [open, setOpen] = useState(false);

  const train = {
    index: "116C",
    count: 'с головы',
    passed: 'Адлер',
    from: {
      city: {
        name: 'Москва'
      },
      railway_station_name: 'Курский',
      datetime: 73400000
    },
    to: {
      city: {
        name: 'Санкт-Петербург'
      },
      railway_station_name: 'Ладожский',
      datetime: 33400000
    },
    fulltime: 32578000,
    timeString: {
      hour: 12,
      min: 2,
    },
    vagonsFirst: [{
        number: 5,
        tickets: {
          high: {
            count: 1,
            price: 3920,
          },
          low: {
            count: 3,
            price: 4530,
          },
        },
        haswifi: true,
        hascond: true,
        food: true,
        bed: true,
      }
    ],
    vagonsSec: [{
      number: 7,
      tickets: {
        high: {
          count: 3,
          price: 2920,
        },
        low: {
          count: 8,
          price: 3530,
        },
      },
      haswifi: true,
      hascond: true,
      food: true,
      bed: true,
    }, {
      number: 9,
      tickets: {
        high: {
          count: 5,
          price: 2920,
        },
        low: {
          count: 3,
          price: 3530,
        },
      },
      haswifi: true,
      hascond: true,
      food: true,
      bed: true,
    }]
  };

  const seatTypes = [{
    name: "Взрослых",
    codename: 'adult',
    count: 2,
  }, {
    name: "Детских",
    codename: 'children',
    count: 1,
  }, {
    name: `Детских "без места"`,
    codename: 'noseat',
    count: 0,
  }];

  const showSeats = (codename) => {
    console.log(codename);
    if (open) {
      setOpen(false);
      return;
    }
    setOpen(true);
  }

  return (
    <div className="panel__wrapper seat">
      <div className={`seats__panel ${open && "border__btm"}`}>
        <div className="seats__panel__header flex">
          <button className="sign bold">&rarr;</button>
          <button className="button__transp compact narrow__black">Выбрать другой поезд</button>
        </div>
        <TrainDesc train={train}/>
        <div className="seat__types age">
          <h3>Количество билетов</h3>
          <List className="type__list flex">
            {seatTypes.map((item) => <SeatType key={item.name} item={item} showSeats={showSeats}/>)}
          </List>
        </div>
      </div>
      {open && <VagonOverview />}
    </div>
  )
}
