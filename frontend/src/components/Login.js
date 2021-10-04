import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='bg-image'>
            <div className='form2'>
                <h1>Log in</h1>
                <div className='form-container'>
                    <span>Username: </span>
                    <input placeholder='Username'></input>
                    <span>Password: </span>
                    <input placeholder='Password'></input>
                </div>
                <Link to='/trips'><button>Log in!</button></Link>
                <Link to='/'><button>Cancel</button></Link>
            </div>
        </div>
    )
}