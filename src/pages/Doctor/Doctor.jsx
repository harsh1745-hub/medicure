import React from 'react'
import DoctorsCard from '../../Componenets/Doctors/DoctorsCard'
import { doctors } from '../../assests/data/doctors'

const Doctor = () => {
  return (
    <>
       <section className='bg-[#fff9ea]'>
          <div className='container text-centre'>
            <h2 className='heading'></h2>
            <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-centre justify-between'>
                <input type='search'
                     className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor '/>
                     <button className= 'bg-primaryColor mt-0 rounded-[0px] rounded-r-md btn'>Search</button>
            </div>
          </div>

       </section>
          <section>
              <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
                    {doctors.map(doctor=>(<DoctorsCard key={doctor.id} doctor={doctor}/>))}
                </div>
              </div>
          </section>
    </>
  )
}

export default Doctor
