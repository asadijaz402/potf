import { Avatar } from '@material-ui/core';
import React,{useState} from 'react'
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase'
function MessageSender() {
    const [input,setinput]=useState('');
    const [imageURL,setimgurl]=useState('');
    const [{user}, dispatch]=useStateValue();


    const handleSubmit=e=>{
        db.collection('posts').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imageURL,


        })
        e.preventDefault();
        setinput('');
        setimgurl('');
    }
    return (
        <div className='messagesender'>
            <div className='messagesender__top'>
<Avatar src={user.photoURL}/>
<form>
    <input type='text' className='messagesender__input' placeholder={`what's on your maind, ${user.displayName}?`}  value={input} 
        onChange={e=>{
            setinput(e.target.value);
        }}
    />
    <input type='text' value={imageURL} onChange={e=>{setimgurl(e.target.value)}} className='imgurl__input' placeholder='imageURL (optional)'/>
    <button type='submit' onClick={handleSubmit}>Hidden button</button>
    
</form>            </div>
            <div className='messagesender__bottom'>
<div className='messagesender__option'>
<VideocamIcon style={{color:"red"}} />
<h3>Live Video</h3>
</div>

<div className='messagesender__option'>
<PhotoLibraryIcon style={{color:"green"}} />
<h3>Photo/Video</h3>
</div>
<div className='messagesender__option'>
<InsertEmoticonIcon style={{color:"orange   "}} />
<h3>Feeling/Activity</h3>
</div>


            </div>
        </div>
    )
}

export default MessageSender
