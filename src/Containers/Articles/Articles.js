import React,{Component} from 'react';
import axios from 'axios';
import Posts from '../../Components/Posts/Posts';
// import FullPosts from '../../Components/FullPost/FullPost';
import Aux from '../../hoc/auxiliary';



class Articles extends Component {
      state = {
            posts :[]  ,
            selectedPost :null
      }
      _isMounted = true;

componentWillUnmount() {
            this._isMounted = false;
 }

componentDidMount() {
       axios.get("/posts")
       .then(response => {
            if (this._isMounted) {

                  const posts = response.data.slice(0,5);
                  const updatedPosts = posts.map(post => {
                        return {
                              ...post,
                              Author:"sangamesh"
                        }
              });
          
                      this.setState({
                            posts: updatedPosts
                      })
            }
       } );
 }

handlePostClick = (id) => {
     this.setState({selectedPost:id});
     this.props.history.push({ pathname: "/posts/" + id})

// console.log("push",this.props,id);

}
      render() { 
           
            return <Aux>
            {/* <FullPosts id = {this.state.selectedPost}/>     */}
            <Posts 
            click = {this.handlePostClick}
            posts = {this.state.posts}/>
             </Aux>
      }
}
 
export default Articles;
