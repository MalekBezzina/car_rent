import React from 'react';
import Navbar from './component/NavBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Info from './component/main';
import About from './component/about';
import Contact from './component/contact';
import './component/main.css';
import './App.css';
import './component/contact.css';
import './component/about.css';

function App() {
  return (
    
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path='/' component={Info}  />
            <Route path='/About' component={About} />
            <Route path='/Contact' component={Contact} />
          </Switch>
      </Router>
      
      
      
    </>
    
    
  );
}

export default App;
