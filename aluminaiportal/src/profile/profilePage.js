import './profilePage.css';

function profilePage(){
    return(
        <div>
            <div className="profilePage">
                hi this is profile page
                <div className="profile_page_container">
                    <div className="inner_profile_box">
                        <p><span className="profile_title" >Name :</span>Harsh Pundir </p>
                        <p><span className="profile_title" > Age : </span>20 </p>
                        <p><span className="profile_title" >Gender : </span>M</p>
                        <p><span className="profile_title" >Current Company : </span> UKG</p>
                        <p><span className="profile_title" >Post :  </span>Analyst </p>
                    </div>    
                </div>         
            </div>
        </div>
    );
}

export default profilePage;