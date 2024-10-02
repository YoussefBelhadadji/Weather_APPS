const apiKey="d0b668ae2597bba2075c6ce1eecd74dd";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBar=document.querySelector(".seatch-box input");
const searchBtn=document.querySelector(".seatch-box button");
let weather=document.querySelector(".weather-icon");
async function checkWeather(city){

    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    var data = await response.json();
    if(response.status==404){
        document.querySelector(".error").style.display='block';
        document.querySelector(".weather").style.display='none';
    }else{
        if(data.weather[0].main === "Clouds"){
            weather.src="./image/clouds.png";
            weather.style.transition=" ease-in-out .5s";
        }
        if(data.weather[0].main === "Clear"){
            weather.src="./image/clear.png";
            weather.style.transition=" ease-in-out .5s";
        }
        
        if(data.weather[0].main === "Rain"){
            weather.src="./image/rain.png";
            weather.style.transition=" ease-in-out .5s";
        }
        if(data.weather[0].main === "Drizzle"){
            weather.src="./image/drizzle.png";
            weather.style.transition=" ease-in-out .5s";
        }
        if(data.weather[0].main === "Mist"){
            weather.src="./image/mist.png";
            weather.style.transition=" ease-in-out .5s";
        }
        if(data.weather[0].main === "Snow"){
            weather.src="./image/snow.png";
            weather.style.transition=" ease-in-out .5s";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
  
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
    document.querySelector(".humdty").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";
    console.log(data);
 
    
  
} 
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBar.value);
})



