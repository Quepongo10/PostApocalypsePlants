const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,is_day,weather_code';

// Fetch the weather data
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    document.getElementById('weather').innerText = `The current temperature in Lleida is ${data.current}°C`;
  })
  .catch(error => console.error('Error:', error));