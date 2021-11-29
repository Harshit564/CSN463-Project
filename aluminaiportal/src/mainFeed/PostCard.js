import React from 'react';
import './mainfeed.css';


function PostCard(props) {
    return (
        <div className="postContainer">
                        {console.log(props.props.name) }
                        <div className="followPost">Follow</div>
                        <div className="postTitle">                        
                        <h2> Title : {props.props.title} </h2> 
                        <h4><a href="#">By {props.props.name}</a></h4>
                        </div>
                        <div className="postContent">
                        <p>loreum lipseums a;e oafasdndca iehdfao efajbeou fah ifbaiefo ahoehf abou hdaofdoahofdaifovaehf ea fiaoefh aodfihaoihed fj {props.props.postdescp}</p>   
                        </div>
                    </div>
        
    )
}

export default PostCard