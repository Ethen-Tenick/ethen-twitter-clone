import React from 'react'

function Bookmark() {
  return (
    <div className='bookmark_main_container'>
      <div className='bookmark_header'>
        <div className='bookmark_header_items'>
          <h3>Bookmark</h3>
          <p>@username</p>
        </div>
        <div className='bookmark_body'>
          <img
            alt=''
            src='https://media.istockphoto.com/photos/open-book-picture-id471876836?k=20&m=471876836&s=612x612&w=0&h=BWkjsabeFBN9jV3XikYDy3hp1vzIXgoM1AvJ_r62iSw='
          />
          <div className='bookmark_content_list'>
            <h2>Save Tweets for later</h2>
            <p>Don't let the good ones fly away! Bookmark Tweets to easily find them again in the future.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookmark