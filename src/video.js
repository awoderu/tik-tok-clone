import React,{useRef, useState} from 'react'
import "./video.css"
import VideoFooter from './videoFooter';
import Sidebar from './videoSidebar';

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () =>{
      if(playing){
        videoRef.current.pause();
        setPlaying(false)
      } else{
        videoRef.current.play();
        setPlaying(true)
      }
      videoRef.current.play();
    };

  return (
    <div className='video'>
      <video
        className='video__player'
        src="https://koreus.tv/static/streaming-playlists/hls/1951eee2-f07e-482c-96ac-817226975664/e1362867-91cd-49ee-91c7-68636147351d-720-fragmented.mp4"
        ref={videoRef}
        // onClick={onVideoPress}
        
        autoPlay
        muted
        loop
        playsInline
      />
      {/* <h1>
        This is a video
      </h1> */}
      <div>
        <VideoFooter />
      </div>
      <div>
        <Sidebar/>
        This is a sidebar
      </div>
      
    </div>
  )
}

export default Video;
