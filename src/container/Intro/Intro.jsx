import React, { useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import './Intro.css';
import {meal} from '../../constants'
const Intro = () => {
  const vidRef = React.useRef();
  const [Play, setPlay] = useState(false)
  function handleVideo(){
    setPlay((prevPlay)=> !prevPlay)
    if(Play){
      vidRef.current.pause();
    }else {
      vidRef.current.play();
    }
  }
  return(
  <div className='app__video'>
    <video src={meal} type ="video/mp4" Loop controls={false} muted ref={vidRef} />
    <div className='app__video-overlay flex__center'>
      <div 
      className='app__video-overlay_circle flex__center'
      onClick={handleVideo}
      >
      {Play ? <BsPauseFill color="#fff" fontSize={30}/> :<BsFillPlayFill color="#fff" fontSize={30}/>}
      </div>
    </div>
  </div>
)
  }

export default Intro;
