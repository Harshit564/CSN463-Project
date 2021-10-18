import './header.css';

function Header(){
    return(
        <div className="Header">
        <div className="top-bar">
            <div className="Main-Logo">AlPort</div>
            <div className="nav-mid-list">
                <div className="nav-mid-list-item" title="Link1"><a href="#"> Link 1 </a></div>
                <div className="nav-mid-list-item" title="Link2"><a href="#"> Link 1 </a></div>
                <div className="nav-mid-list-item" title="Link3"><a href="#"> Link 1 </a></div>
                <div className="nav-mid-list-item" title="Link4"><a href="#"> Link 1 </a></div>
            </div>
        </div>
    
        </div>
    );
}

export default Header;