import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Sell from "./components/Sell/Sell";
import Buy from "./components/Buy/Buy";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Mission from "./components/Mission/Mission";

function App() {
  return (
    <Router>
      <div className="App">  
        <header className="App-header">
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/buy" component={Buy}></Route>
          <Route exact path="/sell" component={Sell}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/login" component={SignIn}></Route>
          <Route exact path="/mission" component={Mission}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
