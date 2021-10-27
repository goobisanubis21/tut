import React from 'react';
import { Link } from 'react-router-dom';
import './navComp.css';

const NavComp = () => {
    return (
        <div>
            <div className='navBar-container'>
            <nav className="navbar navbar-expand-lg navbar-light bg">
                <Link to='/'>
                    <div className="navbar-brand">
                        <img className='nav-logo' alt='logo' src='https://assets.site-static.com/userFiles/685/image/a_plus.jpg'></img>
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
                        <li className="nav-item">
                            <Link to='/mission'><div className="nav-link">Our Mission</div></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact'><div className="nav-link">Contact Us</div></Link>
                        </li>
                        <div className='signup-container'>
                            <Link to='/signup'><button className='signup-btn'>Sign Up</button></Link>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
        </div>
    )
}

export default NavComp
