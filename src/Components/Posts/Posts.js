import React from 'react';
import './Posts.css';
import {withRouter} from 'react-router-dom';


const Posts = (props) => {
    
       let data = props.posts.map(post => {

      
        return(

<Post key = {post.id}
        title = {post.title}  
        clicked = { ()=>props.click(post.id)}
        author = {post.Author}/>
)
 })
      

      return <div className="posts">
       {data}
                
      </div>
//     </Link>  
}

const Post = (props) => {
     
      return (
           
      <div  
       className="post" onClick = {props.clicked}>

            <h4  className="post-title">
            {props.title} - <span 
            style = {{color:"#ccc"}}>
                  {props.author}</span>
            </h4>
           
      </div>

      )
}


export default withRouter(Posts);


