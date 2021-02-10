import { Link } from 'react-router-dom';
import './MessageArea.css';
import SenderProfile from "./SenderProfile";

function MessageArea() {
  return(
      <div className="grid-sidebar">
    <div className="MessageArea">
    <div className="txtnav" id="mytxtnav">
    <Link to="/sender-profile"><img src="https://img.freepik.com/free-vector/color-wing-transparent-set_1284-8933.jpg?size=626&ext=jpg" className="txt_photo" alt="logo" /></Link>
    <div className="sendername"> This is the senders name</div>
    <div className="info">
      <span className="call-icon"><Link to="/call"><img src="https://lh3.googleusercontent.com/proxy/kqFPe23RLiMqY1RTMtnrhOj0mHc7fpGUQi-lQS-cp68oRVXV1fbUTJozQdLQKBMMqe_3DxxrZJgo2-_I6gIaRub2UHSU9K8hhl6yAcw7wg" className="call-icon" alt="logo" /></Link></span>
      <span className="videocall-icon"><Link to="/video-call"><img src="https://www.nicepng.com/png/full/136-1368540_video-call-icon-video-call-icon-png.png" className="videocall-icon" alt="logo" /></Link></span>
    <span className="info-icon"><Link to='/sender-info' ><img src="https://i.pinimg.com/originals/a4/c1/0c/a4c10ca412d24959d8904df9f7877b9d.png"className="info-icon"></img></Link></span>
    </div>
    </div>
    <div className="messages">
    <div className="received-messages">Hello receiver! How Are You??</div><br></br>
    <div className="sent-messages">HI! sender.</div><br></br>
    </div>
    <div className="txtsend">
      <textarea className="text" placeholder="Enter your message here"></textarea>
      <button name="send" className="send">SEND</button>
    </div>
    </div>
    </div>
        
      );
} 
  


export default MessageArea;
