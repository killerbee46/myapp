
import { Link } from 'react-router-dom';
import './UserProfile.css';


function UserProfile() {
  return (
    <div>
    <div className="box stack-top">
    </div>
      <div className="user-profile">
        <Link to='/'><div className="close-icon">X</div></Link>
    <div className="avatar">
        <img className="user-photo" src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" alt="ERROR 404!!!"></img>
    </div>
    <div className="user-name">
    <h2>User Name</h2>
    </div>
    <div className="other-info"> 
    <h2>These are some other information</h2>
    
    </div>
    </div>
    </div>
  );
}


export default UserProfile;


