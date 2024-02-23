import { arrayOf, element } from "prop-types"
import main from "../../../assets/main.png"

export default function IntroImg({ children }) {
  return (
    <div className="background introImg" style={{backgroundImage: `url(${main})`}}>
      {children}
    </div>
  )
}

IntroImg.propTypes = {
  children: arrayOf(element),
}
