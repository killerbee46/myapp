import { Link } from 'react-router-dom';
import './SenderInformation.css';


function SenderInformation() {
  return (
    <div>
    <div className="box stack-top">
    </div>
      <div className="sender-info">
        <Link to='/'><div className="close-icon">X</div></Link>
    <div className="avatar">
        <img className="sender-photo" src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" alt="ERROR 404!!!"></img>
    </div>
    <div className="sender-name">
    <h2>Sender Name</h2>
    </div>
      <Link to="/create-group"><div className="option"><span className="group">Create Group</span><br/></div></Link>
      <Link to="/media"><div className="option"><span className="media">Media</span><br/></div></Link>
      <Link to="/block-contact"><div className="option"><span className="block-contact">Block Contact</span><br/></div></Link>
      <Link to="/sender-profile"><div className="option"><span className="sender-profile-link">Show Profile</span><br/></div></Link> 
    </div>
    </div>
  );
}


export default SenderInformation;


