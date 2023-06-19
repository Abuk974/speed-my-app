import React,{useState} from "react";

export default function WeatherTemperature(props){
    const[unit, setUnit]=useState("celisius");

    function showFahrenheit(event){
        event.preventDefault()
        setUnit("fahrenheit")
    }
    function showCelisius(event){
        event.preventDefault();
        setUnit("celisius")
    }

    let fahrenheit=(props.celisius*9)/5+32;

    if(unit==='celisius'){
    return(
        <div className="WeatherTemperature">
        <span className="temperature">
            {Math.round(props.celisius)}
        </span>
        <span className="unit">
            °C|{""}
             <a href="/" onClick={showFahrenheit}>°F
                </a>
        </span>
        </div>
    )
    }
    else{
    return <div className="WeatherTemperature">
    <span className="temperature">
        {Math.round(fahrenheit)}
    </span>

    <span className="unit">
       <a href="/" onClick={showCelisius}>
        °C
       </a>{""}|°F
    </span>
    </div>
    }
}