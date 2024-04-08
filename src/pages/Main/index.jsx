import About from "./About"
import Feedback from "./Feedback"
import Rules from "./Rules"
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
    </>
  )
}
