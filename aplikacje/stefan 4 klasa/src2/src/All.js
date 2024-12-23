import React from 'react';
import './All.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import students from "./students.json";
import Aaa from "./Aaa";

class All extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:students,
            click:""
        }
        this.uczen = this.uczen.bind(this);
    }
    uczen(event) {
        console.log(event.target.id)
        var info = this.state.data[event.target.id.split("_")[1]]
        this.setState({
            click:info
        });
    }
    render() {
        var tab=[]
        for(var a=0;a<this.state.data.length;a++){
            var classa="aaa_"+a
            var key = "bbb_"+a
            tab.push(<li><Link to="/student" id={classa} className="uczniowie_li" key={key} onClick={this.uczen}>{this.state.data[a].name}</Link></li>)
        }
      return (
        <div>
            <div className="group">Wszyscy</div> 
            <Router>    
                <ul className="uczniowie_ul">{tab}</ul>
                <Route  exact path="/student"
                    component={()=><Aaa anyprop={this.state.click} />}/>        
                </Router> 
        </div>
        )
    }
}
export default All;