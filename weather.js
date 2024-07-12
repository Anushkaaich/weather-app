const apiKey = "54bba3cfbef3485cf8761b0d5a7ae367";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else {
        var data = await response.json();

        document.querySelector(".weather").style.display = "block";

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Kph";

        const icon = document.querySelector(".weather-icon");
        if (data.weather[0].main == "clear") {
            icon.src = "images/clear.png";
        } else if (data.weather[0].main == "Clouds") {
            icon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Drizzle") {
            icon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            icon.src = "images/mist.png";
        } else if (data.weather[0].main == "Rain") {
            icon.src = "images/rain.png";
        } else if (data.weather[0].main == "Snow") {
            icon.src = "images/snow.png";
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }

}

const cityName = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
searchBtn.addEventListener("click", () => {
    checkWeather(cityName.value);
});
