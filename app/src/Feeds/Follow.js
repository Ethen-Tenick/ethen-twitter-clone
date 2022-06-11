import React from 'react'
import Button from '@mui/material/Button';
import './Follow.css'

function Follow() {
  return (
    <div className='main_container_follow'>
        <div className='account_follow'>
            <div className='profile_infos'>
                <img
                alt=''
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpjSYJ1XWtTAIcRVrbCY2jMHlqzZ5IC0XmQ&usqp=CAU'
                />
                <div className='names_and_tags'>
                    <div className='usernameTwitter'>SpaceX</div>
                    <div className='usernicknameTwitter'>@spaceX year</div>
                </div>
            </div>
            <Button variant="contained" className='follow_btn'>Follow</Button>
        </div>
    </div>
  )
}

export default Follow