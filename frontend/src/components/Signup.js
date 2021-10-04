import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default function Signup() {

    function handleClick() {
        <Redirect to ='/trips' />
    }

    return (
        <div className='bg-image'>
            <div className='form'>
                <h1>Sign up</h1>
                <form>
                <div className='form-container'>
                    <span for="firstName">First Name: </span>
                    <input placeholder='First Name' type='text' name="firstName" required></input>
                    <span for="lastName">Last Name: </span>
                    <input placeholder='Last Name' name='lastName' required></input>
                    <span for="username">Username: </span>
                    <input placeholder='Username' name="username" required></input>
                    <span for="email">Email Address: </span>
                    <input placeholder='Email Address' name="email" required></input>
                    <span for="password">Password: </span>
                    <input type='password' placeholder='Password' name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input>
                    <div className='form-button'>
                        <Link to='/trips'><button onClick={handleClick} type='submit'>Sign up!</button></Link>
                        <button><Link to='/'>Cancel</Link></button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}