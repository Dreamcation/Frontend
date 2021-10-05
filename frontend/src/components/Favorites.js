import React, { useState, useEffect } from 'react'

export default function Favorites({user, favorites, handleRemove}) {
    // const [favorites, setFavorites] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:9292/favorites')
    //     .then(res => res.json())
    //     .then(setFavorites)
    // }, [])

    console.log(favorites);

    return (
        <div>
            <div className='search-container'>
                <h1>Your favorite trips!</h1>
                <input placeholder="Search by Location...   🔍"></input>
            </div>
            <div className='favorite-columns'>
                <div className='visited'>
                    {favorites.map(favorite => {
                        return (
                            <div className='card' id={favorite.id}>
                                <img src={favorite.image} />
                                <h2>{favorite.title}</h2>
                                <button onClick={handleRemove}>Remove</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}