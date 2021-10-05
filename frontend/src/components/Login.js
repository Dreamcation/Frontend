import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Login({logIn}) {
    const blankForm = {username: "", password: ""}
    const [formData, setFormData] = useState(blankForm)

    function formState(e) {
        let name = e.target.name;
        let value = e.target.value;
        setFormData({...formData, [name]: value});
    }

    return (
        <div className='bg-image'>
            <div className='form2'>
                <h1>Log in</h1>
                <div className='form-container'>
                    <span>Username: </span>
                    <input placeholder='Username' name='username' value={formData.username} onChange={(e) => formState(e)}></input>
                    <span>Password: </span>
                    <input placeholder='Password' name='password' value={formData.password} onChange={(e) => formState(e)}></input>
                </div>
                <Link to='/trips'><button onClick={(e) => logIn(e, formData)}>Log in!</button></Link>
                <Link to='/'><button>Cancel</button></Link>
            </div>
        </div>
    )
}