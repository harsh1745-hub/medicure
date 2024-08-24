import React from 'react'
import { formatDate } from '../../utils/formatDate'

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
            About of
            <span className='text-irisBlueColor font-bold text-[24px] leading-9 '>Kundan singh</span>

        </h3>
        <p className='text_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde, ea sed perferendis laudantium odit voluptate blanditiis voluptas accusantium quaerat vitae numquam laborum eveniet possimus reiciendis aspernatur eius dignissimos. Facilis?</p>
      </div>
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold '>Education</h3>
        <ul className='pt-4 md:pt-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] '>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>23 JUNE ,2008</span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda exercitationem vero explicabo voluptatibus earum suscipit quae modi nam eligendi iusto deleniti cupiditate alias, reiciendis quia, tempora id magnam commodi unde!</p>
                </div>

            </li>
        </ul>
      </div>
         <div className='mt-12'>
         <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold '>Experience</h3>
          <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {formatDate('07-07-2024')}-{formatDate('07-07-2025')}
                </span>
            </li>
          </ul>
         </div>
    </div>
  )
}

export default DoctorAbout
