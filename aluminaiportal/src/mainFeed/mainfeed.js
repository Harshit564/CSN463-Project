// import Header from '../assests/header';
// import Footer from '../assests/footer';
import './mainfeed.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function MainFeed(){
    return(
        <div>
            {/* <Header /> */}
            <div className="mainFeedBody">
                <div className="feedPosts">
                    <div className="postContainer">
                        <div className="followPost">Follow</div>
                        <div className="postTitle">                        
                        <h2> Title : </h2> 
                        <h4><a href="#">By Author</a></h4>
                        </div>
                        <div className="postContent">
                        <p>loreum lipseums a;e oafasdndca iehdfao efajbeou fah ifbaiefo ahoehf abou hdaofdoahofdaifovaehf ea fiaoefh aodfihaoihed fj</p>   
                        </div>
                    </div>
                    <div className="postContainer">
                        <div className="followPost">Follow</div>
                        <div className="postTitle">                        
                        <h2> Title : </h2> 
                        <h4><a href="#">By Author</a></h4>
                        </div>
                        <div className="postContent">
                        <p>loreum lipseums a;e oafasdndca iehdfao efajbeou fah ifbaiefo ahoehf abou hdaofdoahofdaifovaehf ea fiaoefh aodfihaoihed fj</p>   
                        </div>
                    </div>
                </div>
               
                <div className="profileCard">
                    <div className="profileImage"></div>
                    <div className="profileInnnerCard">
                    <div className="profileData">
                        <h2>Name</h2>
                        <p> Batch 2018-2022 </p>
                        < LinkedInIcon />
                        <GitHubIcon />
                    </div>
                    </div>

                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default MainFeed;