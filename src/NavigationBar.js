import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="grid-sidebar">
    <div className="App">
      <div className="topnav" id="myTopnav">
   <Link to="/user-profile"><img src="https://img.freepik.com/free-vector/color-wing-transparent-set_1284-8933.jpg?size=626&ext=jpg" className="profile_photo" alt="logo" /></Link>
  <input className="search" placeholder="Search" />
</div>
     </div>
    </div>
  );
}


export default NavigationBar;


