import './App.css';
import Home from './Home.js'
import Feed from './Feed.js'
import Widget from './Widget'
import React from 'react'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import List from './components of sideoptions/List'
import Bookmark from './components of sideoptions/Bookmark'
import Explore from './components of sideoptions/Explore'
import Message from './components of sideoptions/Message'
import Profile from './components of sideoptions/Profile'
import Notification from './components of sideoptions/Notification'


function App() {
  return (
    <div className="App">
      <Router>
      <Widget className='sideoptions'/>
      <Home className='home'/>
      <Feed className='feed'/>

      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/notification' element={<Notification/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/messages' element={<Message/>} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/bookmarks' element={<Bookmark/>} />
        <Route path='/list' element={<List/>} />
        
        
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
