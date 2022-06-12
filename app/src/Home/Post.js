import React, { useEffect, useState } from 'react'
import './Post.css'
// messages other icons
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'; //comments
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'; //like
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'; //share
// 
import { db } from '../Firebase'
import { deleteDoc, doc } from 'firebase/firestore'
import Button from '@mui/material/Button';


function Post({ imageUrl, username, usernickname, userprofilephoto, tweeted, postId }) {

  const [commentNumber, setCommentNumber] = useState(0)
  const [likeNumber, setLikeNumber] = useState(0)

  useEffect(() => {

  }, [])


  ////to delete post
  const delete_post = async (id) => {
    const selected_item = doc(db, 'posts', id)
    await deleteDoc(selected_item)
    console.log('item has been terminated')

  }

  return (
    <div className='main_container_post' key={postId}>

      <div className='user_profile'>
        <img alt='' src={userprofilephoto} />
      </div>

      <div className='post_container'>
        <div className='user_info'>
          <div className='top_container'>
            <div className='first_div'>
              <div className='user_name'>{username}</div>
              <div className='user_nickname'>@{usernickname}</div>
              <div className='time_posted'></div>
            </div>
            <div>...</div>
          </div>
          <div className='the_tweet'>{tweeted}</div>
        </div>
        <div className='images_and_others'>
          <img alt='' src={imageUrl} />
          <div className='accesories'>
            <div className='items'>
              <ForumOutlinedIcon onClick={() => { setLikeNumber(n => n + 1) }} className='like_btn' />
              <p>{likeNumber}</p>
            </div>
            <div className='items'>
              <FavoriteBorderOutlinedIcon className='comment_btn' />
              <p>{commentNumber}</p>
            </div>
            <div className='items'>
              <ShareOutlinedIcon />
            </div>
            <Button variant="contained" className='tweet_btn_home' onClick={() => { delete_post(postId) }} >delete</Button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Post