import React, { useState, useEffect, useContext } from 'react';
import {CitiesContext} from '../contexts/CitiesContext';

const SingleCity = (props) => {

    const {cities} = useContext(CitiesContext);
    
    const id = props.match.params.id;

    const city = cities.filter( city => city._id == id);

    const renderedCity = city ? ( city.map( city => {
        return (
            <div key={city._id} className='city-card'>
                <img src={city.image} />
                <div className = 'city-content'>
                    <h4>{city.name}</h4>
                    <p>{city.country}</p>
                </div>
            </div>
        )
    })
    ) : (
        <div>We don't know what city you want to go to.</div>
    )
    
    return (
        <div className = "list">
            {renderedCity}
        </div>
     );
}

export default SingleCity;
