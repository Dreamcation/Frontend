import React from 'react'

export default function Favorites({user, favorites, handleRemove, searchFavs, setSearchFavs, isLoggedIn}) {

    return (
        <div>
            <div className='search-container'>
                {isLoggedIn ? <h1>{user[0].firstName}'s favorite trips!</h1> : <h1>Favorited trips!</h1>}
                <input value={searchFavs} placeholder="Search by Location...   🔍" onChange={(e) => setSearchFavs(e.target.value)}></input>
            </div>
            <div className='favorite-columns'>
                <div className='visited'>
                    {favorites.map(favorite => {
                        return (
                            <div className='card' id={favorite.id} key={favorite.id}>
                                <img alt={favorite.location} src={favorite.image} />
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