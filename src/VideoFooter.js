import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
import record_disc from './logo/record_disc.png';

function VideoFooter({ channel, description, song }) {
    return (
        <div className="videofooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videofooter__icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song} </p>
                            </>
                        )}
                    </Ticker>

                    <img src={record_disc} className="record__logo"></img>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter;
