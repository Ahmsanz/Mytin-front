import React, { useState, useEffect, useContext } from 'react';
import {CitiesContext} from '../contexts/CitiesContext';
import axios from 'axios';

const SingleCity = (props) => {

    const {cities} = useContext(CitiesContext);
    const [ city, setCity ] = useState([]);

    useEffect( () => console.log('cities', cities), [])
    useEffect(  () => {
      getCity();
    }, []);

    let getCity = async () => {
      let id = props.match.params.id
      await axios.get(`http://localhost:4040/cities/${id}`)
        .then( res => setCity(res.data))
        .catch( err => console.log(err))
    }
    let singleCity = city && city !== undefined ? (
        <div key={city._id} className='city-card'>
            <img src={city.image} />
            <div className = 'city-content'>
                <h4>{city.name}</h4>
                <p>{city.country}</p>
            </div>
        </div>
    ) : (
        <div>We don't know what city you want to go to.</div>
    )

    return (
        <div className = "list">
            {singleCity}
        </div>
     );
}

export default SingleCity;
