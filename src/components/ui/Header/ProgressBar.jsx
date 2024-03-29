import { number } from "prop-types"
import ProgressCell from '../../items/ProgressCell'
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function ProgressBar({ }) {
  const location = useLocation();
  const path = location.pathname;
  const locTable = useSelector(state => state.root.site.locTable);
  const menu = ['Билеты', 'Пассажиры', 'Оплата', 'Проверка'];
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    locTable.forEach((item) => {
      if (item.loc === path) setPhase(item.count);
    });
  }, [path]);

  return (
    <div className='progressBar'>
      <div className='progressCells flex'>
        <div className='margin' style={{backgroundColor: '#FFA800'}}></div>
        {menu.map((item) => <ProgressCell key={menu.indexOf(item)} item={item} phase={phase} count={menu.indexOf(item) + 1} length={menu.length}></ProgressCell>)}
        <div className='margin' style={{backgroundColor: `${phase === menu.length && '#FFA800'}`}}></div>
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  phase: number,
}
