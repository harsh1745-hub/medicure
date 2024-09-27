import { useEffect,useRef } from 'react';
import React from 'react'
import logo from "../../assests/image/logo.png"
import userImg from "../../assests/image//avatar-icon.png"
import { NavLink,Link } from 'react-router-dom';
import {BiMenu} from "react-icons/bi";
  const navLinks=[
    {
      path:"/home",
      display:"Home",
    },
    {
      path:"/doctors",
      display:"Find a doctors",
    },
    {
      path:"/service",
      display:"Services",
    },
    {
      path:"/contact",
      display:"Contact",
    },
    {
      path:'/dashboard',
      display:"Dashboard"
    }
   
  
   
   

  ]

function Header() {
    const headerRef=useRef(null)
    const menuRef=useRef(null)
         
            const handleStickyHeader=()=>{
               window.addEventListener('scroll',()=>{
                if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
                   headerRef.current.classList.add('sticky_header')
                }else{
                  headerRef.current.classList.remove('sticky_header')
                }
               })
            }
              useEffect(()=>{
                handleStickyHeader()
                 return()=>window.removeEventListener('scroll',handleStickyHeader)
              })
         
          const toggleMenu=()=> menuRef.current.classList.toggle('show_menu')


  return (
  <header className='header flex items-center gap-7 px-5 mt-2 mx-auto' ref={headerRef}>
    
    <div className='flex items-center justify-between'>
         {/*============logo======== */}
           < img src={logo} alt='logo'/>
    </div>

    {/* ======Menu */}
      <div className='navigation 'ref={menuRef} onClick={toggleMenu}>
        <ul className='menu flex items-center gap-[2.7rem] ml-24'>
          {
            navLinks.map((Link,index)=><li key={index}> 
              <NavLink to={Link.path} className={navClass=> navClass.isActive?'text-primaryColor text-[16px] leading-7 font-[600]':'text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor cursor-pointer gap-4'}>

             {Link.display} </NavLink>
            </li>)
            /*Navigation right*/ 
           
          }
        </ul>
      </div >
       <div className='flex items-center gap-4 '>
        <div className='hidden'>
          <Link to='/'>
          <figure className='w-35[px] h-35px  rounded-full'>
            <img src={userImg} alt='logo'/>

          </figure>
          </Link>
        </div>
          <Link to="/login">
           <button className="w-full flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >Log in</button>
          
          </Link>
          <span className='md:hidden' onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer'></BiMenu>
          </span>
       </div>
  </header>
  
  
  )
}

export default Header