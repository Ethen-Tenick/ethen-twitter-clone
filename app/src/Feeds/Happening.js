import React from 'react'

import './Happening.css'
function Happening({datePublish,description,wholeStory,writter,title,link,imagePhoto,topic}) {
  return (
      <div className='main_container_happening' onClick = ''>
        <div className='latest_post'>
            <div className='first_container'>
              <div className='title_post'>{title}    Publish Date  {datePublish} Written By {writter}</div>
              <div className='headline_post'>{description}</div>
              <div className='trending_with'>For more <a href={link}> Take a click</a></div>
            </div>
            <div className='second_container'>
              <img 
              alt='' 
              src={imagePhoto}
              />
            </div>
        </div>
      </div>

  )
}

export default Happening