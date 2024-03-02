import { arrayOf, element } from "prop-types"
import main from "../../../assets/main.png"
import main_1 from "../../../assets/main_1.png"

export default function IntroImg({ children, loc }) {
  
  console.log(location)
  return (
    <div className={`background ${loc === '/' ? 'introImg' : 'mainImg'}`} style={{backgroundImage: `url(${loc === '/' ? main : main_1})`}}>
      {children}
    </div>
  )
}

IntroImg.propTypes = {
  children: arrayOf(element),
}
