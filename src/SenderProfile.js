
import { Link } from 'react-router-dom';
import './SenderProfile.css';


function SenderProfile() {
  return (
    <div>
    <div className="box stack-top">
    </div>
      <div className="sender-profile">
        <Link to='/'><span className="close-icon">X</span></Link>
    <div className="avatar">
        <img className="sender-photo" src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" alt="ERROR 404!!!"></img>
    </div>
    <div className="sender-name">
    <h2>sender Name</h2>
    </div>
    <div className="other-info"> 
    <h2>These are some other information</h2>
    </div>
    </div>
    </div>
  );
}


export default SenderProfile;


