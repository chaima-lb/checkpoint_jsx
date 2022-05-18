import React from 'react';
import ReactPlayer from 'react-player';

function Video() {
  
  const interneVid = 'https://www.youtube.com/watch?v=_59QcRvs-7U';
  return (
    <div>
      <ReactPlayer 
      url={interneVid} 
      controls
      muted
      />
  
      
    </div>
   
  );
}

export default Video;