'use client';
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [city, setCity] = useState({});
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

const url = `http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`

 const getWeather =(e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  setLoading(true);
  axios.get(url).then((response) => {
    setWeather(response.data);
    console.log(response.data);
    })
    setCity('');
    setLoading(false);
  }


  return (
      <div>

        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/25 z-[1]'/>
        
        {/* background */}
        <Image
         src="https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR8ZW58MHx8MHx8fDI%3D"
         layout="fill" alt="Weather Image" 
         className='object-cover'
         />
        {/* screach */}
        <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>

          <form className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2x1'>
            <div>
              <input className='bg-transparent border-none _text-white focus:outline-none text-2xl' type='text' placeholder='search city'/>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getWeather}>
              get weather
            </button>
          </form>

        </div> 
        </div> 
  )
}
