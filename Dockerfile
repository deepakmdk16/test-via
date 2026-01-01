# Multi-stage build for React app
# Stage 1: Build the React application
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with a lightweight web server
FROM node:18-alpine

WORKDIR /app

# Install serve to run the production build
RUN npm install -g serve

# Copy built files from the build stage
COPY --from=build /app/build ./build

# Expose port (Cloud Run will set the PORT environment variable)
EXPOSE 8080

# Set default PORT environment variable
ENV PORT=8080

# Start the application using serve with PORT environment variable
CMD serve -s build -l $PORT
