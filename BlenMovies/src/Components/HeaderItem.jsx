import React from 'react'

function HeaderItem({name, Icon}) {
  return (
    <div className="text-white flex items-center gap-2  p-2 text-[13px] font-semibold cursor-pointer hover:underline underline-offset-8
    sm:gap-0 pt-4">
        <Icon />
     <h2 className="pl-2">{name}</h2> 

    </div>
  )
}

export default HeaderItem