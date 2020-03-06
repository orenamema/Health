import React from 'react';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import './App.css';
import DatatablePage from "./components/DatatablePage";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import createProfile from "./components/createProfile";



function App() {
  return (
    <Router>
        <div className="App">
        <Navbar/>
        <br/>
            <Switch>
                <Route exact path="/" component={DatatablePage} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/createprofile" component={createProfile} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
