# Multi-stage build for React application

# Stage 1: Build the React app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Production environment with serve
FROM node:18-alpine

WORKDIR /app

# Install serve to run the production build
RUN npm install -g serve

# Copy built assets from builder stage
COPY --from=builder /app/build ./build

# Expose port (will be overridden by PORT env var)
EXPOSE 8080

# Set default PORT environment variable
ENV PORT=8080

# Create a startup script that uses the PORT environment variable
RUN echo '#!/bin/sh' > /app/start.sh && \
    echo 'serve -s build -l ${PORT}' >> /app/start.sh && \
    chmod +x /app/start.sh

# Run the application
CMD ["/app/start.sh"]
