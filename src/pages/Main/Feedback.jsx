import { useSelector } from "react-redux";
import ListItem from "../../components/items/ListItem";

export default function Feedback() {
  const feedback = useSelector(state => state.site.feedback);

  return (
    <section id="feedback" className="block block__feedback">
      <h2>Отзывы</h2>
      <ul className="feedbackList">
        {feedback.map((item) => <ListItem key={feedback.indexOf(item)} className="feedback__item">
          <span className="portrait" style={{backgroundImage: `url(${item.portrait})`}}></span>
          <div className="feedback__data">
            <h4>{item.name}</h4>
            <p className="text faint citation">{item.text}</p>
          </div>
        </ListItem>)}
      </ul>
      <div className="indicators">
        <button className="indicator"></button>
        <button className="indicator"></button>
      </div>
    </section>
  )
}
