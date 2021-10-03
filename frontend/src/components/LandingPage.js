import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <div>
            <div className='landing-container'>
                <h1>Welcome to</h1><br/>
                <h1 className='title'>Dreamcation</h1>
            </div>
            <div className='landing-info'>
                    <img className="landing-img" src="http://cdn.cnn.com/cnnnext/dam/assets/210727130709-alaska-matanuska-glacier-2.jpg" />
                <div>
                    <h1 className='p-title'>Welcome to Dreamcation!</h1>
                    <p className='p-content'>
                        Your one place stop to find your dream vacation location and a great place to share your previous trips with others, as well as manage your previous trips, your upcoming trips, and your own Dreamcations! Please
                        <Link to='/signup'>
                            <span>sign up</span> 
                        </Link>    
                        or 
                        <Link to='/login'>
                            <span>log in</span> 
                        </Link>
                        to start your vacation planning!
                    </p>
                    <Link to='/signup'>
                        <button className='cta-button'>Sign up</button>
                    </Link>
                    <Link to='/login'>
                        <button>Log in</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}