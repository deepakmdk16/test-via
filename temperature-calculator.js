// Temperature Calculator - Conversion and calculation utilities

class TemperatureCalculator {
    constructor() {
        this.initializeElements();
        this.attachEventListeners();
    }

    initializeElements() {
        this.celsiusInput = document.getElementById('celsiusInput');
        this.fahrenheitInput = document.getElementById('fahrenheitInput');
        this.kelvinInput = document.getElementById('kelvinInput');
        this.temperatureFacts = document.getElementById('temperatureFacts');
    }

    attachEventListeners() {
        this.celsiusInput.addEventListener('input', (e) => this.handleCelsiusInput(e.target.value));
        this.fahrenheitInput.addEventListener('input', (e) => this.handleFahrenheitInput(e.target.value));
        this.kelvinInput.addEventListener('input', (e) => this.handleKelvinInput(e.target.value));
    }

    // Conversion functions
    celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    celsiusToKelvin(celsius) {
        return celsius + 273.15;
    }

    fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    fahrenheitToKelvin(fahrenheit) {
        return this.celsiusToKelvin(this.fahrenheitToCelsius(fahrenheit));
    }

    kelvinToCelsius(kelvin) {
        return kelvin - 273.15;
    }

    kelvinToFahrenheit(kelvin) {
        return this.celsiusToFahrenheit(this.kelvinToCelsius(kelvin));
    }

    // Input handlers
    handleCelsiusInput(value) {
        if (value === '' || isNaN(value)) {
            this.clearOtherInputs('celsius');
            this.showDefaultFacts();
            return;
        }

        const celsius = parseFloat(value);
        this.fahrenheitInput.value = this.celsiusToFahrenheit(celsius).toFixed(2);
        this.kelvinInput.value = this.celsiusToKelvin(celsius).toFixed(2);
        this.updateTemperatureFacts(celsius);
    }

    handleFahrenheitInput(value) {
        if (value === '' || isNaN(value)) {
            this.clearOtherInputs('fahrenheit');
            this.showDefaultFacts();
            return;
        }

        const fahrenheit = parseFloat(value);
        const celsius = this.fahrenheitToCelsius(fahrenheit);
        this.celsiusInput.value = celsius.toFixed(2);
        this.kelvinInput.value = this.fahrenheitToKelvin(fahrenheit).toFixed(2);
        this.updateTemperatureFacts(celsius);
    }

    handleKelvinInput(value) {
        if (value === '' || isNaN(value)) {
            this.clearOtherInputs('kelvin');
            this.showDefaultFacts();
            return;
        }

        const kelvin = parseFloat(value);
        const celsius = this.kelvinToCelsius(kelvin);
        this.celsiusInput.value = celsius.toFixed(2);
        this.fahrenheitInput.value = this.kelvinToFahrenheit(kelvin).toFixed(2);
        this.updateTemperatureFacts(celsius);
    }

    clearOtherInputs(except) {
        if (except !== 'celsius') this.celsiusInput.value = '';
        if (except !== 'fahrenheit') this.fahrenheitInput.value = '';
        if (except !== 'kelvin') this.kelvinInput.value = '';
    }

    updateTemperatureFacts(celsius) {
        const facts = this.generateTemperatureFacts(celsius);
        this.temperatureFacts.innerHTML = facts.map(fact => `
            <div class="fact-item">
                <i class="${fact.icon}"></i>
                <p><strong>${fact.title}:</strong> ${fact.description}</p>
            </div>
        `).join('');
    }

    generateTemperatureFacts(celsius) {
        const facts = [];

        // Temperature classification
        if (celsius < -40) {
            facts.push({
                icon: 'fas fa-snowflake',
                title: 'Extreme Cold',
                description: 'This is dangerously cold! Exposed skin can freeze in minutes.'
            });
        } else if (celsius < 0) {
            facts.push({
                icon: 'fas fa-snowflake',
                title: 'Below Freezing',
                description: 'Water freezes at this temperature. Dress warmly!'
            });
        } else if (celsius < 10) {
            facts.push({
                icon: 'fas fa-temperature-low',
                title: 'Cold',
                description: 'Cool temperature. You\'ll want a jacket or warm clothing.'
            });
        } else if (celsius < 20) {
            facts.push({
                icon: 'fas fa-cloud',
                title: 'Mild',
                description: 'Comfortable temperature for most outdoor activities.'
            });
        } else if (celsius < 30) {
            facts.push({
                icon: 'fas fa-sun',
                title: 'Warm',
                description: 'Pleasant and warm. Perfect weather for outdoor activities!'
            });
        } else if (celsius < 40) {
            facts.push({
                icon: 'fas fa-temperature-high',
                title: 'Hot',
                description: 'Very warm! Stay hydrated and seek shade when possible.'
            });
        } else {
            facts.push({
                icon: 'fas fa-fire',
                title: 'Extreme Heat',
                description: 'Dangerously hot! Limit outdoor exposure and stay hydrated.'
            });
        }

        // Distance from common reference points
        const fromFreezing = Math.abs(celsius - 0);
        const fromRoom = Math.abs(celsius - 20);
        const fromBody = Math.abs(celsius - 37);
        const fromBoiling = Math.abs(celsius - 100);

        facts.push({
            icon: 'fas fa-ruler',
            title: 'Relative to Water Freezing',
            description: `${fromFreezing.toFixed(1)}°C ${celsius > 0 ? 'above' : 'below'} the freezing point of water`
        });

        facts.push({
            icon: 'fas fa-home',
            title: 'Relative to Room Temperature',
            description: `${fromRoom.toFixed(1)}°C ${celsius > 20 ? 'warmer' : 'cooler'} than typical room temperature`
        });

        facts.push({
            icon: 'fas fa-heartbeat',
            title: 'Relative to Body Temperature',
            description: `${fromBody.toFixed(1)}°C ${celsius > 37 ? 'above' : 'below'} normal human body temperature`
        });

        if (celsius >= -273.15 && celsius <= 100) {
            facts.push({
                icon: 'fas fa-water',
                title: 'Water State',
                description: celsius < 0 ? 'Water is ice at this temperature' :
                            celsius === 0 ? 'Water is freezing/melting at this temperature' :
                            celsius < 100 ? 'Water is liquid at this temperature' :
                            'Water is boiling/steam at this temperature'
            });
        }

        // Special notable temperatures
        if (Math.abs(celsius + 40) < 0.1 && Math.abs(this.celsiusToFahrenheit(celsius) + 40) < 0.1) {
            facts.push({
                icon: 'fas fa-equals',
                title: 'Unique Point',
                description: '-40° is the temperature where Celsius and Fahrenheit scales meet!'
            });
        }

        if (Math.abs(celsius + 273.15) < 0.1) {
            facts.push({
                icon: 'fas fa-atom',
                title: 'Absolute Zero',
                description: 'This is absolute zero - the lowest possible temperature in the universe!'
            });
        }

        return facts;
    }

    showDefaultFacts() {
        this.temperatureFacts.innerHTML = `
            <div class="fact-item">
                <i class="fas fa-info-circle"></i>
                <p>Enter a temperature in any unit to see conversions and interesting facts!</p>
            </div>
        `;
    }
}

// Initialize the temperature calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TemperatureCalculator();
});
