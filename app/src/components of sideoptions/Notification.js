import React from 'react'
import Widget from '../Widget'
import Feed from '../Feed'

function Notification() {
  return (
    <div className='main_container'>
      <Widget className='sideoptions'/>
      <Feed className='feed'/>
      <div className='notification_container'>
        
      </div>
    </div>
  )
}

export default Notification