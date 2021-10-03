import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Favorites from './components/Favorites';
import Trips from './components/Trips'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
        <Route path='/trips'>
          <Trips />
        </Route>
        <Route exact path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
