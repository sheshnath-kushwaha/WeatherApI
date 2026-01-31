const apiKey = "ca4cf31f7470f3f4d296687d1280d1fa";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searchBox=document.querySelector(".search input");
  const searchBtn=document.querySelector(".search button")
  const weatherimage=document.querySelector('.weather-icon')

async function checkWeather(city) {
  const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);

if(response.status==404){
    document.querySelector('.error').style.display="block";
     document.querySelector('.weather').style.display="none";
}else{
    const data = await response.json();
  console.log(data);
  document.querySelector('.city').innerHTML=data.name;
  document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + "°C";
  document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
  document.querySelector('.wind').innerHTML=data.wind.speed  +  "km/h";

  if(data.weather[0].main==='Clouds'){
    weatherimage.src="images/clouds.png";
  }
  else if(data.weather[0].main=="Clear"){
    weatherimage.src="images/clear.png";
  }
  else if(data.weather[0].main=="Rain"){
    weatherimage.src="images/rain.png";
  }
   else if(data.weather[0].main=="Drizzle"){
    weatherimage.src="images/drizzle.png";
  }

   else if(data.weather[0].main=="Mist"){
    weatherimage.src="images/mist.png";
  }
  else {
  weatherimage.src = "images/clear.png";
}

  document.querySelector('.weather').style.display='block';
  document.querySelector('.error').style.display="none"


}

  
}


searchBtn.addEventListener('click',function(){
    checkWeather(searchBox.value);
  
})

