# React Calculator App

A simple, responsive calculator web application built with React.

## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Percentage calculations
- Sign toggle (positive/negative)
- Decimal point support
- Clear function
- Responsive design that works on desktop and mobile devices
- Modern, clean UI with smooth animations

## Technologies Used

- **React 18.2.0**: UI component library
- **React Scripts**: Build tooling and development server
- **CSS3**: Modern styling with gradients and animations

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/deepakmdk16/test-via.git
   cd test-via
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Launches the test runner in interactive watch mode.

## Docker Deployment

This application includes a production-ready Dockerfile for containerized deployment.

### Building the Docker Image

```bash
docker build -t react-calculator .
```

### Running the Container

```bash
# Run on default port 8080
docker run -p 8080:8080 react-calculator

# Run on custom port using PORT environment variable
docker run -p 3000:3000 -e PORT=3000 react-calculator
```

The application will be available at `http://localhost:8080` (or your specified port).

### Docker Image Details

- Multi-stage build for optimized image size
- Uses Node.js 18 Alpine for minimal footprint
- Serves production build using `serve`
- Configurable port via `PORT` environment variable
- Default port: 8080

## Project Structure

```
react-calculator-app/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── App.js              # Main App component
│   ├── App.css             # App styling
│   ├── Calculator.js       # Calculator component with logic
│   ├── Calculator.css      # Calculator styling
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── Dockerfile              # Production-ready container configuration
├── .dockerignore           # Docker ignore file
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Usage

1. **Number Input**: Click on number buttons (0-9) to input numbers
2. **Operations**: Click on operation buttons (+, -, ×, ÷) to perform calculations
3. **Decimal**: Click the "." button to add decimal points
4. **Clear**: Click "AC" to clear all and start over
5. **Sign Toggle**: Click "±" to toggle between positive and negative
6. **Percentage**: Click "%" to convert the current number to a percentage
7. **Equals**: Click "=" to calculate the result

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Responsive Design

The calculator is fully responsive and optimized for:
- Desktop screens (1920px and above)
- Tablets (768px - 1024px)
- Mobile devices (320px - 767px)

## License

This project is open source and available for personal and educational use.

## Author

Built with React for a simple, efficient calculator experience.
