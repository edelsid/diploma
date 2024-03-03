import ProgressCell from '../../items/ProgressCell'

export default function ProgressBar({ phase }) {
  const menu = ['Билеты', 'Пассажиры', 'Оплата', 'Проверка'];

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
