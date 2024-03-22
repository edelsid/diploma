import Interface from './components/ui/Interface'
import Main from './pages/Main/index'
import Accept from './pages/Accept/index'
import Confirmation from './pages/Confirmation/index'
import TrainOptions from './pages/TrainOptions/index'
import SeatOptions from './pages/SeatOptions/index'
import Payment from './pages/Payment/index'
import Passengers from './pages/Passengers/index'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Interface>
      <Routes>
        <Route path="/" exact element={<Main/>} />
        <Route path="/accept" exact element={<Accept/>} />
        <Route path="/confirm" exact element={<Confirmation/>} />
        <Route path="/routes" exact element={<TrainOptions/>} />
        <Route path="/routes/:id/seats" exact element={<SeatOptions/>} />
        <Route path="/passengers" exact element={<Passengers/>} />
        <Route path="/payment" exact element={<Payment/>} />
      </Routes>
    </Interface>
  )
}

export default App
