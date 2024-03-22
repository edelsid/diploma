import { arrayOf, element, object, string, oneOfType, node } from "prop-types"

export default function Div({ className, children }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

Div.propTypes = {
  className: string,
  children: oneOfType([
    arrayOf(element),
    object,
    element,
    node,
  ]),
}
