import React from 'react';
import { Button } from './Button';
import './VideoSection.css';
import '../App.css';

function VideoSection() {
    return (
            <div className="video_container">
                <video src="./assets/videos/net.mp4" autoPlay loop muted />
                <h1>ADVENTURE TIME</h1>
                <p>Let's head out!</p>
                <div className="video_btn">
                    <Button className="btn" buttonStyle="btn_outline" buttonSize="btn_large">
                        LET'S GET STARTED
                    </Button>
                    <Button className="btn" buttonStyle="btn_primary" buttonSize="btn_large">
                        OUR TRAILER <i className=" far fa-play-circle" />
                    </Button>
                </div>
            </div>
    );
}

export default VideoSection
