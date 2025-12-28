# Weather Forecast App

A modern, responsive weather forecasting application that provides current weather conditions and a 5-day forecast for any location worldwide.

## Features

### Weather Forecasting
- **Current Weather Display**: View real-time weather conditions including temperature, humidity, wind speed, pressure, and visibility
- **5-Day Forecast**: Get a comprehensive 5-day weather forecast with daily predictions
- **City Search**: Search for weather information by city name
- **Geolocation Support**: Automatically detect and display weather for your current location
- **Weather Icons**: Visual representation of weather conditions

### Temperature Calculator
- **Unit Conversion**: Convert temperatures between Celsius, Fahrenheit, and Kelvin
- **Real-time Updates**: All temperature units update automatically as you type
- **Temperature Facts**: Get interesting contextual information about any temperature
- **Quick Reference**: View common temperature reference points (freezing, boiling, body temperature, etc.)
- **Temperature Classification**: Understand if a temperature is cold, mild, warm, or hot
- **Relative Comparisons**: See how temperatures compare to common reference points

### General Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Clean, modern interface with intuitive navigation
- **Interactive Elements**: Smooth animations and hover effects

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox and grid layouts
- **JavaScript (ES6+)**: Vanilla JavaScript for functionality
- **OpenWeatherMap API**: Real-time weather data provider
- **Font Awesome**: Icon library for enhanced UI

## Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- An OpenWeatherMap API key (free tier available)

### Getting Your API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to your API keys section
4. Copy your API key

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/deepakmdk16/test-via.git
   cd test-via
   ```

2. Open `config.js` and replace `YOUR_API_KEY_HERE` with your OpenWeatherMap API key:
   ```javascript
   const CONFIG = {
       API_KEY: 'your_actual_api_key_here',
       // ... rest of the config
   };
   ```

3. Open `index.html` in your web browser:
   - Double-click the file, or
   - Use a local web server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js http-server
     npx http-server
     ```
   - Navigate to `http://localhost:8000` in your browser

## Usage

### Weather Features

#### Search by City

1. Enter a city name in the search box (e.g., "London", "New York", "Tokyo")
2. Click the "Search" button or press Enter
3. View the current weather and 5-day forecast

#### Use Your Location

1. Click the "Use My Location" button
2. Grant location permission when prompted by your browser
3. The app will display weather for your current location

### Temperature Calculator

#### Converting Temperatures

1. Scroll down to the "Temperature Calculator" section
2. Enter a temperature value in any of the three input fields:
   - Celsius (°C)
   - Fahrenheit (°F)
   - Kelvin (K)
3. The other two units will automatically update with the converted values
4. View interesting facts and contextual information about the temperature

#### Understanding Temperature Facts

The calculator provides:
- Temperature classification (extreme cold, cold, mild, warm, hot, extreme heat)
- Comparison to water freezing point
- Comparison to typical room temperature
- Comparison to human body temperature
- Information about water state at that temperature
- Special facts for notable temperatures (absolute zero, etc.)

## Project Structure

```
weather-forecast-app/
│
├── index.html                  # Main HTML file with app structure
├── styles.css                  # CSS styling and responsive design
├── app.js                      # Weather app JavaScript logic
├── temperature-calculator.js   # Temperature calculator logic
├── config.js                   # Configuration file (API keys, settings)
└── README.md                   # Project documentation
```

## Features Breakdown

### Current Weather Section

- City name and country
- Current date
- Temperature (Celsius)
- Weather description
- "Feels like" temperature
- Humidity percentage
- Wind speed
- Atmospheric pressure
- Visibility distance

### 5-Day Forecast Section

- Daily weather predictions
- Date/day labels
- Temperature forecasts
- Weather condition icons
- Brief weather descriptions

### Temperature Calculator Section

- Three input fields for Celsius, Fahrenheit, and Kelvin
- Real-time automatic conversion between units
- Temperature facts panel with contextual information
- Quick reference guide with common temperature points
- Interactive and responsive design

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## API Rate Limits

The free tier of OpenWeatherMap API includes:
- 60 calls per minute
- 1,000,000 calls per month

This should be more than sufficient for personal use.

## Customization

### Change Temperature Units

Edit `config.js`:
```javascript
UNITS: 'metric', // For Celsius (default)
// OR
UNITS: 'imperial', // For Fahrenheit
```

### Change Default City

Edit `config.js`:
```javascript
DEFAULT_CITY: 'YourCityName',
```

### Customize Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #64748b;
    /* ... modify as needed */
}
```

## Troubleshooting

### API Key Issues

**Problem**: Error message about API key
**Solution**: Ensure you've replaced `YOUR_API_KEY_HERE` in `config.js` with your actual API key

### City Not Found

**Problem**: "City not found" error
**Solution**:
- Check spelling of the city name
- Try adding country code (e.g., "London,UK")
- Use major city names for better results

### Geolocation Not Working

**Problem**: Location detection fails
**Solution**:
- Ensure you've granted location permission in your browser
- Check if your browser supports geolocation
- Use HTTPS or localhost for geolocation to work

### CORS Issues

**Problem**: Network errors when loading the page
**Solution**: Use a local web server instead of opening the HTML file directly

## Future Enhancements

Potential features for future versions:
- Hourly forecast
- Weather maps
- Multiple location tracking
- Weather alerts
- Historical weather data
- Unit conversion toggle (Celsius/Fahrenheit)
- Dark mode
- Weather trends and graphs
- Save favorite locations

## Credits

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [Font Awesome](https://fontawesome.com/)

## License

This project is open source and available for personal and educational use.

## Contributing

Contributions, issues, and feature requests are welcome!

## Author

Built with care for accurate and accessible weather information.

---

**Note**: This application requires an active internet connection to fetch weather data from the OpenWeatherMap API.
