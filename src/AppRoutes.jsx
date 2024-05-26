import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './page/Homepage/Homepage.jsx'

const AppRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Homepage/>}/>
   </Routes>
  )
}

export default AppRoutes
