// Configuration file for Weather Forecast App

const CONFIG = {
    // OpenWeatherMap API Configuration
    // Get your free API key from: https://openweathermap.org/api
    API_KEY: 'YOUR_API_KEY_HERE',

    // API Endpoints
    BASE_URL: 'https://api.openweathermap.org/data/2.5',

    // Default settings
    DEFAULT_CITY: 'London',
    UNITS: 'metric', // metric for Celsius, imperial for Fahrenheit

    // API endpoints
    ENDPOINTS: {
        CURRENT_WEATHER: '/weather',
        FORECAST: '/forecast'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
