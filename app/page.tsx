import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=boston&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}'

  return (
      <div>
          <h1 className="text-3xl font-bold text-blue-400 underline">
            Hello world!
          </h1>
        </div> 
  )
}
