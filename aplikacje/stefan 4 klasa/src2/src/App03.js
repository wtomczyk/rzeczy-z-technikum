import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App02.css";
import Home from './Home';
import About from './About';
import Products02 from './Products02';

class App extends React.Component {
  render(){
  return (
    <div>
        <div className="app_exc">ćw 02 - react router - nested links</div>
        <div className="app_title"> My application</div>
        <Router>    
            <div className="app_src">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
            </div>
            <Route exact path="/" component={Home} /> 
            <Route path="/about" component={About} />
            <Route path="/products" component={Products02} />

        </Router>
    </div>
    )
  }
}

export default App;
