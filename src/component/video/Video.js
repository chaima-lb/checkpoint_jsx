import React from 'react';
import ReactPlayer from 'react-player';

function Video() {
  const externeVid = 'https://www.youtube.com/watch?v=4rC2rfCj3sk';
  
  return (
    <div>
      <ReactPlayer 
      url={externeVid} 
      controls
    
      muted
      />
  
      
    </div>
   
  );
}

export default Video;