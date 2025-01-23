function getWeather() {
    let location = document.getElementById('location').value;

    // Check if the user has entered a location
    if (!location) {
        alert('Please enter a location');
        return;
    }

    const apiKey = '9036fdd7414b4b7c93293109252301'; // Your API key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('Location not found. Please try again.');
                return;
            }

            // Extracting data from the API response
            const locationName = data.location.name;
            const temperature = `${data.current.temp_c} °C`;
            const condition = data.current.condition.text;
            const humidity = `Humidity: ${data.current.humidity}%`;
            const wind = `Wind: ${data.current.wind_kph} kph`;

            // Displaying the weather information
            document.getElementById('location-name').textContent = locationName;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('condition').textContent = condition;
            document.getElementById('humidity').textContent = humidity;
            document.getElementById('wind').textContent = wind;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('There was an error fetching the weather data. Please try again later.');
        });
}
