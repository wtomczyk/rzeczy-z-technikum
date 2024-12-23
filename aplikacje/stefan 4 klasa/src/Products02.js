import React from 'react';
import './Products02.css';
import { BrowserRouter as Routing, Route, Link } from "react-router-dom";

const Products02 = ({ match }) => (

    <div>
        {
            console.log(match)
        }

        <div className="products_cont">PRODUCTS</div> 
        <ul>
            <li><Link to={`${match.url}/a`}>link to page a</Link></li>
            <li><Link to={`${match.url}/b`}>link to page b</Link></li>
            <li><Link to={`${match.url}/c`}>link to page c</Link></li>
        </ul>     

        <Route path={`${match.url}/:prodId`} component={MyComp} />

    </div>

)

const MyComp = ({ match }) => (

   <div className="products_comp">
        param: {match.params.prodId}
   </div>
);

export default Products02;