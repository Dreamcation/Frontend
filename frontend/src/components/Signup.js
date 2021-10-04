import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <div className='bg-image'>
            <div className='form'>
                <h1>Sign up</h1>
                <div className='form-container'>
                    <span>First Name: </span>
                    <input placeholder='First Name'></input>
                    <span>Last Name: </span>
                    <input placeholder='Last Name'></input>
                    <span>Username: </span>
                    <input placeholder='Username'></input>
                    <span>Email Address: </span>
                    <input placeholder='Email Address'></input>
                    <span>Password: </span>
                    <input placeholder='Password'></input>
                </div>
                    <Link to='/trips'><button>Sign up!</button></Link>
                    <Link to='/'><button>Cancel</button></Link>
            </div>
        </div>
    )
}