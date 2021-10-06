import React, { useState } from 'react'

export default function Cards({ trip, addFavorite, user, favorites }) {
    const {location, description, lengthOfStay, name, image='http://cdn.cnn.com/cnnnext/dam/assets/210727130709-alaska-matanuska-glacier-2.jpg', id} = trip;    
    const [favoriteButton, setFavoriteButton] = useState(false)

    let author = name;
    let length = lengthOfStay;
    // let favoriteButton = "Favorite";

    // if (favorites.filter(favorite => favorite.title == trip.title)) {
    //     favoriteButton = 'Favorited'
    // }
    

    function handleFavorite(e) {
        e.preventDefault();
        addFavorite(trip);
        setFavoriteButton(!favoriteButton)
    }

    // ternary doesn't work, but will add in the className
    // let className = {{id} % 2 !==0 ? 'left-image' : 'right-image'}

    return (
        <div className='all-trips'>
            {favoriteButton ? 
            null :
            <div className='left-image'>
                <div className='img'>
                    <img src={image}/>
                </div>
                <div className='text' id={id}>
                    <h1>{location}</h1>
                    <p>{description}</p>
                    {user[0] ? <button onClick={handleFavorite}>Favorite</button> : null}
                    <div className='bottom-content'>
                        <p className='length'>Length of Stay: <span>{length}</span> days</p>
                        <p className='author'>Author: {author}</p>
                    </div>
                </div>
            </div>    
            }
        </div>
    )
}