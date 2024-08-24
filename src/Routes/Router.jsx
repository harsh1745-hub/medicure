import React from "react"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Service from "../pages/Service"
import Contact from "../pages/Contact"





import{Routes,Route} from 'react-router-dom'
 
import Signup from '../pages/Signup'
import Doctor from "../pages/Doctor/Doctor"
import Doctordetails from "../pages/Doctor/Doctordetails"


function Router() {

  return (
   
    <Routes>
       <Route path="/" element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/register' element={<Signup/>}/>
       <Route path='/doctors' element={<Doctor/>}/>
      <Route path='/doctors/:id' element={Doctordetails}/>
      
      
      
      
      
      
      

    </Routes>
   
  )
}


export default Router