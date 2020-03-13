import React, { createContext, useState, useEffect } from 'react';

export const CitiesContext = createContext();

const CitiesContextProvider = (props) => {
    const [cities, setCities] = useState([]);

    return ( 
        <CitiesContext.Provider value={{cities}}>
            {props.children}
        </CitiesContext.Provider>
     );
}
 
export default CitiesContextProvider;