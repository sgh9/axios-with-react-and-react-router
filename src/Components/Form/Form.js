import React,{Component} from 'react';
import './Form.css';
import axios from 'axios';
//import {Redirect } from 'react-router';

class Form extends Component {

state = {
     title:'',
     content:'',
     Authore:'john',
     errorOnLoading:false,
     // submitted:null,

}

onChangeHandler = (e)=> {
const {name,value} = e.target ;

this.setState({
[name]:value
})

}

postDataHandler = (e)=> {
e.preventDefault();

const data = {...this.state };
axios.post("/posts/",data).then(
     (response)=> {
          console.log(response);
          this.props.history.push("/posts");

          //replace,push
          // this.setState({submitted:true})
     }
).catch ((error => {
     console.log(error);
}))

}


render(){

//    let submitted =null;
//    if(this.state.submitted) {
//         submitted = <Redirect to ="/posts"/>
//    }
     return <div className ="form-container">
     <form>
     {/* {submitted} */}
          <h2>New post</h2>
       <FormControls change = {this.onChangeHandler} 
       name ="title" 
       value = {this.state.title} />  

       <FormControls name ="content"
       change = {this.onChangeHandler}
        value = {this.state.content}  />
       <FormSubmit click = {this.postDataHandler}/>
     </form>
</div> 
}
}

const FormControls = (props) => {
       return <div className= "formControls">
        <label>{props.title}</label>

        <input  
        type = 'text' onChange  = {props.change} 
         name  = {props.name} 
        value = {props.value}  />
       </div>
}



const FormSubmit = (props) => <button onClick= {props.click} 
className ="btn btn-submit">
     Post</button>
     



export default Form;