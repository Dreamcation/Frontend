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

    useEffect(() => {
        fetch('http://localhost:9292/trips')
        .then(res => res.json())
        .then(setTrips)
    }, [])

  function handleAdd(newTrip) {
    const updatedTrips = [...trips, newTrip]
    setTrips(updatedTrips)
}

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/trips/new'>
          <AddTrip handleAdd={handleAdd} trips={trips}/>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
        <Route exact path='/trips'>
          <Trips trips={trips}/>
        </Route>
        <Route exact path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;