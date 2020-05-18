import React, { useState, useEffect, useContext } from 'react';
import {CitiesContext} from '../contexts/CitiesContext';
import axios from 'axios';

const SingleCity = (props) => {

    const {cities} = useContext(CitiesContext);

    const [itineraries, setItineraries] = useState([])

    useEffect( () => {
        const getItins =  async () => {

            await axios.get(`http://localhost:4040/itineraries/city/${name}`)
            .then( res =>  setItineraries(res.data))
            .catch( err => console.log('oops, not hearing that city oright', err))

        }
        getItins();
    })


    const id = props.match.params.id.split('&')[0]

    const url = new URLSearchParams(window.location.href);

    const city = cities.filter( city => city._id === id);

    const name = url.get('name');

    const itins = itineraries.length ? itineraries.map( itin => {
        return (
            <div key={itin._id}>
                <a href={"../itineraries/" + itin._id} ><h4 className='itin-name'>{itin.name}</h4></a>
            </div>
        )
    }) : ( <div>No itineraries defined for this city</div>)

    const renderedCity = city ? ( city.map( city => {
        return (
            <div>
                <div key={city._id} className='city-card' style={{marginBottom: '30px'}}>
                    <img src={city.image} />
                    <div className = 'city-content'>
                        <h4>{city.name}</h4>
                        <p>{city.country}</p>
                    </div>
                </div>
                <div>
                   {itins}
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
