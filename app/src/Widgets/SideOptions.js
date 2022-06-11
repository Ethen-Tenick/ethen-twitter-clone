import React from 'react'
import './SideOptions.css'

function SideOptions({text,Icon}) {
  return (
    <div className='main_container_sideoptions'>
        <div className='each_container_btn'> 
            {Icon}
            <p>{text}</p>
        </div>
    </div>
  )
  }

export default SideOptions