import React from 'react'
import logo from '../assets/media/icons/logo.png'
import {HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv} from "react-icons/hi2"
import{HiPlus, HidotsVertical} from "react-icons/hi";
import HeaderItem from './HeaderItem'

function Header() {
const menu= [
    {name:'HOME',
         icon:HiHome},
    {name:'SEARCH', 
         icon:HiMagnifyingGlass},
    {name:"ORIGINAL",
        icon:HiStar},
     {name:"MOVIES", 
        icon:HiPlayCircle},
        {name:"SERIES", 
        icon:HiTv}]
  return (
    <div>
        <img src={logo} className='w-[90px] object-cover' />
        {menu.map((item)=>(
            <HeaderItem />
        ))}
    </div>
  )
}

export default Header