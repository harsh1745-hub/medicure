import React from "react"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Contact from "../pages/Contact"
import {Routes,Route} from 'react-router-dom'
 import Signup from '../pages/Signup'
import Doctor from "../pages/Doctor/Doctor"
import Doctordetails from "../pages/Doctor/Doctordetails"
import MedicalServicesSection from "../Componenets/Medicalservices/MedicalServices"
import ServiceDetails from "../pages/Service"
import AIDiagnosisSection from "../pages/AIDiagnosisSection"
import Ai from "../pages/Ai"
import IotIntegration from "../Componenets/IOT/IotIntegration"
import Wearable from "../Componenets/Wearable/Wearable"
import Dashboard from "../Componenets/Dashboard/Dashboard"
import Linechart from "../Componenets/Linechart/Linechart"
import Mental from "../Componenets/Mentalhealth/Mental"





function Router() {

  return (
   
    <Routes>
       <Route path="/" element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/service' element={<MedicalServicesSection/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/register' element={<Signup/>}/>
       <Route path='/doctors' element={<Doctor/>}/>
      <Route path='/doctors/:id' element={<Doctordetails/>}/>
      <Route path='/doctors' element={<ServiceDetails/>}/>
      <Route path="/medical" element={<AIDiagnosisSection/>}/>
      <Route path='/ai' element={<Ai/>}/>
      <Route path='/Iot-integration' element={<IotIntegration/>}/>
      <Route path='/wearable' element={<Wearable/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/chronic' element={<Linechart/>}/>
      <Route path="/mental" element={<Mental/>}/>
      


      
      
      
      
      
      
      

    </Routes>
   
  )
}


export default Router