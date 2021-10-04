import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
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
                    <NavLink activeClassName="text-white" to='/login' style={{ textDecoration: 'none' }}><li>Log in</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}