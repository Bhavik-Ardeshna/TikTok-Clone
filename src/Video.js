import React, { useState } from 'react';
import './Video.css';
import VideoPlayer from 'react-player';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import VideoTopbar from './VideoTopbar';

function Video({ url, light, like, message, share, channel, description, song }) {
    const [valplay, setPlay] = useState(false);

    const handlePress = () => {
        if (valplay) {
            VideoPlayer.playing = true;
            setPlay(false);
        }
        else {
            VideoPlayer.playing = false;
            setPlay(true);
        }
    };
    return (
        <div className="video">
            <div className="video__player">
                <VideoPlayer
                    onClick={handlePress}
                    height="100%"
                    width="100%"
                    light={light}
                    url={url}
                    // light={true}
                    controls />
                <VideoTopbar />
                <VideoFooter
                    channel={channel}
                    description={description}
                    song={song}
                />
                <VideoSidebar
                    like={like}
                    message={message}
                    share={share}
                />
            </div>
        </div>

    )
}


export default Video;