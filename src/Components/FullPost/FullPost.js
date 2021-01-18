
import React, { Component } from 'react';
import './FullPost.css';
import axios from '../../axios';


class FullPosts extends Component {

      state = {
            postLoaded: null,
            somethingWentwrong:false


      }


      componentDidMount(prevProps, prevState) {
            this.loadPost();
            
      }


      componentDidUpdate(prevProps, prevState) {
            this.loadPost();
            
      }


      loadPost = ()=> {
          let num =0;
            if (this.props.match.params.id ) {

                  if (!this.state.postLoaded ||(this.state.postLoaded 
                        && this.state.postLoaded.id !==this.props.match.params.id)) {

             axios.get("/posts/" + this.props.match.params.id).then
      ((response) => {
                                    this.setState({
                                          postLoaded: response.data
                                    }); 
                              }).catch((error)=> {
                                  this.setState({somethingWentwrong:true})
                              })
                  }        console.log('num',num+1);
            } 
 
      }
      render() {
          

            let data = <h2>select post</h2>;
            if (this.props.id) {
                  <h2> post loading...</h2>
            }
            if(this.state.somethingWentwrong){
                  data = <h2>something went wrong</h2>  
            }

            if (this.state.postLoaded) {
                  data = (
                        <div className='fullPost'>
                              <h2> {this.state.postLoaded.title}</h2>
                              <p>{this.state.postLoaded.body}</p>
                              <div className='post-edit'>
                                    <button className="btn btn-edit">edit</button>
                              </div>
                        </div>
                      
                  );
            }
            return (
                  <div className="center ">
                        {data}
                  </div>
            )


      }

}

export default FullPosts;  