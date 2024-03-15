import About from "./About"
import Feedback from "./Feedback"
import Rules from "./Rules"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import "./main.css"

export default function Main() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash.length > 0) {
      const hash = location.hash.slice(1);
      document.getElementById(hash)?.scrollIntoView();
    }
  }, []);

  return (
    <>
      <About />
      <Rules />
      <Feedback />
      <div className="temporary">
        <Link className="link" to={'/seats'}>seats</Link>
        <Link className="link" to={'/passengers'}>passengers</Link>
        <Link className="link" to={'/payment'}>payment</Link>
        <Link className="link" to={'/accept'}>accept</Link>
        <Link className="link" to={'/confirm'}>confirm</Link>
      </div>
    </>
  )
}
