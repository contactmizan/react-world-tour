import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    //destructuring
    const { name, flags, population, area, cca3 } = country;
    //state
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited); //maan change er jonno ! 
    }
    return (
        //conditional css add: visited color cng er jnno
        <div className={`country ${visited && 'visited'}`}>
            {/* ternery style */}
            <h3 style={{ color: visited ? 'purple' : 'whote' }}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {/* {visited && 'I have visited this country.'} */}
            {/* ternery */}
            {visited ? 'I have visited.' : 'I want to visit.'}

        </div >
    );
}

export default Country;