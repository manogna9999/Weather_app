const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");
const weather_gif = document.querySelector(".weather-gif");
const container = document.querySelector(".container");

async function checkWeather(city) {
  const api_key = "359562b10519c6cd69ff0b9f65ebbd4f";
  const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key};

  const weather_data = await fetch(${url}).then((response) =>
    response.json()
  );
  if (container === weather_gif) {
    container.style.background = "white";
  }
  if (weather_data.cod === 404) {
    container.style.background = "white";
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    weather_gif.style.display = "none";
    console.log("Please Enter a valid Name");
    return;
  }

  container.style.background =
    "url('https://i.pinimg.com/originals/9e/d7/23/9ed723dafcf9d8c1624afde070ce82cd.jpg') no-repeat fixed";
  weather_gif.style.display = "none";
  location_not_found.style.display = "none";
  weather_body.style.display = "flex";

  temperature.innerHTML = `${Math.round(
    weather_data.main.temp - 273.15
  )}<sup>°C</sup>`;
  description.innerHTML = ${weather_data.weather[0].description};
  humidity.innerHTML = ${weather_data.main.humidity}%;
  wind_speed.innerHTML = ${weather_data.wind.speed} Km/h;

  switch (weather_data.weather[0].main) {
    case "Clear":
      weather_img.src = "/Weather_APP/weather_img/clear.png";
      break;
    case "Clouds":
      weather_img.src = "/Weather_APP/weather_img/cloud.png";
      break;
    case "Rain":
      weather_img.src = "/Weather_APP/weather_img/rain.png";
      break;
    case "Mist":
      weather_img.src = "/Weather_APP/weather_img/mist.png";
      break;
    case "Haze":
      weather_img.src = "/Weather_APP/weather_img/haze.png";
      break;
    case "Snow":
      weather_img.src = "/Weather_APP/weather_img/snow.png";
      break;
  }

  console.log(weather_data);
}
searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});