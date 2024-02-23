import { arrayOf, string, element } from "prop-types"

export default function ListItem({ children, className }) {
  return (
    <li className={className}>
      {children}
    </li>
  )
}

ListItem.propTypes = {
  className: string,
  children: arrayOf(element),
}
