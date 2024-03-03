import React, { useState, useEffect } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "f0e28d468a8f44541fccd84e22b97f91";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        setCity(data.name);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  return (
    <div id="weather" className="whiteText">
      <span>{city}</span>
      <span>{weatherData ? `${weatherData.main.temp}° / ${weatherData.weather[0].main}` : "Loading..."}</span>
    </div>
  );
};

export default Weather;
