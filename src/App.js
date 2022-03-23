import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignUp from './components/Authentication/SignUp';
import LogIn from './components/Authentication/login';
// import MainPagination from './components/main_pagination';
import Navbar from './components/Constants/navbar';
import Footer from './components/Constants/footer';
import GetCall from './components/GetCall';
// import apiClient from './components/Intercetor/Interceptor';
import HomePage from './components/Dashboard/HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LogIn} />
          {/* <Route path="/pages" exact component={MainPagination} /> */}
          <Route path="/signup" exact component={SignUp} />
          <Route path="/getdata" exact component={GetCall} />
        </Switch>
      </BrowserRouter>
      <div className="align_footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
