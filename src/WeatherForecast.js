import React,{useState} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let[loaded, setLoaded]=useState(false);
    let[forecast, setForecast]=useState({})

function handleResponse(response){
    setForecast(response.data.daily)
    setLoaded(true)
}
if (loaded){
    <div className="WeatherForecast">
        <div className="row">
          <div className="col">
    <WeatherForecastDay data={forecast}/>
    /</div>
    </div>
    </div>
 }
 else {    
let apiKey="f9c1fed4ccbb99764c2ed9974a872da1";
let longitude=props.coordinates.lon;
let latitude=props.coordinates.lat;
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units="metric"`;

axios.get(apiUrl).then(handleResponse);


return(null)
    }
}