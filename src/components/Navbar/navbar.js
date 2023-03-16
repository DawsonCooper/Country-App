import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
export default function Navbar(props){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand">News</div>
                <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarNavAltMarkup" ariaControls="navbarNavAltMarkup" ariaExpanded="false" ariaLabel="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/search">Search</Link>
                  </div>
                </div>
            </nav>
        </div>
    )
}