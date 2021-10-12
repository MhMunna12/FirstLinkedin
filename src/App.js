import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllHome from './component/AllHome/AllHome';
import Contact_us from './component/Contact_us/Contact_us';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Pricing from './component/Pricing/Pricing';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = '/'>
            <AllHome/>
          </Route>
          <Route  path = '/home'>
            <AllHome/>
          </Route>
          <Route path = '/contact'>
            <Contact_us/>
          </Route>
          <Route path = '/login'>
            <Login/>
          </Route>
          <Route path = '/register'>
            <Register/>
          </Route>
          <Route path = '/price'>
            <Pricing/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
