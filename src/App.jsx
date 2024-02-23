import Interface from './components/ui/Interface'
import Main from './pages/Main/index'
import Accept from './pages/Accept/index'
import Confirmation from './pages/Confirmation/index'
import Options from './pages/Options/index'
import Payment from './pages/Payment/index'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Interface>
      <Routes>
        <Route path="/" exact element={<Main/>} />
        <Route path="/accept" exact element={<Accept/>} />
        <Route path="/confirm" exact element={<Confirmation/>} />
        <Route path="/options" exact element={<Options/>} />
        <Route path="/payment" exact element={<Payment/>} />
      </Routes>
    </Interface>
  )
}

export default App
