import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props){
return <div>
    (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="forecast-day">{props.data.dt}</div>
                    <WeatherIcon code={props.data.weather[0].icon} size={36}/>
                    <div className="forecastTemperature">
                        <span className="forecast-temperature-max">{props.data.temp.max}</span>
                        <span className="forecast-temperature-min">{props.data.temp.min}°</span>
                        </div>
                </div>
            </div>
        </div>

    );
</div>
}