import React, { useState } from 'react'
import signupImg from './../assests/image/signup.gif'
import avatarImg from './../assests/image/avatar-icon.png'
import { Link } from 'react-router-dom'
const Signup = () => {
    const[selectedFile,setSelectedFile]=useState(null)
    const[previewURL, setPreviewURL]=useState();
     const[formData,setFormData]=useState({
            name:'',
            email:'',
            password:'',
            photo:selectedFile,
            role:'patient',
     });
         const handleInputChange=e=>{
             setFormData({...formData,[e.target.name]:e.target.value})
         }
          const handleFileInputChange=async(event)=>{
             const file=event.target.files[0]

             console.log(file)
          }
             const submitHandler=async event=>{
                  event.preventDefault()
             }

  return (
    <section className='px-5 xl:px-0'>
       <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-lg'>
              <img src={signupImg} alt='' className='w-full rounded-l-lg'/>
            </figure>
          </div>
             <div className='rounded-l-lg lg:pl-16 py-10 '>
              <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>Create an <span className='text-primaryColor text-[22px] '>Account</span></h3>
              <form  onSubmit={submitHandler}>
                     <div className='mb-5'>
                        <input type='text' 
                        placeholder='full name '
                         name='name' 
                         value={formData.name}
                              className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                               focus:border-b-primaryColor text-[22px] leading-7 text-headingColor
                                placeholder:text-textColor cursor-pointer'
                                  required
                                      />
                                    </div>
                                       <div className='mb-5'>
                                                             <input type='email' 
                                                              placeholder='Enter your email '
                                                                  name='email' 
                                                                    value={formData.email} 
                                                                    onChange={handleInputChange}
                                                          className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                                                        focus:border-b-primaryColor text-[22px] leading-7 text-headingColor
                                                         placeholder:text-textColor cursor-pointer'
                                                                                required
                                                                     />
                                                                      </div>
                                                                   <div className='mb-5'>
                                                                     <input type='password' 
                                                                           placeholder='Enter your password '
                                                                               name='password' 
                                                                            value={formData.password}
                                                                           onChange={handleInputChange}
                                                                      className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                                                                              focus:border-b-primaryColor text-[22px] leading-7 text-headingColor
                                                                                  placeholder:text-textColor cursor-pointer'
                                                                                           required
                 />
                                     </div>
                                        <div className='mb-5 flex items-center justify-between'>
                                          <label  className='text-headingColor font-bold
                                          text-[16px] leading-7'>
                                                       Gender
                                                     <select name='role'
                                                        value={formData.role}
                                                        onChange={handleInputChange}
                                                     className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 '>
                                              <option value='Male'>Male</option>
                                              <option value='Female'>Female</option>
                                              <option value='other'>Other</option>
                                            </select>
                                          </label>
                                          <label htmlFor='' className='text-headingColor font-bold
                                                      text-[16px] leading-7'>
                                                              Are you a:
                                                       <select name='role' 
                                                           onChange={handleInputChange}
                                                       className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 '>
                                                      <option value='patient'>Patient</option>
                                                         <option value='doctor'>Doctor</option>
                                                                      </select>
                                                          </label>
                                        </div>
                                           <div className='mb-5 flex items-center gap-3'>
                                            <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid 
                                             border-primaryColor flex items-center justify-center '>
                                              <img src={avatarImg} alt=''/>
                                             </figure>
                                           </div>
                                             <div className='relative w-[130px] h-[50px]'>
                                              <input
                                                 type='file'
                                                 name='photo'
                                                 id='customFile'
                                                 accept='.jpg , .png'
                                                 className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                                              />
                                                <label htmlFor='customFile' className='absolute top-0 left-0 w-full h-full flex items-centre px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>upload photo</label>
                                             </div>
                                             <div className='mt-7'>
   <button
       type='submit'
       className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'
   >SignUp
   </button>
 </div>
    <p className='mt-5 text-textColor text-centre'>Already have an account?
      <Link to='/login' className='text-primaryColor'>Login</Link>
    </p>         
                                      </form>
                                    </div>


        </div>
       </div>
       
    </section>
    
    
    
    

    
    
    
  )
}

export default Signup
