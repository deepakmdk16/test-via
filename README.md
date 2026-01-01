# React Calculator

A simple, modern calculator web app built with React.

## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Decimal number support
- Clear function
- Responsive design
- Modern, clean UI with gradient styling
- Mobile-friendly

## Technologies Used

- React 18.2.0
- React DOM 18.2.0
- React Scripts 5.0.1
- CSS3 with modern features

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

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

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Launches the test runner in interactive watch mode.

## Usage

1. Click on number buttons (0-9) to input digits
2. Click on operator buttons (+, -, *, /) to perform operations
3. Click the decimal button (.) to add decimal points
4. Click the equals button (=) to calculate the result
5. Click the clear button (C) to reset the calculator

## Project Structure

```
react-calculator/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── Calculator.js   # Main calculator component
│   │   ├── Calculator.css  # Calculator styles
│   │   ├── Display.js      # Display component
│   │   ├── Display.css     # Display styles
│   │   ├── Button.js       # Button component
│   │   └── Button.css      # Button styles
│   ├── App.js              # Root application component
│   ├── App.css             # Application styles
│   ├── index.js            # Application entry point
│   └── index.css           # Global styles
├── package.json            # Project dependencies and scripts
├── Dockerfile              # Docker configuration for deployment
└── README.md               # Project documentation
```

## Deployment

This app can be deployed to any static hosting service or containerized using Docker.

### Docker Deployment

A Dockerfile is included for easy containerization:

```bash
docker build -t react-calculator .
docker run -p 8080:8080 react-calculator
```

The app will be available at [http://localhost:8080](http://localhost:8080)

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Contributing

Contributions, issues, and feature requests are welcome!

## License

This project is open source and available for personal and educational use.

## Author

Built with React for simple and efficient calculations.
