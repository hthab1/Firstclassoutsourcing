import React from 'react'

function Role({selected, onClick, name}) {
    console.log(selected)
  return (
    <div className='group cursor-pointer flex items-center gap-4 my-2' >
        <div className={`border ${selected ? "border-primary" :"border-quaternary"} w-6 h-6 rounded-sm group-hover:border-primary`}></div>
        <span className="fontOpenSans text-secondary text-lg group-hover:text-primary ">{name}</span>
    </div>
  )
}

export default Role