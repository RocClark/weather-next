import React from "react";

const Weather = (data) => {
    console.log(data);

    return (
        <div className="relative flex flex-xol justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10 ">
        <div className="relative flex justify-between pt-12'">
           <div className="flex flex-col items-center">
              
               <p className="text-2xl"></p>
           </div>
           <p className=" text-9xl">&#176;</p>
       </div>
       <div>
                {/* City Name */}
                <p className="text-3xl">{data.name}city</p>
                <div>
               <div>
               <p className="text-3xl">&#176;</p>
               <p className="text-3xl">Feels like</p>
               </div>
               <div>
               <p className="text-3xl">%;</p>
               <p className="text-3xl">Humidity</p>
               </div>
               <div>
               <p className="text-3xl">MPH</p>
               <p className="text-3xl">Wind Speed</p>
               </div>
           </div>
       </div>
   </div>

    )
}
    export default Weather;