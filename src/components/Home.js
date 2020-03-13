import React, { useState, useEffect, useContext } from 'react';
import Cities from './Cities';

const Home = () => {
    return ( 
        <div>
            <h2> Welcome to Mytinerary</h2>
            <Cities/>
        </div>
     );
}
 
export default Home;