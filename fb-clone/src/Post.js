import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
function Post({profilepic,image,username,timestamp,message}) {
    return (
        <div className='post'>
            <div className='post__top'>
            <Avatar
            className="post__avatar"
              src={profilepic}/>
              <div className='post__topinfo'>
                  <h3>
                      {username}
                  </h3>
                  <p>
                      
{ new Date(timestamp?.toDate()).toUTCString()}                  </p>
              </div>


</div>
<div className='post__bottom'>
    <p>{message}</p>
</div>
<div className='post__image'>
 {(image?(
<img src={image} alt="img"/>
 ):
 null)
}
</div>
<div className='post__options'>
    <div className='post__option'>
<ThumbUpIcon/>
<p>like</p>
    </div>
    <div className='post__option'>
<ChatBubbleOutlinedIcon/>
<p>comment</p>
    </div>
    <div className='post__option'>
<NearMeIcon/>
<p>Share</p>
    </div>
    <div className='post__option'>
<AccountCircleIcon/>
<ExpandMoreOutlinedIcon/>
    </div>

</div>
        </div>
    )
}

export default Post
