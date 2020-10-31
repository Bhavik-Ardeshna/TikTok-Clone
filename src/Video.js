import React, { useRef, useState } from 'react';
import './Video.css';
// import samplevideo from './sample-mp4-file.mp4';
import VideoPlayer from 'react-player';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';


function Video({ url, light, like, message, share, channel, description, song }) {
    const [valplay, setPlay] = useState(false);
    // const videoRef = useRef(null);

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
                    // url={[{ src: './sample-mp4-file.MP4', type: 'video/mp4' }]}
                    // light={true}
                    // url={samplevideo}
                    // ref={videoRef}
                    controls />

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