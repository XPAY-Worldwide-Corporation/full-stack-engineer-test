# E-Commerce Monorepo Example

This repository contains a basic example of a monorepo setup for an e-commerce website. It includes backend microservices built with NestJS and a frontend Progressive Web App (PWA) using NextJS.

Payment Integration were done using Stripe.

For more detailed information about the backend microservices, please refer to the [Backend Services README](backend/README.md).

## Installation Instructions

### Backend Services

1. **Build and Run Backend Microservices:**
   Use the provided script `build-local-env.sh` to build and run all backend microservices using Docker. This script sets up the environment, installs dependencies, and starts the services.

   ```bash
   ./build-local-env.sh
   ```

### Frontend Application

2. **Install Frontend Dependencies and Run:**
   Navigate to the frontend directory and use Yarn to install dependencies and run the NextJS application.

   ```bash
   cd frontend
   yarn install
   yarn dev
   ```

This will start the frontend development server, making the web application accessible locally for development and testing purposes.
