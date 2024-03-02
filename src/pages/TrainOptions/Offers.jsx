import OffersHeader from "./OffersHeader"
import List from "../../models/List"
import Train from "../../components/items/Train";

export default function Offers() {

  //выделить отдельные стили для кнопок и т.д.
  //сравнить отступы и стили с фигмой
  const offers = [{
    id: 1,
    number: '116C',
    travelsBack: true,
    fullWay: {
      passed: 'Адлер',
      from: 'Москва',
      to: 'Санкт-Петербург'
    },
    to: {
      city: 'Москва',
      station: 'Курский вокзал',
      time: '00:10',
    },
    back: {
      city: 'Санкт-Петербург',
      station: 'Ладожский вокзал',
      time: '09:52',
    },
    fullTime: '9 : 42',
    services: ['1', '2', '3'],
    vagons:  [{
      type: 'Сидячий',
      count: 88,
      price: '1 920',
    },
    {
      type: 'Плацкарт',
      count: 52,
      price: '2 538',
    },
    {
      type: 'Купе',
      count: 24,
      price: '3 820',
    },
    {
      type: 'Люкс',
      count: 15,
      price: '4 950',
    }],
  }, {
    id: 2,
    number: '020У',
    travelsBack: false,
    fullWay: {
      from: 'Москва',
      to: 'Санкт-Петербург "Мегаполис"'
    },
    to: {
      city: 'Москва',
      station: 'Ленинградский вокзал',
      time: '00:20',
    },
    back: {
      city: 'Санкт-Петербург',
      station: 'Московский вокзал',
      time: '08:59',
    },
    fullTime: '8 : 39',
    services: ['1', '2', '3'],
    vagons:  [{
      type: 'Купе',
      count: 90,
      price: '3 950',
    }, 
    {
      type: 'Люкс',
      count: 31,
      price: '4 950',
    },],
  }];

  return (
    <div className="offers">
      <OffersHeader />
      <List className="offers__list">
        {offers.map((item) => <Train key={item.id} item={item} />)}
      </List>
    </div>
  )
}