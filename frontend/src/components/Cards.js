import React, { useState } from 'react'

export default function Cards({ location, desc, length, author, image='http://cdn.cnn.com/cnnnext/dam/assets/210727130709-alaska-matanuska-glacier-2.jpg', id }) {
    
    return (
        <div className='all-trips'>
            <div className='left-image'>
                <div className='img'>
                    <img src={image}/>
                </div>
                <div className='text' id={id}>
                    <h1>{location}</h1>
                    <p>{desc}</p>
                    <button>Favorite</button>
                    <div className='bottom-content'>
                        <p className='length'>Length of Stay: <span>{length}</span> days</p>
                        <p className='author'>Author: {author}</p>
                    </div>
                </div>
            </div>    
        </div>
    )
}