import { number, string, arrayOf, element, object, bool, oneOfType, node } from "prop-types"
import Div from "../../models/Div"

export default function Column({ name, total, children }) {

  return (
    <Div className="grid__col flex">
      <div>
        <p className="px16 grey">{name}</p>
        {total && <p className="px16">{total}</p>}
      </div>
      <>
        {children}
      </>
    </Div>
  )
}

Column.propTypes = {
  name: string,
  total: number,
  children: oneOfType([
    arrayOf(element),
    object,
    element,
    bool,
    node,
  ]),
}