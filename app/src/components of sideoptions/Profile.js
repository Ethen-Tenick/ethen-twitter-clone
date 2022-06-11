import React from 'react'
import Widget from '../Widget'
import Feed from '../Feed'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className='main_container_profile'>
      <div className='profile_container_header'>
        <div className='profile_info'>
          <h3>Ethen</h3>
          <p>@username</p>
        </div>
      </div>
      <Widget className='sideoptions'/>
      <Feed className='feed'/>

      <div className='profile_container'>
        <div className='profile_pictures'>
          <img
            src=''
            alt=''
          />
          <div className='profile_picture_container'>
            <img
              alt=''
              src=''
            />
            <div>Edit Profile</div>
          </div>
        </div>

        <div className='profile_second_container'>
          <div className='profile_user_names'>
            <h4>Ethen</h4>
            <p>TnickEthen</p>
          </div>
          <div className='profile_container_bio'>This is my Brand New Wheels</div>
          <div className='profile_user_address'>
            <p>Nairobi,Kenya</p>
            <p>Joined April 2022</p>
          </div>
          <div className='profile_follow_data'>
            <p>8 Following</p>
            <p>1 Follower</p>
          </div>
          <div className='profile_user_navigation'>
            <nav>
            <Link to='/usertweets'>Tweets</Link>
            <Link to='/tweetsandreplies'>Tweets & Replies</Link>
            <Link to='/media'>Media</Link>
            <Link to='/likes'>Likes</Link>
            </nav>            

          </div>

        </div>
      <div className='user_profile_choice'> 
      {/* to show the chosen for the tweets or others above , this should be below */}
        <Navchoice/> 
      </div>
      </div>
    </div>
  )
}

export default Profile