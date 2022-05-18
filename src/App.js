
import './App.css';
import './Style.css';
import imgr from './imageInSrc.jpg';
import Video2 from './component/video/Video2';
import Video from './component/video/Video';

function App() {
  return (
    <div className='body'>
    <div style={{"paddingLeft":"30px"}}>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">chaima laabidi</h1>
    <br />
 <br />
     <div className='pad'>
      <img src="./imageInPublic.jpg" className="App-logo" alt="logo" /> 
    <br />
     <img src={imgr} className="img" alt="img" /> 
  </div>
  </div>
   <div className='pad'>
    <h2 className='title'> Video interne</h2>
    <Video />
    <h2 className='title'> Video lien externe</h2>
    <Video2 />
    </div>


    </div>
    </div>
  );
}

export default App;
