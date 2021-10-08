import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'

export default function Trips({trips, addFavorite, user, favorites, searchTrips, setSearchTrips }) {

    const cards = trips.map(trip => {
        let favBttn = "Favorite";
        
        if (favorites[0]){
            favorites.map(favorite => {
                if (favorite.location === trip.location) {
                    favBttn = "Favorited";
                } 
                return favBttn;
        })};

        return (
            <Cards 
                trip={trip}
                favorites={favorites}
                addFavorite={addFavorite}
                favBttn={favBttn}
                user={user}
                key={trip.location}
            />
        )
    })

    return (
        <div className='trip-container'>
            <div className='search-container'>
                <h1>Check out these trips!</h1>
                <input value={searchTrips} placeholder="Search by Location...   🔍" onChange={(e) => setSearchTrips(e.target.value)}></input>
                {user[0] ? <Link to='/trips/new'><button>Add Trip</button></Link> : null}
            </div>
            {cards}
        </div>
    )
}