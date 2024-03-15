import { object } from "prop-types";

export default function Step({ item }) {
  const { img, text } = item;
  return (
    <li className="step center">
      <img className="step__img" src={img}></img>
      <p className="px16">{text}</p>
    </li>
  )
}

Step.propTypes = {
  item: object,
}