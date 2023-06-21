import React,{useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"
import WeatherIcon from "./WeatherIcon";
import "./Weather.css"

export default function Weather(props){

const[weatherData, setweatherData]=useState({ready:false});
const[city, setCity]=useState(props.defaultCity)

    function handleResponse(response){
        console.log(response.data);
        setweatherData({
            ready:true,
            coordinates:response.data.coord,
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            date:new Date(response.data.dt * 1000),
            description:response.data.weather[0].description,
            icon:response.data.weather[0].icon,
            wind:response.data.wind.speed,
            city:response.data.name,
        });
        
    }
    function search(){
        const apiKey="f9c1fed4ccbb99764c2ed9974a872da1";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }


    function handleSubmit(event){
        event.preventDefault();
        search(city)
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }

    if (weatherData.ready){
        return (
            <div className="Weather">
                
                <form onSubmit={handleSubmit}>
                    <div className="row mt-3">
    
                        <div className="col-9">
                    <input 
                    type="Search"
                    placeholder="Enter a City"
                    className="form-control"
                    autoFocus="on"
                    onChange={handleCityChange}
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
                <WeatherInfo data={weatherData}/> 
                <WeatherForecast coordinates={weatherData.coordinates}/>
                <WeatherIcon/>

                </div>
                
        );
    } else{
        search(city)
    return"Loading.."
    }

}