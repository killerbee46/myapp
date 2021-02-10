import { Link } from 'react-router-dom';
import './Message.css';
import UserProfile from './UserProfile';

function Message() {
  if (window.location.pathname === '/') {
    return(
        <div className="Message">
        <div className="message">
        <Link to="/MessageArea"><div className="messagebar"><img className="txt_prof" src="https://img.freepik.com/free-vector/color-wing-transparent-set_1284-8933.jpg?size=626&ext=jpg" alt="logo" /> <span className="name"> Hari Wagle</span><span className="newmessage"> (YES) </span><br/><span className="txt">K 6 kan6a</span></div></Link>
        <Link to="/MessageArea"><div className="messagebar"><img className="txt_prof" src="https://img.freepik.com/free-vector/color-wing-transparent-set_1284-8933.jpg?size=626&ext=jpg" alt="logo" /> <span className="name"> Hari Wagle</span><span className="newmessage"> (YES) </span><br/><span className="txt">K 6 kan6a</span></div></Link>
        <Link to="/MessageArea"><div className="messagebar"><img className="txt_prof" src="https://img.freepik.com/free-vector/color-wing-transparent-set_1284-8933.jpg?size=626&ext=jpg" alt="logo" /> <span className="name"> Hari Wagle</span><span className="newmessage"> (YES) </span><br/><span className="txt">K 6 kan6a</span></div></Link>
        <Link to="/MessageArea"><div className="messagebar"><img className="txt_prof" src="https://img.freepik.com/free-vector/color-wing-transparent-set_1284-8933.jpg?size=626&ext=jpg" alt="logo" /> <span className="name"> Hari Wagle</span><span className="newmessage"> (YES) </span><br/><span className="txt">K 6 kan6a</span></div></Link>
        <Link to="/MessageArea"><div className="messagebar"><img className="txt_prof" src="https://img.freepik.com/free-vector/color-wing-transparent-set_1284-8933.jpg?size=626&ext=jpg" alt="logo" /> <span className="name"> Hari Wagle</span><span className="newmessage"> (YES) </span><br/><span className="txt">K 6 kan6a</span></div></Link>
        <Link to="/MessageArea"><div className="messagebar"><img className="txt_prof" src="https://img.freepik.com/free-vector/color-wing-transparent-set_1284-8933.jpg?size=626&ext=jpg" alt="logo" /> <span className="name"> Hari Wagle</span><span className="newmessage"> (YES) </span><br/><span className="txt">K 6 kan6a</span></div></Link>
        <Link to="/MessageArea"><div className="messagebar"><img className="txt_prof" src="https://img.freepik.com/free-vector/color-wing-transparent-set_1284-8933.jpg?size=626&ext=jpg" alt="logo" /> <span className="name"> Hari Wagle</span><span className="newmessage"> (YES) </span><br/><span className="txt">K 6 kan6a</span></div></Link>
        <Link to="/MessageArea"><div className="messagebar"><img className="txt_prof" src="https://img.freepik.com/free-vector/color-wing-transparent-set_1284-8933.jpg?size=626&ext=jpg" alt="logo" /> <span className="name"> Hari Wagle</span><span className="newmessage"> (YES) </span><br/><span className="txt">K 6 kan6a</span></div></Link>
        </div>
        </div>
      );
} else if (window.location.pathname === '/UserProfile') {
    return(
        <UserProfile />
    );
}
  
}



export default Message;
