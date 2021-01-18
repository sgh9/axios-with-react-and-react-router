import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Form/Form';

import Articles from './Containers/Articles/Articles';
import {BrowserRouter, Redirect} from 'react-router-dom';
import {Route,Switch} from 'react-router-dom';
import FullPosts from './Components/FullPost/FullPost';


function App() {

const footerStyle = {
                     backgroundColor:'#111',
                     color:'#fff',
                     textAlign :'center',
                     padding :'0.5rem'


                    }
  return (

    <div className="App">
     <BrowserRouter>
      <header className="App-header">
        <Navbar /> 
      </header>
      <main>
          <Switch>
            <Route path="/posts" exact
              component={Articles} />

            <Route path="/new-post" exact
              component={Form} />

            <Route path="/posts/:id" exact
              component={FullPosts} />
            <Redirect from ="/" to ="/posts"/>  

            <Route render={() => <h2>Not found</h2>} />
          </Switch>
      </main>
      </BrowserRouter>
      <footer style={footerStyle}>
        &copy;
     </footer>
    </div>
  );
}

export default App;
