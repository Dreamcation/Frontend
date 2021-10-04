import React, { useState } from 'react'

export default function Favorites() {
    return (
        <div>
            <div className='search-container'>
                    <h1>Your favorite trips!</h1>
                    <input placeholder="Search by Location...   🔍"></input>
            </div>
            <div className='favorite-columns'>
                <div className='visited'>
                    <h1>Visited</h1>
                    <div className='card'>
                        <img src='https://www.teahub.io/photos/full/224-2243561_pretty-outdoor-backgrounds.jpg' />
                        <h2>Everglade National Park</h2>
                        <button>Remove</button>
                    </div>
                </div>
                <div className='visited'>
                    <h1>Visiting</h1>
                    <div className='card'>
                        <img src='https://www.teahub.io/photos/full/224-2243561_pretty-outdoor-backgrounds.jpg' />
                        <h2>Everglade National Park</h2>
                        <button>Remove</button>
                    </div>
                </div>
                <div className='visited'>
                    <h1>Dreamcation</h1>
                    <div className='card'>
                        <img src='https://www.teahub.io/photos/full/224-2243561_pretty-outdoor-backgrounds.jpg' />
                        <h2>Everglade National Park</h2>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}