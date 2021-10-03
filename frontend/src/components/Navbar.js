import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='nav-container'>
            <h1>Dreamcation</h1>
            <nav>
                <ul>
                    <Link to='/' style={{ textDecoration: 'none' }}><li>Home</li></Link>
                    <Link to='/trips' style={{ textDecoration: 'none' }}><li>Trips</li></Link>
                    <Link to='/favorites' style={{ textDecoration: 'none' }}><li>Favorites</li></Link>
                    <span>||</span>
                    <Link to='/signup' style={{ textDecoration: 'none' }}><li>Sign up</li></Link>
                    <Link to='/login' style={{ textDecoration: 'none' }}><li>Log in</li></Link>
                </ul>
            </nav>
        </div>
    )
}