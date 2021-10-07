import './App.css';
import { Switch, Route } from 'react-router-dom'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Favorites from './components/Favorites';
import Trips from './components/Trips'
import LandingPage from './components/LandingPage'
import AddTrip from './components/AddTrip'
import Pagination from './components/Pagination';

function App() {
  const [trips, setTrips] = useState([])
  const [user, setUser] = useState([])
  const [favorites, setFavorites] = useState([])
  const [update, setUpdate] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(4)
  const [searchFavs, setSearchFavs] = useState('')
  const [searchTrips, setSearchTrips] = useState('')

  // all fetches are here, feel free to update if needed
  function getTrips() {
      fetch('http://localhost:9292/trips')
      .then(res => res.json())
      .then(setTrips)
  }

  function addUser(newUser) {
    const updatedUser = [...user, newUser]
    setUser(updatedUser)
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
  }, [user, update])

  useEffect(() => {
    userLoggedOn(); 
  }, [update])

  useLayoutEffect(() => {
    getFavorites(user);
  }, [user, update])

  function logIn (e, formData) {
    e.preventDefault();
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

  function logOut (e) {
    e.preventDefault();
    let id = user[0].id;
    fetch(`http://localhost:9292/logout/${id}`,{
      method: "PATCH",
      redirect: "follow",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        username: user[0].username,
        user_id: id
    })})
    .then(res => res.json())
    .then(user => {
      setUser([]);
      setUpdate(!update)
    })
    .catch(error => console.log("Log out error: ", error))
  }

  function handleRemove (e) {
    e.preventDefault();
    let id = e.target.parentNode.id;
    fetch(`http://localhost:9292/favorites/${id}`, {
      method: "DELETE",
      redirect: "follow"})
    .then(res => res.json())
    .then(setUpdate(!update))
  }

  function addFavorite(trip) {
    let favorite = {
      title: trip.title,
      location: trip.location,
      image: trip.image,
      user_id: user[0].id
    }
    fetch('http://localhost:9292/favorites', {
      method: "POST",
      redirect: "follow",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({favorite})
    })
    .then(res => res.json())
    .then(favorites => {
      setFavorites(favorites);
      // setUser(user);
      setUpdate(!update)
    })
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = trips.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }

  let searchedFavs = favorites;
  if (searchFavs !== '') {
    searchedFavs = favorites.filter((favorite) => {
      return favorite.title.toLowerCase().includes(searchFavs.toLowerCase())
  })}

  let searchedTrips = trips;
  if (searchTrips !== '' ) {
    searchedTrips = trips.filter((trip) => {
        return trip.title.toLowerCase().includes(searchTrips.toLowerCase())
    })
  currentPosts = searchedTrips;
  }

  return (
    <div className="App">
      <Navbar user={user} logOut={logOut}/>
      <Switch>
        <Route path='/trips/new'>
          <AddTrip trips={trips} user={user} setTrips={setTrips} setUpdate={setUpdate} update={update}/>
        </Route>
        <Route path='/login'>
          <Login logIn={logIn}/>
        </Route>
        <Route path='/signup' >
          <Signup addUser={addUser}/>
        </Route>
        <Route path='/favorites'>
          <Favorites user={user} favorites={searchedFavs} handleRemove={handleRemove} searchFavs={searchFavs} setSearchFavs={setSearchFavs}/>
        </Route>
        <Route exact path='/trips' >
          <Trips trips={currentPosts} totalPosts={trips.length} addFavorite={addFavorite} user={user} favorites={favorites} searchTrips={searchTrips} setSearchTrips={setSearchTrips}/>
          {searchTrips.length < 1 ? <Pagination postsPerPage={postsPerPage} totalPosts={trips.length} paginate={paginate}/> : null}
        </Route>
        <Route exact path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;