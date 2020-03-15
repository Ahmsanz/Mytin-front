import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import CitiesContextProvider from './contexts/CitiesContext';
import UserContextProvider from './contexts/UserContext'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthContextProvider from './contexts/AuthContext';
import Cities from './components/Cities';

function App() {
  return (
    <BrowserRouter>
    <div className="App">  
      <UserContextProvider>
        <AuthContextProvider>
        <Navbar />
        <Switch> 
          <CitiesContextProvider>
            <Route exact path="/" component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/cities' component={Cities} />
          </CitiesContextProvider>
        </Switch>
        </AuthContextProvider>
      </UserContextProvider>
       
    </div>
    </BrowserRouter>
  );
}

export default App;
