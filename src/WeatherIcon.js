import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props){
    const codeMapping ={
        "01d":"CLEAR-DAY",
        "01n":"CLEAR-NIGHT",
        "02d":"PARTLY-CLOUDY-DAY",
        "02n":"PARTLY-CLOUDY-NIGHT",
        "o3d":"PARTLY-CLOUDY-DAY",
        "03n":"PARTLT-CLOUDY-NIGHT",
        "04d":"CLOUDY",
        "04n":"CLOUDY",
        "09d":"RAIN",
        "09n":"RAIN",
        "10d":"RAIN",
        "10n":"RAIN",
        "11d":"CLEAR-NIGHT",
        "11n":"CLEAR-NIGHT",
        "13d":"SNOW",
        "13n":"SNOW",
        "50d":"FOG",
        "50n":"FOG",
    };
        return (
            <ReactAnimatedWeather
            icon={codeMapping[props.code]}
            color="#ffffff"
            size={props.size}
            animate={true}
             />
        );
        } 
