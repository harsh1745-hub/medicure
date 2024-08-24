import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center '>Contact us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text_para'>Got a Technical Issue? Want to Send feedback about a beta feautre? Let us Know. </p>
          <form action='#' className='space-y-8'>
            <div>
             <label htmlFor='enail' className='form_label'>
              your Email

             </label>
              <input
                 type='email'
                 id='email'
                 placeholder='example@gmail.com'
                 className='form_input mt-1'

              />
            </div>
                <div >
                
                <label htmlFor='Subject' className='form_label'>
                              Subject
                                </label>
                                    <input
                                     type='text'
                                      id='subject'
                                     placeholder='How can be help you?'
                                      className='form_input mt-1'
                                             />
                
            
            
                                       </div>
                                     <div className='sm:col-span-2'>
                
                                        <label htmlFor='message' className='form_label'>
                                                  Your message
                                                   </label>
                                                    <input
                                                  rows="6"
                                     type='text'
                                      id='message'
                                     placeholder='Leave a comment'
                                      className='form_input mt-1'
                                             />
                                
                </div>
                <button 
                 type='submit'
                className='btn'>Submit</button>
          </form>
      </div>
    </section>
    
    
  )
}

export default Contact
