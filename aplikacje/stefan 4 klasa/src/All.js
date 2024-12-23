import React from 'react';
import './All.css';
import { BrowserRouter as Routing, Route, Link } from "react-router-dom";
import students from "./students.json";
import Aaa from "./Aaa";

class All extends React.Component {
    render() {
        var tab=[]
        for(var a=0;a<students.length;a++){
            var b = students[a].name.split(" ")[0]
            console.log(b)
        }
        
      return (
        <div>
            {
                console.log(students)
            }
            <div className="group">wszyscy</div>    
           
        </div>
        )
    }
}
export default All;