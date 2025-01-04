import React, { useState } from 'react'
import logo from '../assets/Img/logo.png'
import userpfp from '../assets/Img/profilepic.png'
import HeaderItem from './HeaderItem'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar, 
    HiPlayCircle, 
    HiTv,
} from 'react-icons/hi2'
import {HiPlus,HiDotsVertical} from 'react-icons/hi'
function Header() {
  const [toggle, setToggle] = useState(false)

    const menu = [
        {name:'HOME',
         icon:HiHome},
        {name:'SEARCH',
         icon:HiMagnifyingGlass},
         {name:'WATCH LIST',
         icon:HiPlus},
         {name:'MOVIES',
         icon:HiPlayCircle},
         {name:'SERIES',
         icon:HiTv}
    ]
  return (
    <div className="flex items-center  p-4 justify-between">
        <div className="flex">
          <img src={logo} alt="logo" className="w-[40px]  object-cover" />
        <div className="hidden md:flex gap-8 ">
        {menu.map((item)=>(
                <HeaderItem key={item.name} name = {item.name} Icon={item.icon} />
            ))}
            </div>
           <div className="flex md:hidden gap-8">
                {menu.map((item, index)=>index<3&&(
                <HeaderItem key={''} name = {''} Icon={item.icon} />))}
              <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
              <HeaderItem name='' Icon={HiDotsVertical} />
              {toggle? <div className="absolute mt-3 border-[1px] px-2 py-3 border-gray-100 p-2">
              {menu.map((item, index)=>index>2&&(
                <HeaderItem key={item.name} name = {item.name} Icon={item.icon} />
            ))}
            </div>
                :null}
            </div>
            </div>
        
        </div>
          <img src={userpfp} className="w-[40px] rounded-full"alt="userprofilepic" />

    </div>
  )
}

export default Header