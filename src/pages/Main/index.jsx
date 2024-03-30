import About from "./About"
import Feedback from "./Feedback"
import Rules from "./Rules"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import "./main.css"

export default function Main() {
  const state = useSelector(state => state.root.order);
  const location = useLocation();

  console.log(state);

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
