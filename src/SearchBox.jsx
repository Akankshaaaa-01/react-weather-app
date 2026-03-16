import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}){

    let[city,setCity]=useState("");
    let[error,setError]=useState("");
    let API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

   let getWeatherInfo= async()=>{
    try{
        let response= await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse=await response.json();
    console.log(jsonResponse);
    let result={
        city:city,
        temp: jsonResponse.main.temp,
        feels_like: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        temp_max:jsonResponse.main.temp_max,
        temp_min:jsonResponse.main.temp_min,
         country: jsonResponse.sys.country,
         sunrise: jsonResponse.sys.sunrise,
         sunset: jsonResponse.sys.sunset,
         visibility: jsonResponse.sys.visibility,
         weather: jsonResponse.weather[0].main,
         weather_desc: jsonResponse.weather[0].description,
         wind_speed: jsonResponse.wind.speed,
         gust:jsonResponse.wind.gust,
         icon:jsonResponse.weather[0].icon
        }
    console.log(result)
    return result;
    } catch(err){
        setError("City not found!")
    }
    
   }

    let handleChange =(event)=>{
        setCity(event.target.value)
    }
    let handleSubmit= async (event)=>{
        event.preventDefault();
        console.log(city);
       
       let newinfo= await getWeatherInfo();
       if(newinfo){
        updateInfo(newinfo);
         setCity("");
         setError("");
       }
        
    }
    return (
        <div className='searchBox'>
        <form onSubmit={handleSubmit}>
              <h3>Search for weather</h3>
              
              <TextField id="city"
               label="City Name" 
               variant="outlined" 
               required 
               value={city}
               onChange={handleChange}/>
                <br /><br />
                <Button variant="contained"
                 sx={{
                    backgroundColor: "darkblue",
                    "&:hover": {
                    backgroundColor: "lightblue"
                    }
                }} type="submit" >Search</Button>
                {error && <p style={{ color: "red" }}>{error}</p>}
        </form>

        </div>
            )
}