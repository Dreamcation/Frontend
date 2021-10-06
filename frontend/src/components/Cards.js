import React, { useState } from 'react'

export default function Cards({ trip, addFavorite, user }) {
    const {location, desc, lengthOfStay, name, image='http://cdn.cnn.com/cnnnext/dam/assets/210727130709-alaska-matanuska-glacier-2.jpg', id} = trip;    
    let author = name;
    let length = lengthOfStay;


    function handleFavorite(e) {
        e.preventDefault();
        // This is not setup yet
        addFavorite(trip);
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
                    <p>{trip.description}</p>
                    {user[0] ? <button onClick={handleFavorite}>Favorite</button> : null}
                    <div className='bottom-content'>
                        <p className='length'>Length of Stay: <span>{length}</span> days</p>
                        <p className='author'>Author: {author}</p>
                    </div>
                </div>
            </div>    
        </div>
    )
}