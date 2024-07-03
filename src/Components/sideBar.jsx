import React from 'react'
import profile from '../assets/ProfilePic.jpg'
import { Icon } from '@iconify/react/dist/iconify.js'
const Sidebar = () => {
  return (
    <div className='sidebar   rounded-lg my-28 mx-2  w-80 h-[710px] '>

      <img className='rounded-md w-52 mx-auto -mt-16' src={profile} alt="" />
      <h3 className='text-white bg-slate-500 w-40 text-center mx-auto mt-3 rounded-md'>Danyal Khan</h3>
      <p className='text-white bg-slate-500 w-40 text-center mx-auto mt-3 rounded-md'>Frontend Developer</p>

      <div className="Sociallist w-60 mx-auto list-none flex mt-3  justify-around items-center">
        <li className='text-white'><a  target="_blank" href="https://github.com/Danyal494"><Icon icon="skill-icons:github-dark" width={"30px"} /></a></li>
        <li className='text-white'><a target="_blank" href="https://www.linkedin.com/in/danyal-khan-562b17301/"><Icon icon="devicon:linkedin" width={"30px"} /></a></li>
        <li className='text-white'><a target="_blank" href="https://www.instagram.com/danyal974/"><Icon icon="skill-icons:instagram" width={"30px"} /></a></li>
        {/* <li className='text-white'><a target="_blank" href=""><Icon icon="fa6-brands:square-upwork" width={"30px"} /></a></li> */}
      </div>
      
      <div className="Cbox h-[290px] shadow-lg  border-[2px] border-slate-600 mx-4 my-5 py-0.5 rounded-lg  ">
<div className='phone  border-b-[2px] border-slate-600 flex items-center mx-4 my-5'>
<div className="svg mr-3">
<Icon icon="bi:phone" width={"30px"} color='white'/>
</div>
<div className="info py-[2px] text-white">
  <p className='text-sm font-extralight'>Phone</p>
  <h3 className=''>+923 294 036 213</h3>
</div>
</div>
<div className='email  border-b-[2px] border-slate-600 flex items-center mx-4 my-5'>
  <div className="svg mr-3">
  <Icon icon="mdi:email-fast" width={"30px"} color='white' />
  </div>
  <div className="info py-[2px] text-white">
    <p className='text-sm font-extralight'>Gmail</p>
    <h3 className=''>dk7167301@gmail.com</h3>
  </div>
</div>
<div className='location  border-b-[2px] border-slate-600 flex items-center  mx-4 my-5'>
<div className="svg mr-3 ">
<Icon icon="fluent:my-location-20-regular" color='white' width={"30px"}   />
</div>
  <div className="info py-[2px] text-white"> 
    <p className='text-sm font-extralight'>Location</p>
    <h3 className=''>House 494 B 2 sec D-1</h3>
    </div>
</div>
<div className='DOB    flex items-center px-4 my-5'>

<div className="svg mr-3">
<Icon icon="uit:calender" color='white' width={"30px"} />
</div>
  <div className="info py-[2px] text-white">
    <p className='text-sm font-extralight'>Date Of Birth </p>
    <h3 className=''>31-OCT-2000</h3>
    </div>
</div>
      </div>

      <button
  class="cursor-pointer mt-9 mx-auto flex items-center  bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none"
>
  <svg
    class="w-5 h-5"
    stroke="currentColor"
    stroke-width="2"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg>
  <p className='ml-2'>Download</p>
</button>

    </div>
  )
}

export default Sidebar
