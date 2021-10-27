import './header.css';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
function Header(){
    return(
        <div className="Header">
        <div className="top-bar">
            <div className="Main-Logo">AlPort</div>
            <div className="nav-mid-list">
                <div className="nav-mid-list-item" title="Home"><a href="#"> <HomeIcon /> <p>Home</p> </a></div>
                <div className="nav-mid-list-item" title="Profile"><a href="#"><PersonIcon /> <p>Profile</p></a></div>
                <div className="nav-mid-list-item" title="Openings"><a href="#"><LibraryBooksIcon /> <p>Openings</p> </a></div>
                <div className="nav-mid-list-item" title="Connections"><a href="#"><SupervisorAccountIcon /> <p>Connections</p> </a></div>
            </div>
        </div>
    
        </div>
    );
}

export default Header;