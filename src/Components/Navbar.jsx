import React from 'react';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { close, getlinked, menu } from '../assets/assetsexport';
import Navlinks from '../assets/constant';

const Navbar = () => {

    const [active, setActive] = useState('Timeline');
    const [toggle, setToggle] = useState(false);

  return (
<>
<nav className={`w-full flex justify-between items-center px-[50px] lg:px-[70px] py-[20px] pt-[40px] bg-[#150E28] ${!toggle ? 'border-b border-b-white' : 'border-none'} z-50 fixed top-0`}>
        <Link to='/'><img src={getlinked} alt="gelinked Logo" className='w-[120px] lg:w-[150px]' /></Link>
        
        <div className="flex items-center gap-[8rem]">
            <ul className='hidden lg:flex items-center gap-[4rem] '>
                {Navlinks.map((nav)=>{
                    return (
                        <li className={`text-[16px] font-medium font-montserrat ${active === nav.title ? 'text-[#D434FE]' : 'text-white'} hover:text-[#D434FE] transition-all duration-300`} key={nav.id} onClick={()=>setActive(nav.title)}><a href={`#${nav.id}`}>{nav.title}</a></li>
                    )
                })}
            </ul>

            <Link className='hidden lg:inline-flex text-white text-[16px] px-[45px] py-[12px] rounded-[4px] font-montserrat registeration__button transition-all duration-300'>Register</Link>
        </div>

        <img src={!toggle ? menu : close} alt="Menu" className={`w-[30px] h-[30px] block lg:hidden cursor-pointer transition-all duration-300`} onClick={()=> setToggle(!toggle)}/>
    </nav>

<div className={`flex lg:hidden flex-col items-start gap-[3rem] w-full h-[100vh] bg-[#150E28] p-[50px] absolute transition-all duration-500 z-20 ${!toggle ? 'top-[-600px]' : 'top-[90px]'}`}>
<ul className='flex flex-col items-start gap-[2rem] '>
    {Navlinks.map((nav)=>{
        return (
            <li className={`text-[25px] font-normal font-montserrat ${active === nav.title ? 'text-[#D434FE]' : 'text-white'} hover:text-[#D434FE] transition-all duration-300`} key={nav.id} onClick={()=>setActive(nav.title)}><a href={`#${nav.id}`}>{nav.title}</a></li>
        )
    })}
</ul>

<Link className='inline-flex text-white text-[16px] px-[60px] py-[15px] rounded-[4px] font-montserrat registeration__button transition-all duration-300'>Register</Link>
</div>
</>
  )
}

export default Navbar