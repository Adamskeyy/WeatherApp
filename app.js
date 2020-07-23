// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Get stored unit data
const unitData = storage.getUnitData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Init UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeatherWithStoredUnits);

function getWeatherWithStoredUnits() {
    const storedUnits = unitData.unit;
    getWeather();
    getTemp(storedUnits)
}


// Change location event
document.getElementById('w-change-btn').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    // Change location
    weather.changeLocation(city, country);

    // Save data in LS
    storage.setLocationData(city, country);

    // Get and display weather
    getWeather();
    getTemp(unitData.data);

    // Close modal
    $('#locModal').modal('hide');
});

// Change temp unit event
document.getElementById('w-change-btn2').addEventListener('click', () => {
    const tempUnit = document.getElementById('tempUnit');
    const tempUnitChosen = tempUnit.options[tempUnit.selectedIndex].value;

    // Display temperature in newly chosen units
    getTemp(tempUnitChosen);

    // Save unit data in LS
    storage.setUnitData(tempUnitChosen);

    // Close modal
    $('#locModal2').modal('hide');
});


function getWeather() {
    weather.getWeather()
        .then(results => ui.paint(results))
        .catch(err => console.log(err));
}

function getTemp(unit) {
    weather.getWeather()
        .then(results => ui.displayTemp(results, unit))
        .catch(err => console.log(err));
}
