import React from 'react'
import heroImg01 from '../assests/image/hero-img01.png'
import icon01 from  "../assests/image/icon01.png"
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs' 
import About from './About';
import ServicesList from '../Componenets/ServicesList/ServicesList'
import feautreImg from './../assests/image/feature-img.png'
import videoImg from './../assests/image/video-icon.png'
import avatarImg from './../assests/image/avatar-icon.png';
import DoctorsList from '../Componenets/Doctors/DoctorsList'
import faqImg from './../assests/image/faq-img.png'
import FaqList from '../Componenets/Faqs/FaqList'
import Testimonal from '../Componenets/Testimonal/Testimonal'
import Footer from '../Componenets/Footer/Footer'


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
    <h2 className="text-3xl font-bold sm:text-4xl">We Help a Patience to Live Longer and Healthy Life</h2>
    <p className="mt-4 text-gray-600 font-bold">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias nam iusto dicta, maxime ducimus vitae. Fugiat placeat sit recusandae, itaque officia aliquid nisi, nulla, praesentium tempora facilis deleniti sunt.
    </p>
      <button className='btn'>Search For  a appointment</button>
                    </div>
                     </div>
        
                    </div>
                     </section>
                      <section>
                        <div className='container'>
                          <div className='lg:w-[750px] mx-auto'>
                           <h2 className='heading text-center'>Providing The Best Medical Service</h2>
                           <p className='text_para text-centre'> World class care For Everyone,our Health System unmatched offer and Health Care</p>
                           
                          </div>
                          
                           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]  mt-[30px] lg:mt-[55px]'>
                            <div className='py-[30px] px-5'>
                            <div className='flex items-center justify-center'>
                              <img className=''src={icon01}/>
                            </div>
                             <div className='mt-[30px]'>
                              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
                              <p className='text-[] leading-7 text-textColor font-[400] mt-4 text-centre'>World Class Care For Everyone .Our Health system offers unmatched Expert Health Care .From The Lab To the Clinic.</p>
                                <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border border-solid border-black mt-[30px] mx-auto items-centre justify-center group hover:bg-primaryColor hover:border-none'>
                                <BsArrowRight className='group hover:text-white w-12 h-5'/>
                                </Link>
                             </div>
                             </div>
                           </div>
                        </div>
                      </section>
                       
                         <About/>
                           <section>
                             <div className='container'>
                              <div className='xl:w-[470px] mx-auto'>
                                <h2 className='heading text-center '>Our Medical Services</h2>
                                <p className='text_para text-center'>World-class care For Everone ,our Health System unmatched,expert Health care</p>
                              </div>
                              <ServicesList/>
                             </div>
                           </section>
                       {/*  Feature sectIon* */}
                       <section>
                          <div className='container'>
                            <div className='flex items-center justify-between flex-col lg:flex-row'>
                              {/* feautre content* */}
                              <div className='xl:w-[670px]'>
                                <h2 className='heading'>Get Virtual Treatment <br></br>Anytime</h2>
                                <ul className='pl-4'>
                                  <li className='text_para'>1.Schedule The appointment Directly.</li>
                                  <li className='text_para'>2.Search your Physician Here ,and Contact Their Office Directly</li>
                                  <li className='text_para'>3.View our Physician who are accepting new patient ,use the online scheduling tool to select an appointment</li>
                                </ul>
                                <Link to='/'><button className='btn'>Learn More</button>
                                </Link>
                              </div>
                                {/* Feautre Image* */}
                                <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px]  lg:mt-0'>
                                  <img src={feautreImg} className='w-3/4 ' alt=''/>
                                  <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                                    <div className='flex items-center gap-[6px] lg:gap-3'>
                                      <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>Tue,24</p>
                                      <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]'>10:00AM</p>
                                    </div>
                                       <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                                        <img src={videoImg}/>
                                       </span>
                                        <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
                                          Consultation
                                        </div>
                                        <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[10px]'>
                                          <img src={avatarImg} alt=''/>
                                          <h4 className='text-[10px] leading-3 lg:text-[16px]  font-[400]'>Wayne Collison</h4>
                                        </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                       </section>
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
                                <div className='flex justify-between gap-[50px] lg:gap-0'>
                                  
                                  <div className='w-1/2 hidden md:block '><img src={faqImg}/></div>
                                </div>
                                <div className='w-full md:w-1/2'>
                                  <h2 className='heading'>Most Question questions Asked by our beloved patients</h2>

                                  <FaqList/>
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
                         
                         
                         
                         
                         
            
            
            
            
            
            
            
            
            
            
                         
   
   

     


