import React, { useState,useEffect } from 'react'
import './Home.css'
import {collection, getDocs,docs} from 'firebase/firestore'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'; //star icon
import Post from './Home/Post'
import InputField from './Home/InputField'
import {db} from './Firebase'



function Home() {

  const [dataFromFirestore,setDataFromFirestore] = useState([])

  const firestoreReferenceToDatabase = collection(db,'posts')

  //hot reload
  
    
  useEffect(() => {
    
    const  getposts = async () => {
      const returnedDocument = await getDocs(firestoreReferenceToDatabase)
      setDataFromFirestore(returnedDocument.docs.map((doc) => ({...doc.data(),id:doc.id})))
      console.log('Data retrieved')
    }
    getposts()
  }, [])
  

  return (
    <div className='main_container_home'>
      <div className='home_header'>
        <div className='home_header_subcontainer'>
          <div className='home_name'>Home</div>
          <AutoAwesomeOutlinedIcon/>
        </div>
      </div>
          <div className='input_area'>
            <InputField />
        </div>
        <div className='post'>
        {
          dataFromFirestore.map((singularReturn) => {
           return <div>
              <Post 
                postId={singularReturn.id}
                username={singularReturn.username}
                imageUrl={singularReturn.imageurl} 
                usernickname='chosen name' 
                userprofilephoto={singularReturn.userprofileurl}
                tweeted={singularReturn.tweetText} 
              />
             
            </div>
          })
        }
      

        </div>
      </div>
      
  )
}

export default Home;