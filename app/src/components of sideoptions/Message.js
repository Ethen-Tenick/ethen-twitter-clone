import React from 'react'
import Widget from '../Widget'
import Feed from '../Feed'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Message_message from '../subcontainers_components/Message_message'
import Message_dm_ui from '../subcontainers_components/Message_dm_ui'


function Message() {
  return (
    <div className='main_container'>

      <Widget className='sideoptions'/>
      
      <div className='message_container_middle'>
        <div className='message_container_middle_header'>
          <div className='message_container_middle_header_top'>
            <div className='message_header_title'>Messages</div>
            <div className='message_header_icons'>
              <div>#</div>
              <div>#</div>
            </div>
          </div>
          <div className='message_container_middle_header_bottom'>
            <div className='searcharea'>
              <SearchOutlinedIcon/>
              <input className='the_input_area' type='text' placeholder='Search Direct Messages' />
            </div>
          </div>
        </div>
        <div className='message_container_middle_body'>
          <Message_message/>
        </div>
      </div>

      <div className='message_container_right'>
        <div className='message_container_right_header'>
          <div className='message_container_right_header_left'>
            <div className='message_container_right_header_img'>
              <img
              alt=''
              src=''
              />  
            <div/>
            <div className='message_container_right_header_info'>
              <h3>Ethen</h3>
              <p>username</p>
            <div/>
          <div/>
          <div className='message_container_right_header_icon'>#<div/>
        </div>

        <div className='message_container_right_header_body'>
          <div className='message_dm_sender_info'>
            <div className='message_dm_sender_info_first_container'>
              <h4>Ethen</h4>
              <p>username</p>
            </div>
            <div className='message_dm_sender_info_second_container'>This is my Bio description🤐🥱</div>
            <div className='message_dm_sender_info_third_container'>
              <p>8 Following</p>
              <p>1 Follower</p>
            </div>
            <div className='message_dm_sender_info_fourth_container'>Joined April 2022</div>
          </div>
        </div>

        <div className='message_dm_ui'>
          <Message_dm_ui/>
        </div>
      </div>
    </div>
  )
}

export default Message