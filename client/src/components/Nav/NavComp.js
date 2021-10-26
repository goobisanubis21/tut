import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './navComp.css';

const NavComp = () => {
    return (
        <div>
            <div className='navBar-container'>
            <nav className="navbar navbar-expand-lg navbar-light bg">
                <Link to='/'>
                    <div className="navbar-brand">
                        <img className='nav-logo' alt='logo' src=''></img>
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/'><div className="nav-link">Home</div></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </div>
    )
}

export default NavComp
