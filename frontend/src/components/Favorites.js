import React, { useState, useEffect } from 'react'

export default function Favorites({user, favorites, handleRemove}) {

    return (
        <div>
            <div className='search-container'>
                {user[0] ? <h1>Your favorite trips!</h1> : <h1>Favorited trips!</h1>}
                <input placeholder="Search by Location...   🔍"></input>
            </div>
            <div className='favorite-columns'>
                <div className='visited'>
                    {favorites.map(favorite => {
                        return (
                            <div className='card' id={favorite.id}>
                                <img src={favorite.image} />
                                <h2>{favorite.title}</h2>
                                {user[0] ? <button onClick={handleRemove}>Remove</button> : null}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}