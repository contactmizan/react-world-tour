import { useState } from 'react';
import './Country.css'
//ager tay jeita jeita props kore pathaichi eikhane destructure korte hobe function er property hishebe.

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    //destructuring
    const { name, flags, population, area, cca3 } = country;
    //state
    const [visited, setVisited] = useState(false);
    //for event handler 
    const handleVisited = () => {
        setVisited(!visited); //maan change er jonno ! 
    }

    const passWithParams = () => handleVisitedCountry(country);


    return (
        //conditional css add: visited color cng er jnno
        <div className={`country ${visited && 'visited'}`}>
            {/* ternery style */}
            <h3 style={{ color: visited ? 'purple' : 'white' }}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passWithParams}>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {/* {visited && 'I have visited this country.'} */}
            {/* ternery */}
            {visited ? 'I have visited.' : 'I want to visit.'}

        </div >
    );
}

export default Country;