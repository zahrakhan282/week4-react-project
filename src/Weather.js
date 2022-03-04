import axios from "axios";
import React, { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  // update weather UI
  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      cityName: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response.data);
  }
  // api call
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "4da08b1db69b24980b23530bbc9ed41a";
    let units = "metric";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayWeather);
  }
  // access to city
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <input
            type="search"
            placeholder="Enter a city 🔍"
            autoFocus="on"
            autoComplete="off"
            className="form-control"
            onChange={updateCity}
          />
        </div>
        <div className="col-md-2">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="overview">
          <h2 className="mt-3">{weather.cityName}</h2>
          <ul>
            <li className="description">{weather.description}</li>
            <li>{weather.temperature}°C</li>
          </ul>
        </div>
        <img
          src={weather.icon}
          s
          alt={weather.description}
          className="float-left"
        />
        <ul>
          <li>
            Humidity: <span>{weather.humidity}</span>%
          </li>
          <li>
            Wind: <span>{weather.wind}</span> km/h
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
