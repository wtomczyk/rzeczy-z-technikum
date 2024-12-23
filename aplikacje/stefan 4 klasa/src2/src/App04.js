import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App02.css";
import Men from './Men';
import Women from './Women';
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
                <Link to="/Men">Men</Link>
                <Link to="/Women">Women</Link>
            </div>
            <Route exact path="/" component={All}  /> 
            <Route path="/Men" component={Men} />
            <Route path="/Women" component={Women} />
        </Router>
    </div>
    )
  }
}

export default App;
