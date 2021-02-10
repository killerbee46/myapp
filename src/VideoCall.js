import { Link } from 'react-router-dom';
import './VideoCall.css';


function VideoCall() {
  return (
    <div className="vfullscreen">
    <div className="videocallbox">
        </div>
        
      <div className="videocalling">
    <div className="user-video">
        <img className="user-video" src="https://hanselmanblogcontent.azureedge.net/WindowsLiveWriter/DIYMakingaWideAngleWebcam_1478B/2010-02-16%2022-53-31.636_2.jpg" alt="Connecting..."></img>
    </div>
    <div className="call-control">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png" className="speaker-icon" alt="logo" />
    <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Speaker-Iicon-PNG-715x715.png" className="mute-icon" alt="logo" />
    <Link to='/'> <img src="https://image.flaticon.com/icons/png/128/134/134751.png" className="end-call"></img></Link>
    
    </div>
    </div>
    </div>
  );
}


export default VideoCall;
