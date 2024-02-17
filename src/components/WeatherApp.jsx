import React, { useEffect, useState } from "react";
import './WeatherApp.css';
import search_icon from "./assets/search.png";
import cloud_icon from "./assets/cloud.png";
import humidity_icon from "./assets/humidity.png";
import wind_icon from "./assets/wind.png";
import clear_icon from"./assets/clear.png"
import drizzle_icon from "./assets/drizzle.png"
import rain_icon from "./assets/rain.png"
import storm_icon from "./assets/storm.png"
import scattered_clouds_icon from "./assets/clouds.png"
import snow_icon from "./assets/snow.png"
import LoginPage from "./Login";
import {useNavigate} from "react-router-dom";

function WeatherApp() {
    const [isDarkMode, setIsDarkMode] = useState(false);
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
    const [weatherIcon, setWeatherIcon] = useState(cloud_icon);
    
    function handleDarkMOde() {
        setIsDarkMode((isDarkMode) => !isDarkMode);
    }
    
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
                
                if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
                    setWeatherIcon(clear_icon);
                }

                if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
                    setWeatherIcon(cloud_icon);
                }

                if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
                    setWeatherIcon(drizzle_icon);
                }

                if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
                    setWeatherIcon(rain_icon);
                }
                
                if (data.weather[0].icon === "11d" || data.weather[0].icon === "11n") {
                    setWeatherIcon(storm_icon);
                }

                if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
                    setWeatherIcon(scattered_clouds_icon);
                }

                if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
                    setWeatherIcon(snow_icon);
                }

                if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
                    setWeatherIcon(scattered_clouds_icon);
                }

                console.log("Weather icon", data.weather[0].icon);               
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
        
    const history = useNavigate()
        
    function login() {
        history("/login")
    }
    
    
    return (
        <div className={isDarkMode ? "container-Dark" : "container"}>
            <div className="top-bar">

                <input type="text" className="cityInput" placeholder="search" value={city} onChange={(e) => handleChange(e.target.value)}/>

                <div className="search-icon" onClick={() => fetchData(city)}>
                    <img src={search_icon} alt=""/>
                </div>

                <div className="button">
                    <button onClick={ handleDarkMOde }> {isDarkMode ? "Dark" : "Light"} Mode </button>
                </div>

                <div className="button">
                    <button onClick={login}>
                        Logout
                    </button>
                </div>

            </div> 

            <div className="weather-image">
                <img src={weatherIcon} alt=""/>
            </div>

            <div className={isDarkMode ? "weather-temp-dark" : "weather-temp"}>{weatherData.main.temp}°C</div>

            <div className={isDarkMode ? "weather-location-dark" : "weather-location"}>{weatherData.name}</div>

            <div className={isDarkMode ? "data-container-dark" : "data-container"}>

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
