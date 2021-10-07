import React from 'react'
import {NavLink, useHistory } from 'react-router-dom'

export default function Navbar({user, logOut}) {
    const history = useHistory()

    let loggedIn = "Log in";
    if (user[0]) {
        loggedIn = user[0].firstName +" - Log out";
    };

    function handleLogOut(e){
        e.preventDefault();
        user[0] !== undefined ? logOut(e) : history.push('/login')
        // ^does not work      
    }


    return (
        <div className='nav-container'>
            <h1>Dreamcation</h1>
            <nav>
                <ul>
                    <NavLink activeClassName="text-white" exact to='/' style={{ textDecoration: 'none' }}><li>Home</li></NavLink>
                    <NavLink activeClassName="text-white" to='/trips' style={{ textDecoration: 'none' }}><li>Trips</li></NavLink>
                    <NavLink activeClassName="text-white" to='/favorites' style={{ textDecoration: 'none' }}><li>Favorites</li></NavLink>
                    <span>||</span>
                    {loggedIn === 'Log in' ? 
                    <NavLink activeClassName="text-white" to='/signup' style={{ textDecoration: 'none' }}><li>Sign up</li></NavLink> : null}                    
                    <NavLink activeClassName="text-white" to='/login' style={{ textDecoration: 'none' }}><li onClick={handleLogOut}>{loggedIn}</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}