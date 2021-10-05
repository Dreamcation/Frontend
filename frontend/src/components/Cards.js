import React, { useState } from 'react'

export default function Cards({ location, desc, length, author, image='http://cdn.cnn.com/cnnnext/dam/assets/210727130709-alaska-matanuska-glacier-2.jpg', id, addFavorite }) {
    function handleFavorite(e) {
        e.preventDefault();
        // This is not setup yet
        debugger;
        addFavorite();
    }

    // ternary doesn't work, but will add in the className
    let className = {id} % 2 !==0 ? 'left-image' : 'right-image'

    return (
        <div className='all-trips'>
            <div className={className}>
                <div className='img'>
                    <img src={image}/>
                </div>
                <div className='text' id={id}>
                    <h1>{location}</h1>
                    <p>{desc}</p>
                    <button onClick={handleFavorite}>Favorite</button>
                    <div className='bottom-content'>
                        <p className='length'>Length of Stay: <span>{length}</span> days</p>
                        <p className='author'>Author: {author}</p>
                    </div>
                </div>
            </div>    
        </div>
    )
}