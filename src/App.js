import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import  CitiesContextProvider from './contexts/CitiesContext';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CitiesContextProvider>
        <Home/>
      </CitiesContextProvider>
    </div>
  );
}

export default App;
