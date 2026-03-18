import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
import rainVideo from "./assets/rain.mp4";
import Sidebar from './SideBar';
export default function WeatherApp(){

let HOT_URL="https://i.pinimg.com/originals/76/7d/68/767d687e4a8b796f54553c0b0fe641a3.gif";
let COLD_URL="https://i.pinimg.com/originals/0a/f9/8f/0af98fe89fd6bc2793f548230a7b77a3.gif";
let RAIN_URL="https://preview.redd.it/two-anime-rain-gifs-v0-cfdsi2u0w99f1.gif?width=640&crop=smart&auto=webp&s=81bc74523a3cda772fde951abc6b478c9ad8add3";



   const[weatherInfo,setweatherInfo]=useState({
     city:"WonderLand",
    country: "IN",
    feels_like: 27.14,
    gust: 9.36,
    humidity: 16,
    sunrise: 1773277489,
    sunset: 1773320241,
    temp: 28.67,
    temp_max: 28.67,
    temp_min: 28.67,
    visibility: undefined,
    weather: "Clouds",
    weather_desc: "scattered clouds",
    wind_speed: 2.95,
    icon: "10d"
   })

   let updateInfo=(newInfo)=>{
    setweatherInfo(newInfo);
   }

   let bgUrl =
weatherInfo.humidity > 80
? RAIN_URL
: weatherInfo.temp > 18
? HOT_URL
: COLD_URL;

        return(
          
            <div className="flex h-screen">
             
               <Sidebar/>
              
           
            <div className='flex-1 bg-mauve-100'>
                <SearchBox updateInfo={updateInfo}/>
                <InfoBox info={weatherInfo}/>
            </div>
            
            </div>
        )
}