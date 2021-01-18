import React from 'react';
import Aux from  '../../hoc/auxiliary';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
return <Aux>
            <nav className = "navBar">
                  <ul>
                        <li><NavLink to= "/posts" exact
                         activeClassName ="active" 
                         activeStyle ={{color:"red"}}>Home </NavLink></li>
                        {/* <li><NavLink to= {{
                              pathname: "/post",
                              hash:"#submit",
                              search:"?search"

                        } }>Post </NavLink></li> */}
                       <li><NavLink to= "/new-post">Newpost</NavLink></li>
                  </ul>
            </nav>
      </Aux>

}

export default Navbar;