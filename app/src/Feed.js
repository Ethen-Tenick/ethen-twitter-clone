import React, { useState,useEffect } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Happening from './Feeds/Happening';
import Follow from './Feeds/Follow';
import './Feed.css';

function Feed({imageUrl,postTitle,postHeadline,hashtag}) {

const [newsApi,setNewsApi] = useState([])
  
  /////  API FOR NEWS /////// OVERPASSED PULL REQUESTS    /////
useEffect(() => {
  
  
  const axios = require("axios");
  
  const options = {
      method: 'GET',
      url: 'https://free-news.p.rapidapi.com/v1/search',
      params: {q: 'Elon Musk', lang: 'en',page:1},
      headers: {
        'X-RapidAPI-Key': 'ea89f1ffb7msh0c45ba16eed4165p1970aejsnfa7e4508758e',
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
  }
};

axios.request(options).then((response) => {
	setNewsApi(response.data.articles)
  console.log('done its sent to news api array')
  console.log(response.data.articles)
  })
.catch((error) => {
  	console.error(error);
  });
  console.log(newsApi)
  }, [])
  
  
  //////// END OF WEBSEARCH API ///////////



  return (
    <div className='main_container_feeds'>
      <div className='searcharea'>
        <SearchOutlinedIcon/>
        <input className='the_input_area' type='text' placeholder='Search Twitter' />
      </div>
      <div className='happening'>
        <div className='follow_happening_title'>What's happening</div>
        {
        newsApi.map((item) => {
          <Happening
          datePublish={item.published_date}
          writter={item.author}
          link={item.link}
          imagePhoto={item.media}
          title={item.topic}
          description={item.title}
          wholeStory={item.summary} //not yet used
          topic={item.topic} //not yet used
          />
          console.log('the posting into the website is taking place currently')
        }
        )}
       
        <div className='show_more'>Show more</div>
      </div>
      <div className='follow'>
        <div className='follow_happening_title'>Who to follow</div>
        <Follow/>
        <div className='show_more'>Show more</div>
      </div>
    
      
    </div>
  )
}

export default Feed