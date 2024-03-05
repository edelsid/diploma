import { arrayOf, element, string } from "prop-types"
import main from "../../../assets/main.png"
import main_1 from "../../../assets/main_1.png"
import confirm from "../../../assets/confirm.png"

export default function IntroImg({ children, loc }) {
  let imgPath = main_1;
  const imgLoc = [{
    loc: '/',
    adress: main,
  }, {
    loc: '/confirm',
    adress: confirm,
  }];
  imgLoc.forEach((item) => {
    if (item.loc === loc) imgPath = item.adress;
  })
  
  return (
    <div className={`background ${loc === '/' || loc === '/confirm' ? 'introImg' : 'mainImg'}`} style={{backgroundImage: `url(${imgPath})`}}>
      {children}
    </div>
  )
}

IntroImg.propTypes = {
  children: arrayOf(element),
  loc: string,
}
