import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar({user}) {
    let loggedIn = "Log in";
    if (user[0]) {
        loggedIn = user[0].firstName +" - Log out";
    };

    let loginLink = loggedIn ? '/' : '/login'

    return (
        <div className='nav-container'>
            <h1>Dreamcation</h1>
            <nav>
                <ul>
                    <NavLink activeClassName="text-white" exact to='/' style={{ textDecoration: 'none' }}><li>Home</li></NavLink>
                    <NavLink activeClassName="text-white" to='/trips' style={{ textDecoration: 'none' }}><li>Trips</li></NavLink>
                    <NavLink activeClassName="text-white" to='/favorites' style={{ textDecoration: 'none' }}><li>Favorites</li></NavLink>
                    <span>||</span>
                    <NavLink activeClassName="text-white" to='/signup' style={{ textDecoration: 'none' }}><li>Sign up</li></NavLink>
                    
                    <NavLink activeClassName="text-white" to={loginLink} style={{ textDecoration: 'none' }}><li>{loggedIn}</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}