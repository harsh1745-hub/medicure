import React from 'react'
import aboutImg from '../assests/image/about.png'
import aboutCardImg from '../assests/image/about-card.png'
import { Link } from 'react-router-dom'
function About() {
  return (
    
   
      <section>
         <div className='container'>
           <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
             <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
             <img src={aboutImg}/>
             <div className='absolute z-20 bottom-4 w-[200px]  md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                <img src={aboutCardImg}/>
             </div>

             </div>
                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                  <h2 className='heading'>Proud to be the nations best</h2>
                  <p className='text_para'>For 30 years in a Row ,U.S. News& World Report has recognized us as one of the best publics hospital in the nation #1 in Texas</p>
                 
                 <p className='text_para mt-[30px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt repellendus, fuga modi at delectus amet magnam non, distinctio ratione est quos nobis porro possimus culpa? Sapiente possimus totam ducimus laudantium?</p>
                   <Link to='/'> <button className='btn'> Learn More</button></Link>
                </div>

           </div>
         </div>

      </section>
    
    
    

    
    
    
  )
}

export default About