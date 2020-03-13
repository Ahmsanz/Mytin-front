import React, { useState, useEffect, useContext } from 'react';

const Cities = () => {

    const [cities, setCities] = useState([
        {
            name: 'Madrid',
            country: 'Spain',
            img: 'url.png'
        },
        {
            name: 'París',
            country: 'France',
            img: 'url.png'
        },
        {
            name: 'Lisboa',
            country: 'Portugal',
            img: 'url.png'
        }
    ])

    let citiesList = cities.length ? cities.map( city => {
        return (
            <div className='list'>
                <div className='city-card'>
                    <img href={city.img} />
                    <div className = 'city-content'>
                        <h4>{city.name}</h4>
                        <p>{city.country}</p>
                    </div>
                </div>
            </div>
        )
    }) : (
        <div>No cities to show yet.</div>
    );

    return ( 
    
    <div>
        {citiesList}
    </div> 
    
    );
}
 
export default Cities;