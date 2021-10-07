import React, {useState, useEffect} from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'

export default function Trips({trips, addFavorite, user, favorites, searchTrips, setSearchTrips }) {

    const cards = trips.map(trip => {
        let favBttn = "Favorite";
        
        if (favorites[0]){
            favorites.map(favorite => {
                if (favorite.location === trip.location) {
                    return favBttn = "Favorited";
                } 
        })};

        return (
            <Cards 
                key={trip.id}
                trip={trip}
                favorites={favorites}
                addFavorite={addFavorite}
                favBttn={favBttn}
                user={user}
            />
        )
    })

    return (
        <div className='trip-container'>
            <div className='search-container'>
                <h1>Check out these trips!</h1>
                <input value={searchTrips} placeholder="Search by Location...   🔍" onChange={(e) => setSearchTrips(e.target.value)}></input>
                <Link to='/trips/new'><button>Add Trip</button></Link> 
            </div>
            {cards}
        </div>
    )
}
{/* <div className='all-trips'>
    <div className='left-image'>
        <div className='img'>
            <img src="https://www.teahub.io/photos/full/224-2243561_pretty-outdoor-backgrounds.jpg"/>
        </div>
        <div className='text'>
            <h1>Trip Name</h1>
            <p>
                This is what we did on our trip, it was a lot of
                fun, we enjoyed it, we really can’t wait to go back
                we met some new friends, and took some 
                amazing pictures
            </p>
            <button>Favorite</button>
            <div className='bottom-content'>
                <p 
                    className='length'>Length of Stay: <span>5</span> days
                </p>
                <p className='author'>Author: Billy</p>
            </div>
        </div>
    </div>
    <div className='right-image'>
        <div className='img'>
            <img src="https://www.teahub.io/photos/full/224-2243561_pretty-outdoor-backgrounds.jpg"/>
        </div>
        <div className='text'>
            <h1>Trip Name</h1>
            <p>
                This is what we did on our trip, it was a lot of
                fun, we enjoyed it, we really can’t wait to go back
                we met some new friends, and took some 
                amazing pictures
            </p>
            <button>Favorite</button>
            <div className='bottom-content'>
                <p 
                    className='length'>Length of Stay: <span>5</span> days
                </p>
                <p className='author'>Author: Billy</p>
            </div>
        </div>
    </div>
</div> */}