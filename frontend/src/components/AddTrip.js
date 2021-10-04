import React, { useState } from 'react'

export default function AddTrip({ handleAdd, trips }) {
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [lengthOfStay, setLengthOfStay] = useState('')
    const {user_id} = trips

    function handleSubmit(e) {
        e.preventDefault()

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
                user_id,
            })
        })
        .then(res => res.json())
        .then((newTrip) => handleAdd(newTrip))

        setTitle('')
        setLocation('')
        setImage('')
        setDescription('')
        setLengthOfStay('')
    }

    return (
        <div>
            <h1>New Trip</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={title} name='title' placeholder='Your title..?' onChange={(e) => setTitle(e.target.value)} />
                <input type='text' value={location} name='location' placeholder='Your location..?' onChange={(e) => setLocation(e.target.value)} />
                <input type='text' value={image} name='image' placeholder='Your image..?' onChange={(e) => setImage(e.target.value)} />
                <input type='text' value={description} name='description' placeholder='Your description..?' onChange={(e) => setDescription(e.target.value)} />
                <input type='number' value={lengthOfStay} name='name' placeholder='Your length..?' onChange={(e) => setLengthOfStay(e.target.value)} />
                <button type='submit'>Add Trip</button>
            </form>
        </div>
    )
}