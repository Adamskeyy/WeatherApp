class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        this.icon = document.getElementById('w-icon');
        this.pressure = document.getElementById('w-pressure');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');
        this.windDir = document.getElementById('w-wind_dir');
    }

    paint(weather) {
        const temperatureC = weather.main.temp;
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;
        // this.temp.textContent = `${temperatureC} ℃`;
        this.icon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        this.pressure.textContent = `Atmospheric pressure: ${weather.main.pressure} hPa`;
        this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
        this.wind.textContent = `Wind speed: ${weather.wind.speed} m/s`;
        this.windDir.textContent = `Wind direction: ${weather.wind.deg} degrees`;
    }

    displayTemp(weather, unit) {
        const temperatureC = weather.main.temp;

        // Applying chosen temp unit
        unit === 'C'
            ? (this.temp.textContent = `${temperatureC} ℃`)
            : (this.temp.textContent = `${convertToF(temperatureC)} °F`)
    }
}

function convertToF(celsius) {
    // make the given fahrenheit variable equal the given celsius value
    // multiply the given celsius value by 9/5 then add 32
    let fahrenheit = celsius * 9 / 5 + 32
    // return the variable fahrenheit as the answer
    return fahrenheit.toFixed(2);
}