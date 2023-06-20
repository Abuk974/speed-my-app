import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props){
    
  function handleResponse(response){
    console.log(response.data);
  }
  

let apiKey="e7be0e09c2bc8e3d45069a7681cd06a3";
let longitude=props.coordinates.lon;
let latitude=props.coordinates.lat;
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units="metric"`;

axios.get(apiUrl).then(handleResponse);

    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="forecast-day">Thur</div>

                    <WeatherIcon code="01d" size={36}/>
                    <div className="forecastTemperature">
                        <span className="forecast-temperature-max">
                            19°
                            </span>
                        <span className="forecast-temperature-min">
                            10°
                            </span>
                        </div>
                </div>
            </div>
        </div>
    )
}