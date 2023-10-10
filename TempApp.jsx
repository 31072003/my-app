import React, { useEffect, useState } from 'react';
import './TempApp.css';

const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('mumbai');

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b14425a6554d189a2d7dc18a8e7d7263`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        };
        fetchApi();
    }, [search]);

    return (
        <div>
            <div className='box'>
                <div className='inputfield'>
                    <input
                        type="search"
                        placeholder='Search...'
                        defaultValue=''
                        onChange={(event) => {
                            setSearch(event.target.value);
                        }}
                    />
                </div>
            </div>

            {!city ? (
                <p>no data from </p>
            ) : (
                <div className='info'>
                    {city && city.name && (
                        <>
                            <h2 className='location'>{city.name}, {city.sys.country}</h2>
                            <h1 className='temp'>{city.temp} </h1>
                            <h3 className='maxvalue'>{city.main.temp_min} K | {city.main.temp_max} K</h3>
                            <h3></h3>
                        </>
                    )}
                    <i className="fa-solid fa-street-view" style={{ color: '#548592' }}></i>{search}
                </div>
            )
            }
        </div>
    );
};

export default TempApp;

