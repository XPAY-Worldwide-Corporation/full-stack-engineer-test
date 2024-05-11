#!/bin/bash

# Define microservices directories
declare -a microservices=("api-gateway" "products" "orders" "users" "cart" "payments")

# Install dependencies for each microservice
for service in "${microservices[@]}"; do
  echo "Installing dependencies for $service"
  cd $service
  npm install
  cd ..
done

# Copy .env.local.example to .env.local if it exists
for service in "${microservices[@]}"; do
  if [ -f "$service/.env.local.example" ]; then
    echo "Copying .env.local.example to .env.local in $service"
    cp "$service/.env.local.example" "$service/.env.local"
  fi
done

# Build Docker images in each microservice directory
for service in "${microservices[@]}"; do
  echo "Building Docker image for $service"
  cd $service
  docker build -t "$service-image" .
  cd ..
done

# Navigate to the root backend directory
cd backend

# Run Docker Compose
echo "Starting services with Docker Compose from backend/ directory..."
docker-compose up -d

echo "All services are up and running."

