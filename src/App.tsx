import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Currency from './components/Currency/Currency'
import Login from './components/Login/Login'
import Currencies from './components/Currencies/Currencies'

function App() {  
  return <>
   <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/index" element={<Currencies page="index"/>} />
        <Route path="/add" element={<Currencies page="add"/>} />
        <Route path="/:id" >
          <Route index element={<Currencies page="index" />} />
          <Route path="edit" element={<Currencies page="edit"/>} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      </>
}

export default App
