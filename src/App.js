import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignUp from './components/Authentication/SignUp';
import LogIn from './components/Authentication/login';
import Navbar from './components/Constants/navbar';
import Footer from './components/Constants/footer';
import HomePage1 from './components/Dashboard/HomePage1';
import UpdateMovieDetails from './components/UpdateMovieDetails';
// import GetCall from './components/GetCall';
import HomePage from './components/Dashboard/Homepage';
import AddingMovie from './components/AddMovie';

function App() {
  return (
    <div>
      <div className="layout">
        <BrowserRouter>
          <Navbar path={window.location.pathname} />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LogIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/AddMovie" exact component={AddingMovie} />
            <Route path="/Dashboard" exact component={HomePage1} />
            <Route path="/updatedetails" exact component={UpdateMovieDetails} />
          </Switch>
        </BrowserRouter>
      </div>
      <div className="align_footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
