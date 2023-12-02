import "./Sidebar.scss";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="logo">
                <span>Equitel Bank</span>
            </div> 
            <hr />
            <div className="links"> 
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>                   
                    <li><NavLink to="/performance">Performance</NavLink></li>
                    <li><NavLink to="/setting">Setting</NavLink></li>
                    <li><NavLink to="/support">Support</NavLink></li>
                </ul> 
            </div>          
        </div>
    );
}
 
export default Sidebar; 