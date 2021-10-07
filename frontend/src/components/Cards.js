import React from 'react'

export default function Cards({ trip, addFavorite, user, favBttn }) {
    const {location, description, lengthOfStay, name, image, id} = trip;    

    let author = name;
    let length = lengthOfStay;
    
    function handleFavorite(e) {
        e.preventDefault();
        if (favBttn !== "Favorited"){
            addFavorite(trip);
        }
    }

    // ternary doesn't work, but will add in the className
    // let className = {{id} % 2 !==0 ? 'left-image' : 'right-image'}
    return (
        <div className='all-trips'>
            <div className='left-image'>
                <div className='img'>
                    <img alt={location} src={image}/>
                </div>
                <div className='text' id={id}>
                    <h1>{location}</h1>
                    <p>{description}</p>
                    {user[0] ? <button onClick={handleFavorite}>{favBttn}</button> : null}
                    <div className='bottom-content'>
                        <p className='length'>Length of Stay: <span>{length}</span> days</p>
                        <p className='author'>Author: {author}</p>
                    </div>
                </div>
            </div>    
        </div>
    )
}