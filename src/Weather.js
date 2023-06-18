import React,{useState} from "react";
import axios from "axios"
import "./Weather.css"

export default function Weather(props){


const[weatherData, setweatherData]=useState({ready:false});

    function handleResponse(response){
        console.log(response.data);
        setweatherData({
            ready:true,
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            date:"wednesday 7:00",
            description:response.data.weather[0].description,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind:response.data.wind.speed,
            city:response.data.name,
        });
        
    }

    if (weatherData.ready){
        return (
            <div className="Weather">
                
                <form>
                    <div className="row mt-3">
    
                        <div className="col-9">
                    <input 
                    type="Search"
                    placeholder="Enter a City"
                    className="form-control"
                    autoFocus="on"
                    />
                    </div>
    
                    <div className="col-3">
                    <input
                    type="Submit"
                    value="search"
                    className="btn btn-primary w-100"
                    />
                    </div>
    
                    </div>
                </form>
    
                <div className="col-3">
                <h1>{weatherData.city}</h1>
                <ul>
                <li>{weatherData.date}</li>
                <li>{weatherData.description}</li>
                </ul>
    
                <div className="clearFix">
                    <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    className="float-left"
                    />
    
                    
                    <span className="temperature">{Math.round(weatherData.temperature)}</span> 
                    <span className="units">°C|°F</span>
                    </div>
                    </div>
    
                    <div className="col-12">
                        <ul>
                            <li>Humidity:{weatherData.humidity}%</li>
                            <li>Wind:{Math.round(weatherData.wind)}km/hr</li>
                        </ul>
                    </div>
    
                
                </div>
    
            
                
        );
    } else{

    const apiKey="e7be0e09c2bc8e3d45069a7681cd06a3";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return"Loading.."
    }

}