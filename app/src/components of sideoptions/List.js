import React from 'react'
import Widget from '../Widget'
import Feed from '../Feed'

function List() {
  return (
    <div className='main_container'>
      <Widget className='sideoptions'/>
      <Feed className='feed'/>
      <div className='list_container'>
        <div className='list_main_container'>
          <div className='list_header'>
            <h3>Your Lists</h3>
            <p>You haven't created or followed any Lists. When you do, they'll show up here.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List