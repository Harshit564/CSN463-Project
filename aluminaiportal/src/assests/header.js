import './header.css';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import SearchBar from '../../../Trash/SearchBar';
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="Header">
        <div className="top-bar">
            <div className="Main-Logo">AlPort </div>
            <div className="nav-mid-list">
            <Link to="/"><div className="nav-mid-list-item" title="Sign In"><a href="#">  <p><ExitToAppIcon /><span>SignIn</span></p> </a></div></Link>
            <Link to="/profile"><div className="nav-mid-list-item" title="Profile"><a href="#"> <p><PersonIcon /><span>Profile</span></p></a></div></Link>
            </div>
        </div>
    
        </div>
    );
}

export default Header;