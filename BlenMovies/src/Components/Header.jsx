import React from 'react'
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
    <div className="flex gap-8 items-center ">
        <div>
        <img src={logo} alt="logo" className="lg:w-[80px] md:w-[70px] object-cover" />
        {
            menu.map((item)=>(
                <HeaderItem key={item.name} name = {item.name} Icon={item.icon} />
            ))}
    </div>
    <img src={userpfp} alt="userprofilepic" srcset="" />
    </div>
  )
}

export default Header