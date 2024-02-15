import React, { useEffect, useState } from "react";
import './WeatherApp.css';
import search_icon from "./assets/search.png";
import cloud_icon from "./assets/cloud.png";
import humidity_icon from "./assets/humidity.png";
import wind_icon from "./assets/wind.png";

function WeatherApp() {
    const [city, setCity] = useState("Nairobi");
    const [weatherData, setWeatherData] = useState({
        main: {
            temp: null,
            humidity: null
        },
        name: null,
        wind: {
            speed: null
        }
    });
    let api_key = "ff9cdd77c99f4fbfd668da113208ab6a";

    useEffect(() => {
        fetchData(city);
    }, []);

    // Fetching data from the api
    function fetchData(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                // if cod is 200 means response is good
                if (data.cod === 200) {
                    setWeatherData(data);
                }
            })
            .catch(error => {
                console.error("Error fetching the data", error);
                setWeatherData({
                    main: {
                        temp: null,
                        humidity: null
                    },
                    name: null,
                    wind: {
                        speed: null
                    }
                });
            });
    }

    function handleChange(value) {
        setCity(value);
    }

    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="search" value={city} onChange={(e) => handleChange(e.target.value)}/>
                <div className="search-icon" onClick={() => fetchData(city)}>
                    <img src={search_icon} alt=""/>
                </div>
            </div> 
            <div className="weather-image">
                <img src={cloud_icon} alt=""/>
            </div>
            <div className="weather-temp">{weatherData.main.temp}°C</div>
            <div className="weather-location">{weatherData.name}</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">{weatherData.main.humidity}%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-speed">{weatherData.wind.speed} km/hr</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherApp;
