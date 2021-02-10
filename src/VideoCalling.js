import { Link } from 'react-router-dom';
import './VideoCalling.css';


function VideoCalling() {
  return (
    <div className="fullscreen">
    <div className="callbox">
    <div className="bg-image"></div>
        </div>
        
      <div className="calling">
    <div className="avatar">
        <img className="sender-photo" src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" alt="ERROR 404!!!"></img>
    </div>
    <div className="sender-name">
    <h2>User Name</h2>
    </div>
    <div className="call-status"> 
    <br></br><span>Video Calling...</span><br></br>
    <span color="yellow"><Link to="/VideoCall">Call Uthayepa6i</Link></span>
    <div className="call-control">
    <span className="speaker-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png" className="speaker-icon" alt="logo" /></span>
      <span className="mute-icon"><img src="https://www.searchpng.com/wp-content/uploads/2019/02/Speaker-Iicon-PNG-715x715.png" className="mute-icon" alt="logo" /></span>
    <span className="end-call"><Link to='/'> <img src="https://image.flaticon.com/icons/png/128/134/134751.png" className="end-call"></img></Link></span>
    
    </div>
    </div>
    </div>
    </div>
  );
}


export default VideoCalling;


