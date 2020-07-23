class Storage {
    constructor() {
        this.city;
        this.country;
        this.unit;
        this.defaultCity = 'Gdańsk';
        this.defaultCountry = 'pl';
        this.defaultUnit = 'C';
    }

    getLocationData() {
        localStorage.getItem('city') === null
            ? (this.city = this.defaultCity)
            : (this.city = localStorage.getItem('city'))

        localStorage.getItem('country') === null
            ? (this.country = this.defaultCountry)
            : (this.country = localStorage.getItem('country'))

        return {
            city: this.city,
            country: this.country
        }
    }

    setLocationData(city, country) {
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
    }

    getUnitData() {
        localStorage.getItem('unit') === null
            ? (this.unit = this.defaultUnit)
            : (this.unit = localStorage.getItem('unit'))

        return {
            unit: this.unit
        }
    }

    setUnitData(unit) {
        localStorage.setItem('unit', unit);
    }
}
