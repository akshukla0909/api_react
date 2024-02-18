import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmployeeDetails from './components/EmployeeDetails'
import EmployeeDashboard from './components/EmployeeDashboard'
import AllEmployee from './context/AllEmployee'

const App = () => {
  return (
    <AllEmployee>
    <Routes>
    <Route path="/" element={<EmployeeDashboard/>} />
    <Route path="/employee/:id" element={<EmployeeDetails/> } />
   </Routes>
    </AllEmployee>
  )
}

export default App