// import Header from '../assests/header';
// import Footer from '../assests/footer';
import React,{ useState } from 'react';
import './mainfeed.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PostCard from './PostCard';

// let arrayHeader = ["Name","Title","PostDescp"];
let arrayData = [];
    arrayData[0] = { name : "Sigit", title : "Indonesia", postdescp : "sigit@gmail.com"};
    arrayData[1] = { name : "Joana", title : "Brazil", postdescp : "Joana@gmail.com"};
    arrayData[2] = { name : "Albert", title : "Mexico", postdescp : "albert@gmail.com"};
    arrayData[3] = { name : "Nuuna", title : "South Korea", postdescp : "Nuuna@gmail.com"};
    arrayData[4] = { name : "Aroon", title : "Irlandia", postdescp : "aroon@gmail.com"};
    
function MainFeed(){
    const [datas, setData] = useState(arrayData);
    return(
        <div>
            <div className="mainFeedBody">
                <div className="feedPosts">

                    { datas.map(data => (
                        <PostCard props={data} />
                    ))}
                    {console.log(datas[0].name)} 
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
        </div>
    );
}

export default MainFeed;







// {/* <div className="postContainer">
//                         <div className="followPost">Follow</div>
//                         <div className="postTitle">                        
//                         <h2> Title : </h2> 
//                         <h4><a href="#">By Author</a></h4>
//                         </div>
//                         <div className="postContent">
//                         <p>loreum lipseums a;e oafasdndca iehdfao efajbeou fah ifbaiefo ahoehf abou hdaofdoahofdaifovaehf ea fiaoefh aodfihaoihed fj</p>   
//                         </div>
//                     </div> */}