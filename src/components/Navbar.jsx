import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';


function Navbar (){
return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h4><Link to="/" className="title">Flicker's</Link></h4> 
        <div className="links"></div>
        <h4><Link to="/" className="link">Home</Link></h4>
        <h4><Link to="/view" className="link">View</Link></h4>
        <h4><Link to="/create" className="link">Create</Link></h4>

    </nav>
)
}
export default Navbar;