import React from 'react'
import { Link } from 'react-router-dom'
import starIcon from '../../assests/image/Star.png'
import { BsArrowRight } from "react-icons/bs";

const DoctorsCard = ({doctor}) => {
     const {name,avgRating,totalRating, specialty,photo, totalPatients,hospital}=doctor
  return (
    <div className='p-3 lg:p-5'>
      <div>
        <img src={photo} className='w-full' alt=''/>
      </div>
        <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5'>{name}</h2>
         <div className='mt-2 lg:mt-4 flex items-center justify-between'>
            <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[18px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded '>{specialty}</span>
              <div className='flex items-center gap-[6px]'> 
                <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                <img src={starIcon}/>{avgRating}
                </span>
                <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-textColor'>({totalRating})</span>
              </div>
         </div>
         <div className='mt-[18px] lg:mt-5 flex items-centre justify-between'>
            <div>
                <h3 className='leading-7 lg:text-[18px] lg:leading-[30px] font-semibold'>+{totalPatients} patients</h3>
                <p className='text-[14px] leading-6 font-[400] text-textColor '>At {hospital}</p>
            </div>
            <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border border-solid border-black mt-[30px] mx-auto items-centre justify-center group hover:bg-primaryColor hover:border-none'>
                   <BsArrowRight className='group hover:text-white w-8 h-10'/>
                    </Link>
                  
                       
                 
                     </div>

             </div>
  )
}

export default DoctorsCard
