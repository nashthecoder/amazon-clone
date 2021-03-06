import React, { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import { auth } from './firebase.js'
import { useStateValue } from './components/StateProvider'
import Payments from './components/Payments'
import Profile from './components/Profile'
import Footer from './components/Footer'

function App() {
  const [{}, dispatch] = useStateValue();
  const [] = useState([]);

//Runs once when the app loads.
  useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: authUser ? authUser : null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className='app'>
        <Switch>
          <Route path="/payments">
            <Header />
            <Payments />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/'>
          <Header />
          <Home />
          </Route>
        </Switch>
          <Footer />
      </div>
    </Router>

  );
}

export default App
