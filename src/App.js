import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import CitiesContextProvider from './contexts/CitiesContext';
import UserContextProvider from './contexts/UserContext'
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <div className="App">  
      <UserContextProvider>
      <Navbar />
      <Switch> 
        <CitiesContextProvider>
          <Route exact path="/" component={Home} />
          <Route path='/login' component={Login} />
        </CitiesContextProvider>
      </Switch>
      </UserContextProvider>
       
    </div>
    </BrowserRouter>
  );
}

export default App;
