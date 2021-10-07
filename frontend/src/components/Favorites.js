import React, { useState, useEffect } from 'react'

export default function Favorites({user, favorites, handleRemove, search, setSearch}) {

    return (
        <div>
            <div className='search-container'>
                {user[0] ? <h1>Your favorite trips!</h1> : <h1>Favorited trips!</h1>}
                <input value={search} placeholder="Search by Location...   🔍" onChange={(e) => setSearch(e.target.value)}></input>
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