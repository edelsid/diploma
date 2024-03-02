import ProgressCell from '../../items/ProgressCell'
import { useState } from 'react'

export default function ProgressBar() {
  const menu = ['Билеты', 'Пассажиры', 'Оплата', 'Проверка'];
  const [phase, setPhase] = useState(1);

  return (
    <div className='progressBar'>
      <div className='progressCells'>
        <div className='margin' style={{backgroundColor: '#FFA800'}}></div>
        {menu.map((item) => <ProgressCell key={menu.indexOf(item)} item={item} phase={phase} count={menu.indexOf(item) + 1} length={menu.length}></ProgressCell>)}
        <div className='margin' style={{backgroundColor: `${phase === menu.length && '#FFA800'}`}}></div>
      </div>
    </div>
  )
}
