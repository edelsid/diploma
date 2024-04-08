import List from "../../models/List";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAll } from "../../store/order";

export default function ConfirmFooter() {
  const [ grade, setGrade ] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stars = Array.from({length: 5}, (_, i) => i+1);

  const toMain = (e) => {
    e.preventDefault();
    dispatch(clearAll());
    navigate('/' + '/');
    localStorage.clear();
    window.scrollTo(0, 0);
  };

  const rate = (e) => {
    setGrade(parseInt(e.target.id) + 1);
  };

  return (
    <div className="confirm__panel__footer flex__standart">
      <div className="rating flex__standart">
        <p>Оценить сервис</p>
        <List className="rating__symbols">
          {stars.map((item) => <span key={stars.indexOf(item)} id={stars.indexOf(item)} onClick={rate}>
            {stars.indexOf(item) + 1 <= grade ? <>&#9733;</> : <>&#10032;</>}
          </span>)}
        </List>
      </div>
      <button className="button__transp narrow__black" onClick={toMain}>Вернуться на главную</button>
    </div>
  )
}
