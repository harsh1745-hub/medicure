import React from 'react'
import {services} from '../../assests/data/services';
import ServicesCard from './ServicesCard';
function ServicesList() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {services.map((item,index)=> <ServicesCard item={item} index={index} key={index}/>)}
    </div>
  )
}

export default ServicesList