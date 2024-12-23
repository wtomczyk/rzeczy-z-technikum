import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App02.css";
import Home from './Home';
import About from './About';
import All from './All'
import students from "./students.json"

class App extends React.Component {
  render(){
  return (
    <div>
        <div className="app_exc">ćw 03 - react router - pass data to class</div>
        <div className="app_title"> Students</div>
        <Router>    
            <div className="app_src">
                <Link to="/">All students</Link>
                <Link to="/about">Men</Link>
                <Link to="/products">Women</Link>
            </div>
            <Route exact path="/" component={All} /> 
            <Route path="/about" component={About} />
            <Route path="/products" component={Home} />
        </Router>
    </div>
    )
  }
}

export default App;
