import React from 'react'
import Widget from '../Widget'
import Feed from '../Feed'
import Explore_trend from '../Subcontainers_components/Explore_trend'
import Post from '../Home/Post'
import Explore_happening from '../Subcontainers_components/Explore_happening'

function Explore() {
  return (
    <div className='main_container'>
      <Widget className='sideoptions' />
      <Feed className='feed' />
      <div className='explore_container'>
        <div className='image_and_header'>
          <img
            alt=''
            src='https://www.awn.com/sites/default/files/styles/original/public/image/featured/1038953-kitbash3d-launches-3d-asset-store-vfx-artists.jpg?itok=J5MWCQAe'
          />
          <div className='the_heading_explore'>
            <p>Kenya Elections 2022 . LIVE</p>
            <h2>Learn the facts about the 2022 Kenya general elections</h2>
          </div>
        </div>
        <div className='trends_explore_container'>
          <h3>Trends for you</h3>
          <Explore_trend />
          <p>Show more</p>
        </div>
        <div className='happening_explore_container'>
          <h3>What's Happening</h3>
          <Explore_happening />
        </div>
        <div className='random_topic'>
          <div className='random_topic_header'>
            <h3>Physics</h3>
            <div>...</div>
          </div>
          <div className='random_topic_post'>
            <Post />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore