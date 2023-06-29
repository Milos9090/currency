import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Currency from './components/Currency/Currency'
import Login from './components/Login/Login'
import Currencies from './components/Currencies/Currencies'
import AddCurrency from './components/AddCurrency/AddCurrency'

function App() {  
  return <>
   <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/index" element={<Currencies />} />
        <Route path="/:id" >
          <Route index element={<Currency />} />
          <Route path="edit" element={<AddCurrency />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      </>
}

export default App
