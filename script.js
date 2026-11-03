// const appKey = "ef31e7dacb0a5a961822d70b3dcb0d25";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search Button");
// const weatherImg = document.querySelector(".weatherIcon");
// async function checkWeather(city) {
//     const response = await fetch(apiUrl +`?q=${city}`  + `&appid=ef31e7dacb0a5a961822d70b3dcb0d25`);
//      const data =  await response.json();
//      console.log(data);
//      document.querySelector(".city").innerHTML = data.name;
//      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "*c";
//      document.querySelector(".humdity").innerHTML = data.main.humidity + "%";
//      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
//      if(data.weather[0].main == "Clouds"){
//         weatherImg.src = "images/weather1.png";
//      }
//       else if(data.weather[0].main == "Drizzle"){
//         weatherImg.src = "images/weather2.png";
//      }
//       else if(data.weather[0].main == "Rain"){
//         weatherImg.src = "images/weather4.png";
//      }
// };
// searchBtn.addEventListener("click", () =>{
//     checkWeather(searchBox.value);
// });






const appKey = "ef31e7dacb0a5a961822d70b3dcb0d25";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search Button");
const weatherImg = document.querySelector(".weatherIcon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + `?q=${city}` + `&appid=ef31e7dacb0a5a961822d70b3dcb0d25`);
    const data = await response.json();
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
            document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "*c";
    document.querySelector(".humdity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if(data.weather[0].main == "Clouds"){
        weatherImg.src = "images/weatherepng.png";
    }
     else if(data.weather[0].main == "Clouds"){
        weatherImg.src = "images/weather4.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherImg.src = "images/weather1.png"
    }
    else if (data.weather[0].main == "Mist"){
        weatherImg.src = "images/weather2.png"
    }
    document.querySelector(".weather").style.display = "block";
     document.querySelector(".error").style.display = "none";
    }
    console.log(data);
}
searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
});