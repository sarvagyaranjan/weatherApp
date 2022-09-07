import React from 'react'
import "./css/style.css"
import { useState, useEffect } from 'react';

const TempApp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai")

    useEffect(() => {

        const fetchAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8406f1df7cb408add6bb7992a2e531ae `
            const response = await fetch(url);
            // console.log(response)
            const resJSON = await response.json()
            // console.log(resJSON)
            setCity(resJSON.main);
        }
        fetchAPI();


    }, [search])


    return (
        <>
            {/* https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=8406f1df7cb408add6bb7992a2e531ae */}
            <div className="box">
                <div className="inputData">
                    <input type="search" className='inputField' onChange={(event) => { setSearch(event.target.value) }} />
                </div>

                {!city ? (
                    <p>No Data Found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className='location'>
                                <i className="fa-solid fa-cloud"></i> {search}
                            </h2>
                            <h1 className='temp'>
                                {city.temp}
                            </h1>
                            <h3 className='tempmin_max'>{`Min ${city.temp_min} | Max ${city.temp_max}`}</h3>
                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                )}

            </div>

        </>
    )
}

export default TempApp