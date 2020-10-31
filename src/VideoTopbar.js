import Rect from 'react';
import './VideoTopbar.css';
import MusicNoteTwoToneIcon from '@material-ui/icons/MusicNoteTwoTone';

function VideoTopbar() {
    return (
        <div className="videoTopbar__head">
            <MusicNoteTwoToneIcon fontSize="large" />
            <h3>TikTok</h3>
        </div>
    )
}


export default VideoTopbar;