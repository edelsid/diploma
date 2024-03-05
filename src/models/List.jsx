import { arrayOf, element, object, string, oneOfType } from "prop-types"

export default function List({ className, children }) {
  return (
    <ul className={className}>
      {children}
    </ul>
  )
}

List.propTypes = {
  className: string,
  children: oneOfType([
    arrayOf(element),
    object,
  ]),
}