import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


function VideoSidebar({ like, message, share }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
                    : <FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)} />
                }
                <p>{liked ? Number(like) + 1 : Number(like)}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>{message}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{share}</p>
            </div>
        </div>
    )
}

export default VideoSidebar;