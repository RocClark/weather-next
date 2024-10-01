import React from "react";

const Weather = ({ data }) => {
    console.log(data); // Ensure the data is being received correctly

    if (!data || !data.main || !data.weather || !data.weather[0] || !data.wind) {
        return <p>Loading weather data...</p>; // Handle case where data is incomplete
    }

    return (
        <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
            <div className="relative flex justify-between pt-12">
                <div className="flex flex-col items-center">
                    {/* Display weather icon and main weather description */}
                    <img
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt={data.weather[0].description}
                        width="100"
                        height="100"
                    />
                    <p className="text-2xl">{data.weather[0].main}</p>
                </div>
                {/* Display the current temperature */}
                <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
            </div>

            <div>
                {/* Display city name */}
                <p className="text-3xl">{data.name}</p>
                <div>
                    <div>
                        {/* Feels like temperature */}
                        <p className="text-3xl">{data.main.feels_like.toFixed(0)}&#176;</p>
                        <p className="text-sm">Feels like</p>
                    </div>
                    <div>
                        {/* Humidity */}
                        <p className="text-3xl">{data.main.humidity}%</p>
                        <p className="text-sm">Humidity</p>
                    </div>
                    <div>
                        {/* Wind Speed */}
                        <p className="text-3xl">{data.wind.speed.toFixed(0)} MPH</p>
                        <p className="text-sm">Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;