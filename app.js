// Weather Forecast App - Main JavaScript

class WeatherApp {
    constructor() {
        this.apiKey = CONFIG.API_KEY;
        this.baseUrl = CONFIG.BASE_URL;
        this.units = CONFIG.UNITS;

        this.initializeElements();
        this.attachEventListeners();

        // Load default city on startup
        if (this.apiKey && this.apiKey !== 'YOUR_API_KEY_HERE') {
            this.getWeatherByCity(CONFIG.DEFAULT_CITY);
        } else {
            this.showError('Please set your OpenWeatherMap API key in config.js');
        }
    }

    initializeElements() {
        // Input elements
        this.cityInput = document.getElementById('cityInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.locationBtn = document.getElementById('locationBtn');

        // Display elements
        this.errorMessage = document.getElementById('errorMessage');
        this.loadingSpinner = document.getElementById('loadingSpinner');
        this.weatherContent = document.getElementById('weatherContent');

        // Current weather elements
        this.cityName = document.getElementById('cityName');
        this.currentDate = document.getElementById('currentDate');
        this.weatherIcon = document.getElementById('weatherIcon');
        this.temp = document.getElementById('temp');
        this.description = document.getElementById('description');
        this.feelsLike = document.getElementById('feelsLike');
        this.humidity = document.getElementById('humidity');
        this.windSpeed = document.getElementById('windSpeed');
        this.pressure = document.getElementById('pressure');
        this.visibility = document.getElementById('visibility');

        // Forecast elements
        this.forecastCards = document.getElementById('forecastCards');
    }

    attachEventListeners() {
        this.searchBtn.addEventListener('click', () => this.handleSearch());
        this.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleSearch();
            }
        });
        this.locationBtn.addEventListener('click', () => this.getUserLocation());
    }

    handleSearch() {
        const city = this.cityInput.value.trim();
        if (city) {
            this.getWeatherByCity(city);
        } else {
            this.showError('Please enter a city name');
        }
    }

    async getWeatherByCity(city) {
        try {
            this.showLoading();
            this.hideError();

            // Fetch current weather
            const currentWeatherUrl = `${this.baseUrl}${CONFIG.ENDPOINTS.CURRENT_WEATHER}?q=${city}&appid=${this.apiKey}&units=${this.units}`;
            const currentWeatherResponse = await fetch(currentWeatherUrl);

            if (!currentWeatherResponse.ok) {
                throw new Error('City not found');
            }

            const currentWeatherData = await currentWeatherResponse.json();

            // Fetch 5-day forecast
            const forecastUrl = `${this.baseUrl}${CONFIG.ENDPOINTS.FORECAST}?q=${city}&appid=${this.apiKey}&units=${this.units}`;
            const forecastResponse = await fetch(forecastUrl);
            const forecastData = await forecastResponse.json();

            this.displayWeather(currentWeatherData, forecastData);
            this.hideLoading();
        } catch (error) {
            this.hideLoading();
            this.showError(error.message || 'Failed to fetch weather data. Please try again.');
        }
    }

    async getWeatherByCoordinates(lat, lon) {
        try {
            this.showLoading();
            this.hideError();

            // Fetch current weather
            const currentWeatherUrl = `${this.baseUrl}${CONFIG.ENDPOINTS.CURRENT_WEATHER}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=${this.units}`;
            const currentWeatherResponse = await fetch(currentWeatherUrl);
            const currentWeatherData = await currentWeatherResponse.json();

            // Fetch 5-day forecast
            const forecastUrl = `${this.baseUrl}${CONFIG.ENDPOINTS.FORECAST}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=${this.units}`;
            const forecastResponse = await fetch(forecastUrl);
            const forecastData = await forecastResponse.json();

            this.displayWeather(currentWeatherData, forecastData);
            this.hideLoading();
        } catch (error) {
            this.hideLoading();
            this.showError('Failed to fetch weather data for your location');
        }
    }

    getUserLocation() {
        if (navigator.geolocation) {
            this.showLoading();
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    this.getWeatherByCoordinates(latitude, longitude);
                },
                (error) => {
                    this.hideLoading();
                    this.showError('Unable to get your location. Please enter a city manually.');
                }
            );
        } else {
            this.showError('Geolocation is not supported by your browser');
        }
    }

    displayWeather(currentData, forecastData) {
        // Display current weather
        this.cityName.textContent = `${currentData.name}, ${currentData.sys.country}`;
        this.currentDate.textContent = this.formatDate(new Date());

        const iconCode = currentData.weather[0].icon;
        this.weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        this.weatherIcon.alt = currentData.weather[0].description;

        this.temp.textContent = Math.round(currentData.main.temp);
        this.description.textContent = currentData.weather[0].description;
        this.feelsLike.textContent = Math.round(currentData.main.feels_like);
        this.humidity.textContent = `${currentData.main.humidity}%`;
        this.windSpeed.textContent = `${currentData.wind.speed} m/s`;
        this.pressure.textContent = `${currentData.main.pressure} hPa`;
        this.visibility.textContent = `${(currentData.visibility / 1000).toFixed(1)} km`;

        // Display 5-day forecast
        this.displayForecast(forecastData);

        // Show weather content
        this.weatherContent.classList.add('show');
    }

    displayForecast(forecastData) {
        this.forecastCards.innerHTML = '';

        // Get one forecast per day (around noon)
        const dailyForecasts = this.getDailyForecasts(forecastData.list);

        dailyForecasts.forEach(forecast => {
            const card = this.createForecastCard(forecast);
            this.forecastCards.appendChild(card);
        });
    }

    getDailyForecasts(forecasts) {
        const dailyForecasts = [];
        const processedDates = new Set();

        forecasts.forEach(forecast => {
            const date = new Date(forecast.dt * 1000);
            const dateString = date.toDateString();

            // Get one forecast per day (preferably around noon)
            if (!processedDates.has(dateString) && dailyForecasts.length < 5) {
                const hour = date.getHours();
                if (hour >= 11 && hour <= 15) {
                    processedDates.add(dateString);
                    dailyForecasts.push(forecast);
                }
            }
        });

        // If we don't have 5 forecasts, fill with any available
        if (dailyForecasts.length < 5) {
            const processedDates2 = new Set();
            dailyForecasts.forEach(f => {
                const date = new Date(f.dt * 1000);
                processedDates2.add(date.toDateString());
            });

            forecasts.forEach(forecast => {
                const date = new Date(forecast.dt * 1000);
                const dateString = date.toDateString();
                if (!processedDates2.has(dateString) && dailyForecasts.length < 5) {
                    processedDates2.add(dateString);
                    dailyForecasts.push(forecast);
                }
            });
        }

        return dailyForecasts.slice(0, 5);
    }

    createForecastCard(forecast) {
        const card = document.createElement('div');
        card.className = 'forecast-card';

        const date = new Date(forecast.dt * 1000);
        const dayName = this.getDayName(date);
        const iconCode = forecast.weather[0].icon;
        const temp = Math.round(forecast.main.temp);
        const description = forecast.weather[0].description;

        card.innerHTML = `
            <div class="date">${dayName}</div>
            <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${description}" />
            <div class="temp">${temp}°C</div>
            <div class="description">${description}</div>
        `;

        return card;
    }

    formatDate(date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    getDayName(date) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        if (date.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (date.toDateString() === tomorrow.toDateString()) {
            return 'Tomorrow';
        } else {
            return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        }
    }

    showLoading() {
        this.loadingSpinner.classList.add('show');
        this.weatherContent.classList.remove('show');
    }

    hideLoading() {
        this.loadingSpinner.classList.remove('show');
    }

    showError(message) {
        this.errorMessage.textContent = message;
        this.errorMessage.classList.add('show');
        this.weatherContent.classList.remove('show');
    }

    hideError() {
        this.errorMessage.classList.remove('show');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WeatherApp();
});
