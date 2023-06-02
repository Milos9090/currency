import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Currency from './components/Currency'
import Login from './components/Login'
import Currencies from './components/Currencies'
import EditCurrency from './components/EditCurrency'

function App() {  
  return <>
   <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/index" element={<Currencies />} />
        <Route path="/:id" >
          <Route index element={<Currency />} />
          <Route path="edit" element={<EditCurrency />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      </>
}

export default App
