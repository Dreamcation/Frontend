import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function Signup({ addUser, logOut, isLoggedIn }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        if (isLoggedIn){logOut(e)}
        fetch('http://localhost:9292/users', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                username,
                password
            })
        })
        .then(res => res.json())
        .then(newUser => addUser(newUser))
        
        setFirstName('')
        setlastName('')
        setusername('')
        setpassword('')
        history.push('/trips')
    }
    
    return (
        <div className='bg-image'>
            <div className='form'>
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <span for="firstName">First Name: </span>
                    <input placeholder='First Name' value={firstName} type='text' name="firstName" required onChange={(e) => setFirstName(e.target.value)} />
                    <span for="lastName">Last Name: </span>
                    <input placeholder='Last Name' value={lastName} name='lastName' required onChange={(e) => setlastName(e.target.value)} />
                    <span for="username">Username: </span>
                    <input placeholder='Username' value={username} name="username" required onChange={(e) => setusername(e.target.value)} />
                    <span for="password">Password: </span>
                    <input type='password' value={password} placeholder='Password' name="password" onChange={(e) => setpassword(e.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                    <div className='form-button'>
                        <button type='submit'>Sign up!</button>
                        <button><Link to='/'>Cancel</Link></button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

// function addUser(user) {
  //   let info = {
  //     firstName:  user.firstName,
  //     lastName: user.lastName,
  //     username: user.username,
  //     password: user.password
  //   }

  //   fetch('http://localhost:9292/users', {
  //     method: "POST",
  //     redirect: "follow",
  //     headers: {
  //       'Content-Type' : 'application/json'
  //     },
  //     body: JSON.stringify({info})
  //   })
  //   .then(res => res.json())
  //   .then(users => {
  //     setUser(users);
  //   })
  // }