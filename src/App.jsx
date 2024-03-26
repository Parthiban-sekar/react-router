import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import NavBar from './NavBar'
import FullStackDevelopment from './FullStackDevelopment'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UiUx from './UiUx'
import Career from './Career'



function App() {
  return (
<>
<BrowserRouter>
<NavBar/>
<Routes>
  <Route path='/uiux' element={<UiUx/>}></Route>
  <Route path='/dataScience' element={<DataScience/>} ></Route>
  <Route path='/cyberSecurity' element={<CyberSecurity/>} ></Route>
  <Route path='/fullstackdevelopment' element={<FullStackDevelopment/>} ></Route>
  <Route path='/career' element={<Career/>} ></Route>
</Routes>
</BrowserRouter>
</>  

  )
}

export default App
