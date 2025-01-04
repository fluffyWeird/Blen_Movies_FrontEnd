import React from 'react'

function HeaderItem({name, Icon}) {
  return (
    <div className="text-white flex items-center gap-2  p-4 text-[13px] font-semibold cursor-pointer hover:underline underline-offset-8">
        <Icon />
     <h2>{name}</h2> 

    </div>
  )
}

export default HeaderItem