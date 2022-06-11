import React from 'react'
import '@emotion/react'
import './Widgets/Widget.css'

import SideOptions from './Widgets/SideOptions'
import TwitterIcon from '@mui/icons-material/Twitter';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'; // profile
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';


function Widget() {
  return (
    <div className='main_container_widget'>
      <div className='sub_container'>
      <TwitterIcon className='twitter_icon'/>
      <SideOptions Icon={ <HomeIcon/>} text='Home'/>
      <SideOptions Icon={ <ExploreOutlinedIcon/>} text='Explore'/>
      <SideOptions Icon={ <NotificationsNoneOutlinedIcon/>} text='Notifications'/>
      <SideOptions Icon={ <MailOutlineOutlinedIcon/>} text='Messages'/>
      <SideOptions Icon={ <BookmarkBorderOutlinedIcon/>} text='Bookmarks'/>
      <SideOptions Icon={ <ListAltOutlinedIcon/>} text='Lists'/>
      <SideOptions Icon={ <AccountCircleOutlinedIcon/>} text='Profile'/>
      <SideOptions Icon={ <MoreHorizRoundedIcon/>} text='more'/>

      <Button variant="contained" className='tweet_btn'>Tweet</Button>
      </div>
    </div>
  )
}

export default Widget