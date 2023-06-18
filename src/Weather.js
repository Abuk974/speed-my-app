import React from "react";
import "./Weather.css";

export default function Weather(){
    return (

        <div className="Weather">
            <form>
                <div className="row">

                    <div className="col-3">
                <input 
                type="Search"
                placeholder="Enter a CITY"
                className="form-control"
                />
                </div>

                <div className="col-3">
                <input
                type="Submit"
                value="search"
                className="btn btn-primary"
                />
                </div>

                </div>
            </form>

            <h1>London</h1>
            <ul>
            <li>Wednesday 7:00</li>
            <li>Mostly Cloudy</li>
            </ul>

            <div className="row">
            <div className="col-6">
                <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly cloudy"
                />
                6°C

                <div className="col-6">
                    <ul>
                        <li>Precipitation: 15%</li>
                        <li>Humidity: 72%</li>
                        <li>Wind: 30km/hr</li>
                    </ul>
                </div>

            </div>
            </div>

            </div>
    )
}