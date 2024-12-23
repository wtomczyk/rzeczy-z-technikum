import React from 'react';
import './All.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import students from "./students.json";
import Aaa from "./Aaa";

class Women extends React.Component {
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
        for(var a = 0; a< students.length;a++){
            var qwerty = students[a].name.split(" ")[0].slice(-1)
            if(qwerty=="a"){
                tab.push(students[a])
            }
        }
        console.log(tab)
        var tab2 = []
        //faceci maja sami byc w tab
        for(var a=0;a<tab.length;a++){
            var classa="aaa_"+a
            var key = "ccc_"+a
            tab2.push(<li><Link to="/Women/student" id={classa} className="uczniowie_li" key={key} onClick={this.uczen}>{tab[a].name}</Link></li>)
        }
      return (
        <div>
            <div className="group">Mężczyźni</div> 
            <Router>    
                <ul className="uczniowie_ul">{tab2}</ul>
                <Route exact path="/Women/student"
                    component={()=><Aaa anyprop={this.state.click} />}/>        
                </Router> 
        </div>
        )
    }
}
export default Women;