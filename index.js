let apiKey = "a93aab70d4719d6c8a0bad456266322e";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=en";

let searchBox = document.querySelector(".search input");
let searchButton = document.querySelector(".search button");
let weather_icon = document.querySelector(".weather-icon");
let cel;

async function checkWeather(city) {
  try {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error("Unable to fetch weather data.");
    }
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    const tempCelcius = Math.round(data.main.temp);
    document.querySelector(".temp").innerHTML = tempCelcius + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".pressure").innerHTML = data.main.pressure;

    if (data.weather[0].main === "Clouds") {
      weather_icon.src = "img/cloud.png";
    } else if (data.weather[0].main === "Clear") {
      weather_icon.src = "img/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weather_icon.src = "img/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weather_icon.src = "img/snow.png";
    } else if (data.weather[0].main === "Mist") {
      weather_icon.src = "img/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".err").style.display = "none";

    // Store the Celsius value
    cel = tempCelcius;
  } catch (error) {
    document.querySelector(".err").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    console.error(error);
  }
}


// Function to determine the location and get the weather
function getWeatherByLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const apiKey = "a93aab70d4719d6c8a0bad456266322e";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const cityName = data.name;
          searchBox.value = cityName; // Update the searchBox value with the city name from geolocation
          checkWeather(cityName); // Call checkWeather with the city name
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

// Call the location function on page load
window.onload = () => {
  getWeatherByLocation(); 
};

searchButton.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city !== "") {
    checkWeather(city);
  }
});

document.getElementById("celcius").addEventListener("click", () => {
  if (cel !== undefined) {
    document.querySelector(".temp").innerHTML = cel + "°C";
  }
});
