'use client';
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [city, setCity] = useState({});
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

const url = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`

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
          <h1 className="text-3xl font-bold text-blue-400 underline">
            Hello world!
          </h1>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getWeather}>get weather</button>
        </div> 
  )
}
