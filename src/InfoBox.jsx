import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./InfoBox.css"
export default function InfoBox({info}){

    let iconUrl = `https://openweathermap.org/img/wn/${info.icon}@2x.png`;
    const HOT_URL="https://i.pinimg.com/originals/76/7d/68/767d687e4a8b796f54553c0b0fe641a3.gif";
    const COLD_URL="https://i.pinimg.com/originals/0a/f9/8f/0af98fe89fd6bc2793f548230a7b77a3.gif";
    const RAIN_URL="https://i.pinimg.com/originals/5c/8a/75/5c8a75866a05bcff807247b383e46d4d.gif";
    return (
        <div className="InfoBox"> 
        <h1>WeatherInfo</h1>

        <div className="cardClass">
             <Card sx={{
    width: 450, 
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
   
    boxShadow: "0 8px 32px rgba(0,0,0,0.25)"
  }}>
          <CardActionArea>
            <CardMedia
            component="img"
            height="150"
            image={info.humidity>80? RAIN_URL: info.temp>18 ?HOT_URL:COLD_URL}
            alt="rain image"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               {info.city} <br />
                <img src={iconUrl} alt="weather icon"/>    
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span" >
              Temp: {info.temp}°C
            <p>Weather: {info.weather_desc}</p>
            <p>Humidity: {info.humidity}%</p>
            <p>Wind Speed: {info.wind_speed} m/s</p>
            <p>Feels like: {info.feels_like}</p>
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        </div>
    </div>

        
    )
}