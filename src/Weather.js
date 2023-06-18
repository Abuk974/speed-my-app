import React from "react";
import "./Weather.css"

export default function Weather(){
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
            <h1>London</h1>
            <ul>
            <li>Wednesday 7:00</li>
            <li>Mostly Cloudy</li>
            </ul>

            <div className="clearFix">
                <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly cloudy"
    
                />

                
                <span className="temperature">6</span> 
                <span className="units">°C|°F</span>
                </div>
                </div>

                <div className="col-12">
                    <ul>
                        <li>Precipitation: 15%</li>
                        <li>Humidity: 72%</li>
                        <li>Wind: 30km/hr</li>
                    </ul>
                </div>

            
            </div>

        
            
    )
}