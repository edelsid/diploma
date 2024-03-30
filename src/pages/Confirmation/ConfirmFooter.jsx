import List from "../../models/List"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAll } from "../../store/order";

export default function ConfirmFooter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stars = Array.from({length: 5}, (_, i) => i+1);

  const toMain = (e) => {
    e.preventDefault();
    navigate('/' + '/');
    dispatch(clearAll());
    window.scrollTo(0, 0);
  };

  return (
    <div className="confirm__panel__footer flex__standart">
      <div className="rating flex__standart">
        <p>Оценить сервис</p>
        <List className="rating__symbols">
          {stars.map((item) => <span key={stars.indexOf(item)}>&#10032;</span>)}
        </List>
      </div>
      <button className="button__transp narrow__black" onClick={toMain}>Вернуться на главную</button>
    </div>
  )
}
