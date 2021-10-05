import './App.css';
import { Switch, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Favorites from './components/Favorites';
import Trips from './components/Trips'
import LandingPage from './components/LandingPage'
import AddTrip from './components/AddTrip'

function App() {
  const [trips, setTrips] = useState([])
  const [user, setUser] = useState([])
  const [favorites, setFavorites] = useState([])
  const [update, setUpdate] = useState(false)

  // all fetches are here, feel free to update if needed
  function getTrips() {
      fetch('http://localhost:9292/trips')
      .then(res => res.json())
      .then(setTrips)
  }

  function getFavorites(user) {
    if (user[0]) {
      let id = user[0].id;
      fetch(`http://localhost:9292/favorites/user/${id}`)
      .then(res => res.json())
      .then(setFavorites)
    } else {
      fetch('http://localhost:9292/favorites')
      .then(res => res.json())
      .then(setFavorites)
  }}

  // grabs the user that is logged on and set's it to user state
   function userLoggedOn () {
    fetch('http://localhost:9292/login')
    .then(res => res.json())
    .then(setUser)
  } 

  useEffect(() => {
    getTrips();
  }, [user])

  useEffect(() => {
    if (user[0]) {
      userLoggedOn();
    }    
  }, [update])

  useEffect(() => {
  getFavorites(user);
  }, [user])

  function logIn (e, formData) {
    e.preventDefault();
    debugger;
    fetch('http://localhost:9292/login',{
      method: "PATCH",
      redirect: "follow",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password
    })})
    .then(res => res.json())
    .then(user => {
      setUser(user);
      setUpdate(!update)
    })
    .catch(error => console.log("Log in incorrect: ", error))
  }

  function handleRemove (e) {
    e.preventDefault();
    debugger;
    let id = e.target.parentNode.id;
    fetch(`http://localhost:9292/favorites/${id}`, {
      method: "DELETE",
      redirect: "follow"})
    .then(res => res.json())
    .then(favorites => setFavorites(favorites))
    debugger;
    // remove favorite from favorites state
  }

  function addFavorite(favorite) {
    debugger;
    // not setup yet
    // let favorite = {
    //   title: favorite.title,
    //   location: favorite.location,
    //   image: favorite.image,
    //   user_id: user.id
    // }
    // fetch('http://localhost:9292/favorites', {
    //   method: "POST",
    //   redirect: "follow",
    //   headers: {
    //     'Content-Type': 'application/json'
    //     },
    //   body: JSON.stringify({favorite})
    // })
    // .then(res => res.json())
    // .then(favorites => {
    //   setFavorites(favorites);
    //   setUser(user)
    // })
  }

  // not hitting function. trips are added on the backend
  // move over to post fetch in addTrip
  
  function handleAdd(newTrip) {
    debugger;
    // console.log(newTrip) 
    const updatedTrips = [...trips, newTrip]
    setTrips(updatedTrips)
}

  return (
    <div className="App">
      <Navbar user={user}/>
      <Switch>
        <Route path='/trips/new'>
          <AddTrip handleAdd={handleAdd} trips={trips} user={user}/>
        </Route>
        <Route path='/login'>
          <Login logIn={logIn}/>
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/favorites'>
          <Favorites user={user} favorites={favorites} handleRemove={handleRemove}/>
        </Route>
        <Route exact path='/trips'>
          <Trips trips={trips} addFavorite={addFavorite}/>
        </Route>
        <Route exact path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;