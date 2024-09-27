import React from 'react'
import heroImg01 from '../assests/image/hero-img01.png'
import icon01 from  "../assests/image/icon01.png"
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs' 
import About from './About';

import feautreImg from './../assests/image/feature-img.png'
import videoImg from './../assests/image/video-icon.png'
import avatarImg from './../assests/image/avatar-icon.png';
import DoctorsList from '../Componenets/Doctors/DoctorsList'
import faqImg from './../assests/image/faq-img.png'
import FaqList from '../Componenets/Faqs/FaqList'
import Testimonal from '../Componenets/Testimonal/Testimonal'

import FeaturesSection from '../Componenets/Feautre/Feautre'
import MedicalServicesSection from '../Componenets/Medicalservices/MedicalServices'
import Schedule from '../Componenets/Appointment/Schedule'
import Faq from '../Componenets/FaqData/Faq'
import Linechart from '../Componenets/Linechart/Linechart'


       

function Home() {
  return(
         <>
             <section className='hero_section'>
<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
  <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
     <img className=''
     src={heroImg01} alt='logo'/>
   </div>
  <div className="lg:py-24">
    <h2 className="text-3xl font-bold sm:text-4xl">Your Health,Our Prority</h2>
    <p className="mt-7 text-gray-600 font-bold">
    Transform your health journey with our cutting-edge healthcare platform. Whether you need a virtual consultation, access to your medical records, or tailored health recommendations, we’ve got you covered. With our AI-powered insights and IoT integration, you can take control of your health like never before. Join us and embrace a healthier future today!
    </p>
      <button className=' mt-5 btn'>GET STARTED TODAY</button>
                    </div>
                     </div>
                        
                    </div>
                     </section>
                       <FeaturesSection/>
                     
                         
                           <section>
                            
                              <MedicalServicesSection/>
                              <Schedule/>
                              
                           </section>
                       {/*  Feature sectIon* */}
                       
                       {/*   Feature  sectionEnd* */}
                       {/*===============Doctor Section========== */}
                       <section>
                        
                       <div className='container'>
                          <div className='xl:w-[470px] mx-auto'>
                              <h2 className='heading text-center '>Our Great Doctors</h2>
                                  <p className='text_para text-center'>World-class care For Everone ,our Health System unmatched,expert Health care</p>
                                    </div>
                                      <DoctorsList/>
                                      </div>
                                      </section>
                       {/*===============Doctor Section End========== */}
                             <section>
                              <div className='container'>
                                <div className='flex justify-between gap-[50px] lg:gap-0 items-center'>
                                  
                                  <div className='w-1/2 hidden md:block '><img src={faqImg}/></div>
                                </div>
                                <div className='w-full md:w-1/2'>
                                  <h2 className='heading'>Most Question questions Asked by our beloved patients</h2>

                                  <Faq/>
                                </div>
                     
                              </div>
                             </section> 
                                     {/*===============Testimonal========== */}
                                        <section>
                                        <div className='container'>
                                            <div className='xl:w-[470px] mx-auto'>
                                                <h2 className='heading text-center '>What our Patient Say</h2>
                                                <p className='text_para text-center'>World-class care For Everone ,our Health System unmatched,expert Health care</p>
                                                               </div>
                                                               <Testimonal/>
                                                                </div>
                                                                  </section>
                                    
                                       {/*===============Testimonal End========== */}
                                       
                       

                       
         
         
         </>
  );

}  
                         
          export default Home                
                         
                         
                         
                         
                         
            
            
            
            
            
            
            
            
            
            
                         
   
   

     


