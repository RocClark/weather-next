import React from "react";

const Weather = ({ data }) => {
  if (!data || !data.main || !data.weather || !data.weather[0] || !data.wind) {
    return <p>Loading weather data...</p>;
  }

  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
            width="100"
            height="100"
          />
          <p className="text-2xl text-stone-950">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl text-stone-950">{data.main.temp.toFixed(0)}&#176;</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <p className="text-3xl">{data.name}</p>
        <div className="flex flex-col md:flex-row md:ml-4">
          <div className="flex flex-col mr-4">
            <p className="text-3xl">{data.main.feels_like.toFixed(0)}&#176;</p>
            <p className="text-sm">Feels like</p>
          </div>
          <div className="flex flex-col mr-4">
            <p className="text-3xl">{data.main.humidity}%</p>
            <p className="text-sm">Humidity</p>
          </div>
          <div className="flex flex-col">
            <p className="text-3xl">{data.wind.speed.toFixed(0)} MPH</p>
            <p className="text-sm">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;