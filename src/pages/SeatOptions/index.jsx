import SideMenu from "../../components/ui/SideMenu/SideMenu"
import Latest from "../../components/ui/SideMenu/Latest"
import SeatChoice from "./SeatChoice"
import "./options.css"

export default function SeatOptions() {
  return (
    <section className="table">
      <div className="column">
        <SideMenu />
        <Latest />
      </div>
      <div className="column">
        <SeatChoice />
      </div>
    </section>
  )
}
