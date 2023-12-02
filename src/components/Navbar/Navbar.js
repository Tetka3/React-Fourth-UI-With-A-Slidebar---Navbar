import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />          
        </div>
        <div className="links"> 
            <ul>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>                   
                <li><NavLink to="/contact">Contact</NavLink></li>                
            </ul> 
        </div>             
      </div>
    </div>
  );
};

export default Navbar;