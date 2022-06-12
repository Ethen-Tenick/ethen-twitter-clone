import React, { useState, useEffect } from 'react'
import { provider, db, auth, storage } from '../Firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { signInWithPopup } from 'firebase/auth'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import './InputField.css'


function InputField() {
    const [imagePost, setImagePost] = useState([])
    const [tweetText, setTweetText] = useState([])

    const userLocalImage = localStorage.getItem('userLocalImage')
    const userLocalEmail = localStorage.getItem('userLocalEmail')
    const userLocalName = localStorage.getItem('userLocalName')

    const firestoreReferenceToDatabase = collection(db, 'posts')


    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((results) => {
            localStorage.setItem('userLocalImage', results.user.photoURL)
            localStorage.setItem('userLocalEmail', results.user.email)
            localStorage.setItem('userLocalName', results.user.displayName)

        }).catch((error) => { console.log(error) })
    }

    const signOut = () => {
        localStorage.clear()
    }

    ///////TO UPLOAD Post////
    const post_upload = (e) => {

        e.preventDefault();

        if (imagePost.length === 0) {
            addDoc(firestoreReferenceToDatabase, { tweetText, username: userLocalName, useremail: userLocalEmail, userprofileurl: userLocalImage })
            console.log('upload with text only succesfull')
        } else {
            const storageItemReference = ref(storage, `posts/${imagePost.name}`)
            uploadBytes(storageItemReference, imagePost).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    addDoc(firestoreReferenceToDatabase, {
                        tweetText,
                        imageurl: url,
                        username: userLocalName,
                        useremail: userLocalEmail,
                        userprofileurl: userLocalImage
                    })
                    console.log('upload with photo succesfull')
                }

                )
            })
        }
        setTweetText('')
        setImagePost(null)
    }

    const [dataFromFirestore, setDataFromFirestore] = useState([])
    //hot reload
    useEffect(() => {

        const getposts = async () => {
            const returnedDocument = await getDocs(firestoreReferenceToDatabase)
            setDataFromFirestore(returnedDocument.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log('Data retrieved')
        }
        getposts()
    }, [])


    return (
        <div className='sub_container'>
            <div className='super_container'>
                <div className='profile'>
                    <img alt='' src={userLocalImage} />
                </div>
                <div className='input_column'>
                    <textarea placeholder='Whats happening?' value={tweetText} onChange={(event) => { setTweetText(event.target.value) }} />
                    <div className='other_items'>
                        <Input type='file' className='photo_input' onChange={(event) => { setImagePost(event.target.files[0]) }} />
                        <Button variant="contained" className='tweet_btn_home' onClick={signInWithGoogle}>LogIn</Button>
                        <Button variant="contained" className='tweet_btn_home' onClick={signOut}>LogOut</Button>
                        <Button variant="contained" className='tweet_btn_home' onClick={(e) => { post_upload(e); }}>Tweet</Button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default InputField
