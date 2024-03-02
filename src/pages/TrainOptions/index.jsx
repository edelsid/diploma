import SideMenu from "../../components/ui/SideMenu/SideMenu"
import Latest from "./Latest"
import Offers from "./Offers"
import "./options.css"

export default function TrainOptions() {
  return (
    <section className="table">
      <div className="column">
        <SideMenu />
        <Latest />
      </div>
      <div className="column">
        <Offers />
      </div>
    </section>
  )
}