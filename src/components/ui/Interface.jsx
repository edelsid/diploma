import { object } from "prop-types"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

export default function Interface({ children }) {

  return (
    <>
      <Header></Header>
      <main className="container">
        {children}
      </main>
      <Footer></Footer>
      </>
  )
}

Interface.propTypes = {
  children: object,
}
