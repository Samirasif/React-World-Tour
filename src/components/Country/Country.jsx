import { useState } from 'react';
import './Country.css';
const Country = ({ country, handleVisitedCountries }) => {
    //console.log(country);
    const { name, region, flags, population, area } = country;
    const [visited, setVisited] = useState(false);


    const handleVisited = () => {
        setVisited(!visited)
    }


    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'black' }}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Region:{region}</p>
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <button onClick={handleVisited} style={{ backgroundColor: 'green' }}>{visited ? 'Visited' : 'Going'}</button>

            {visited ? 'I have visited this Country.' : 'I will visit'}


        </div >
    );
};

export default Country;