import React, { useState,useRef } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url,channel,description,song,likes,messages,shares}) {
    const [playing,setPlaying]= useState(false)
    const videoRef = useRef(null);
    const handleVideoPress = ()=>{
        // if video is playing
        // stop it
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }
        else{
            videoRef.current.play()
            setPlaying(true)

        }
        // if video is stop
        // play it
    }
  return (
    <div className='video'>
    <video
    onClick={handleVideoPress}
    className='video_player'
    loop
    ref={videoRef}
     src={url}>
    </video>
    <VideoFooter channel={channel} description={description} song={song}/>
    <VideoSidebar likes={likes} messages={messages} shares={shares}/>
    </div>

  )
}

export default Video
