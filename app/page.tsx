'use client';
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import Weather from '../components/Weather'
import {  useState } from 'react'

export default function Home() {
  const [city, setCity] = useState(''); // Changed {} to '' for proper string input
  const [weather, setWeather] = useState(null); // Initialize weather as null
  const [loading, setLoading] = useState(false);

  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`

  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    axios.get(URL).then((response) => {
      setWeather(response.data); // Set the weather data after the API response
      console.log(response.data); // Log data to ensure it's being fetched
    })
    .catch(err => console.error(err))
    .finally(() => setLoading(false)); // Stop loading after the API call
  }

  return (
      <div>

        {/* Overlay */}
        <div className='relative w-full h-full'/>
        
        {/* Background */}
        <Image
          src="https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR8ZW58MHx8MHx8fDI%3D"
          fill
          alt="Weather Image"
           
        />

        {/* Search Form */}
        <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
          <form onSubmit={getWeather}
          className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2x1'>
            <div>
              <input 
                onChange={(e) => setCity(e.target.value)} // Capture city input
                value={city} // Controlled input value
                className='bg-transparent border-none text-white focus:outline-none text-2xl' 
                type='text' 
                placeholder='Search city'
              />
            </div>
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
              type="submit"
              disabled={loading} // Disable button when loading
            >
              {loading ? 'Loading...' : 'Get Weather'}
            </button>
          </form>
        </div> 

        {/* Weather Component */}
        {weather && <Weather data={weather} />} {/* Render the Weather component only if weather data exists */}
        
      </div>
  )
}