function showweatherDetails(event) {
    event.preventDefault();


const city = "Thessaloniki"
const apiKey = 'cd4951d1205c152ffb10948ef6eeef8c'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Description: ${data.weather[0].description}</p>`;
    });
}
window.onload = showweatherDetails;