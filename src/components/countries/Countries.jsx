import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
import { Linter } from "eslint";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handleVisitedCountries = country => {
        console.log('Add this to Visited Country');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div>
                <h3>Visited Countries:{visitedCountries.length} </h3>
                <ul>


                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country =>
                        <Country key={country.cca3}
                            handleVisitedCountries={handleVisitedCountries}
                            country={country}>

                        </Country>)
                }
            </div>

        </div>
    );
};

export default Countries;