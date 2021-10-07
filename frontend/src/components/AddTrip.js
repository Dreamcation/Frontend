import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AddTrip({ setTrips, trips, user, setUpdate, update }) {
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [lengthOfStay, setLengthOfStay] = useState('')
    const history = useHistory()
    // const {user_id} = trips

    function handleSubmit(e) {
        e.preventDefault()
        let user_id = user[0].id
        fetch('http://localhost:9292/trips', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                location,
                image,
                description,
                lengthOfStay,
                user_id
            })
        })
        .then(res => res.json())
        .then((newTrip) => {
            const updatedTrips = [...trips, newTrip];
            setTrips(updatedTrips);
            setUpdate(!update)
        })
        setTitle('');
        setLocation('');
        setImage('');
        setDescription('');
        setLengthOfStay('');
        history.push('/trips')
        // ^redirect does not work
    }

    return (
        <div className='trip-form'>
            <h1>New Trip</h1>
            <form onSubmit={handleSubmit}>
                <p>Give your trip a title!</p>
                <input type='text' value={title} name='title' placeholder='Title here..' onChange={(e) => setTitle(e.target.value)} />
                <p>Where did ya go?</p>
                <input type='text' value={location} name='location' placeholder='Location here..' onChange={(e) => setLocation(e.target.value)} />
                <p>Add an image of your trip?</p>
                <input type='text' value={image} name='image' placeholder='Upload an image..' onChange={(e) => setImage(e.target.value)} />
                <p>Give a description of your trip!</p>
                <input type='text' value={description} name='description' placeholder='Describe your trip..' onChange={(e) => setDescription(e.target.value)} />
                <p>How many days did ya stay?</p>
                <input type='number' value={lengthOfStay} name='name' placeholder='How many days did you stay?' onChange={(e) => setLengthOfStay(e.target.value)} />
                <button type='submit'>Add Trip</button>
            </form>
        </div>
    )
}