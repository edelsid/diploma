import { element, string } from "prop-types"
import WayDescription from "./WayDescription";

export default function PathInfo({ name, arrow, date }) {
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

  return (
    <aside className="parameters parameters__info">
      <div className="directionWrapper flex__standart">
        <div className="nameWrapper flex">
          <button type="button" className="button__way">{arrow}</button>
          <h4>{name}</h4>
          <p className="px16">{date}</p>
        </div>
        <button type="button" className="openBtn flex__center">-</button>
      </div>
      <WayDescription train={train} arrow={arrow}/>
    </aside>
  )
}

PathInfo.propTypes = {
  name: string,
  arrow: element,
  date: string
}